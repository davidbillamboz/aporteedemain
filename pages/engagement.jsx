import React from 'react';
import PropTypes from 'prop-types';
import {
  fetchAllCards,
  fetchEngagementPage,
  fetchDefaultMetadata,
} from '../lib/prismic';
import cardPropType from '../proptypes/card';
import metadataPropType from '../proptypes/metadata';
import Form from '../components/Form';
import Metadata from '../components/Metadata';

const EngagementPage = ({ metadata, cards, page }) => (
  <>
    <Metadata {...metadata} />
    <Form cards={cards} {...page} />
  </>
);

EngagementPage.propTypes = {
  metadata: metadataPropType.isRequired,
  page: PropTypes.shape({}).isRequired,
  cards: PropTypes.arrayOf(cardPropType).isRequired,
};

export async function getStaticProps({ preview = false, previewData }) {
  const { metadata: pageMetadata, ...page } = await fetchEngagementPage(
    previewData
  );
  const defaultMetadata = await fetchDefaultMetadata(previewData);
  const url = `${process.env.BASE_URL}/engagement`;
  const metadata = { ...defaultMetadata, ...pageMetadata, url };
  const cards = await fetchAllCards();
  return {
    props: {
      preview,
      cards,
      metadata,
      page,
    },
    unstable_revalidate: 5,
  };
}

export default EngagementPage;
