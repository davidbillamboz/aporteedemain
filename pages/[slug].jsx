import React from 'react';
import PropTypes from 'prop-types';
import { fetchPage, fetchAllPages } from '../lib/prismic';
import textPropType from '../proptypes/text';
import RichText from '../components/RichText';

const ContentPage = ({ title, text }) => (
  <div className="container mx-auto py-12 px-4">
    <h1 className="text-4xl font-bold leading-none mb-8">{title}</h1>
    <RichText text={text} />
  </div>
);

ContentPage.propTypes = {
  title: PropTypes.string.isRequired,
  text: textPropType.isRequired,
};

export async function getStaticProps({ params }) {
  const data = await fetchPage(params.slug);

  return {
    props: {
      title: data.title,
      text: data.text,
    },
    unstable_revalidate: 5,
  };
}

export async function getStaticPaths() {
  const pages = await fetchAllPages();
  return {
    paths: pages?.map(({ uid }) => `/${uid}`) || [],
    fallback: true,
  };
}

export default ContentPage;
