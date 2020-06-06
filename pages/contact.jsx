import React from 'react';
import PropTypes from 'prop-types';
import { fetchPage, fetchDefaultMetadata } from '../lib/prismic';
import metadataPropType from '../proptypes/metadata';
import textPropType from '../proptypes/text';
import Metadata from '../components/Metadata';
import RichText from '../components/RichText';

const ContactPage = ({ metadata, page }) => (
  <>
    <Metadata {...metadata} />
    <Metadata {...metadata} />
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold leading-none mb-8">{page.title}</h1>
      <RichText text={page.text} />
    </div>
  </>
);

ContactPage.propTypes = {
  metadata: metadataPropType.isRequired,
  page: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: textPropType.isRequired,
  }).isRequired,
};

export async function getStaticProps({ preview = false, previewData }) {
  const { metadata: pageMetadata, ...page } = await fetchPage(
    'contact',
    previewData
  );
  const defaultMetadata = await fetchDefaultMetadata(previewData);
  const url = `${process.env.BASE_URL}/contact`;
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

export default ContactPage;
