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
import { getStats } from './api/stats';

const EngagementPage = ({ metadata, cards, page, committerCount }) => (
  <>
    <Metadata {...metadata} />
    <Form cards={cards} {...page} committerCount={committerCount} />
  </>
);

EngagementPage.propTypes = {
  metadata: metadataPropType.isRequired,
  page: PropTypes.shape({}).isRequired,
  cards: PropTypes.arrayOf(cardPropType).isRequired,
  committerCount: PropTypes.number.isRequired,
};

export async function getStaticProps({ preview = false, previewData }) {
  const { metadata: pageMetadata, ...page } = await fetchEngagementPage(
    previewData
  );
  const defaultMetadata = await fetchDefaultMetadata(previewData);
  const url = `${process.env.BASE_URL}/engagement`;
  const metadata = { ...defaultMetadata, ...pageMetadata, url };
  const cards = await fetchAllCards();
  const stats = await getStats();
  return {
    props: {
      preview,
      cards,
      metadata,
      page,
      committerCount: stats.committers || 0,
    },
    unstable_revalidate: 5,
  };
}

export default EngagementPage;
