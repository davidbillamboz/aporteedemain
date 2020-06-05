import React from 'react';
import PropTypes from 'prop-types';
import { fetchPage, fetchAllPages } from '../lib/prismic';
import textPropType from '../proptypes/text';
import RichText from '../components/RichText';

const ContentPage = ({ page }) => (
  <>
    {!page && <>404</>}
    {page && (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold leading-none mb-8">{page.title}</h1>
        <RichText text={page.text} />
      </div>
    )}
  </>
);

ContentPage.propTypes = {
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: textPropType.isRequired,
  }),
};

ContentPage.defaultProps = {
  page: null,
};

export async function getStaticProps({ params }) {
  const page = await fetchPage(params.slug);
  return {
    props: {
      ...page,
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
