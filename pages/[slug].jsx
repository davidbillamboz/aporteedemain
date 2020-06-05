import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import DefaultErrorPage from 'next/error';
import { fetchPage, fetchAllPages } from '../lib/prismic';
import textPropType from '../proptypes/text';
import RichText from '../components/RichText';

const ContentPage = ({ page }) => {
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
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold leading-none mb-8">{page.title}</h1>
      <RichText text={page.text} />
    </div>
  );
};

ContentPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: textPropType.isRequired,
  }),
};

ContentPage.defaultProps = {
  page: null,
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const page = await fetchPage(params.slug, previewData);

  return {
    props: {
      page,
      preview,
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
