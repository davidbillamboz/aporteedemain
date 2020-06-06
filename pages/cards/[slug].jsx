import React from 'react';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import {
  fetchCard,
  fetchAllCards,
  fetchDefaultMetadata,
} from '../../lib/prismic';
import Metadata from '../../components/Metadata';
import CardContent from '../../components/Card/Content';
import CardForm from '../../components/Card/Form';
import cardPropType from '../../proptypes/card';
import metadataPropType from '../../proptypes/metadata';

const CardPage = ({ metadata, card }) => {
  if (!card) {
    return (
      <>
        <Head>
          <meta name="robots" content="noindex" />
        </Head>
        <DefaultErrorPage statusCode={404} />
      </>
    );
  }
  return (
    <>
      <Metadata {...metadata} />
      <div className="container mx-auto py-12 px-4">
        <CardContent card={card} />
        <CardForm card={card} />
      </div>
    </>
  );
};

CardPage.propTypes = {
  metadata: metadataPropType.isRequired,
  card: cardPropType,
};

CardPage.defaultProps = {
  card: null,
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const { metadata: pageMetadata, ...card } = await fetchCard(
    params.slug,
    previewData
  );
  const defaultMetadata = await fetchDefaultMetadata(previewData);
  const url = `${process.env.BASE_URL}/${params.slug}`;
  const metadata = {
    ...defaultMetadata,
    title: card.title,
    imageSocialNetwork: card.image,
    ...pageMetadata,
    url,
  };
  return {
    props: {
      preview,
      metadata,
      card,
    },
    unstable_revalidate: 5,
  };
}

export async function getStaticPaths() {
  const cards = await fetchAllCards();
  const paths = cards?.map(({ uid }) => `/cards/${uid}`) || [];
  return {
    paths,
    fallback: true,
  };
}

export default CardPage;
