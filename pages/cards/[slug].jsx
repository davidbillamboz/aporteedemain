import React from 'react';
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
import Page404 from '../404';

const CardPage = ({ metadata, card }) => {
  if (!card) {
    return <Page404 />;
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
  metadata: metadataPropType,
  card: cardPropType,
};

CardPage.defaultProps = {
  metadata: null,
  card: null,
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await fetchCard(params.slug, previewData);
  if (!data) {
    return { props: {}, unstable_revalidate: 5 };
  }
  const { metadata: pageMetadata, ...card } = data;
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
