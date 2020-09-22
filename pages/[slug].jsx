import React from 'react';
import PropTypes from 'prop-types';
import { fetchPage, fetchDefaultMetadata } from '../lib/prismic';
import metadataPropType from '../proptypes/metadata';
import textPropType from '../proptypes/text';
import Metadata from '../components/Metadata';
import RichText from '../components/RichText';
import Page404 from './404';

const ContentPage = ({ metadata, page }) => {
  if (!page) {
    return <Page404 />;
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
  metadata: metadataPropType,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: textPropType.isRequired,
  }),
};

ContentPage.defaultProps = {
  metadata: null,
  page: null,
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const data = await fetchPage(params.slug, previewData);
  if (!data) {
    return { props: {}, unstable_revalidate: 5 };
  }
  const { metadata: pageMetadata, ...page } = data;
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
  return {
    paths: ['/kit', '/contact', '/manifesto', '/mentions-legales'],
    fallback: false,
  };
}

export default ContentPage;
