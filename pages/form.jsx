import React from 'react';
import PropTypes from 'prop-types';
import cardPropType from '../proptypes/card';
import Form from '../components/Form';
import { fetchAllCards } from '../lib/prismic';

const FormPage = ({ cards }) => (
  <>
    <Form cards={cards} />
  </>
);

FormPage.propTypes = {
  cards: PropTypes.arrayOf(cardPropType).isRequired,
};

export async function getStaticProps() {
  const cards = await fetchAllCards();
  return {
    props: {
      cards,
    },
    unstable_revalidate: 5,
  };
}

export default FormPage;
