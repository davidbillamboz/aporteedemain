import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import { fetchPage, fetchAllPages, fetchDefaultMetadata } from '../lib/prismic';
import metadataPropType from '../proptypes/metadata';
import textPropType from '../proptypes/text';
import Metadata from '../components/Metadata';
import RichText from '../components/RichText';

const ContentPage = ({ metadata, page }) => {
  if (!page) {
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
        <h1 className="text-4xl font-bold leading-none mb-8">{page.title}</h1>
        <RichText text={page.text} />
      </div>
    </>
  );
};

ContentPage.propTypes = {
  metadata: metadataPropType.isRequired,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: textPropType.isRequired,
  }),
};

ContentPage.defaultProps = {
  page: null,
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const { metadata: pageMetadata, ...page } = await fetchPage(
    params.slug,
    previewData
  );
  const defaultMetadata = await fetchDefaultMetadata(previewData);
  const url = `${process.env.BASE_URL}/${params.slug}`;
  const metadata = {
    ...defaultMetadata,
    title: page.title,
    ...pageMetadata,
    url,
  };
  return {
    props: {
      preview,
      page,
      metadata,
    },
    unstable_revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await fetchAllPages();
  const paths = pages?.map(({ uid }) => `/${uid}`) || [];
  return {
    paths,
    fallback: true,
  };
}

export default ContentPage;
