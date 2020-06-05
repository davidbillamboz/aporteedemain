import React from 'react';
import { fetchCard, fetchAllCards } from '../../lib/prismic';
import CardContent from '../../components/Card/Content';
import cardPropType from '../../proptypes/card';
import CardForm from '../../components/Card/Form';

const CardPage = ({ card }) => (
  <>
    {!card && <>404</>}
    {card && (
      <div className="container mx-auto py-12 px-4">
        <CardContent card={card} />
        <CardForm card={card} />
      </div>
    )}
  </>
);

CardPage.propTypes = {
  card: cardPropType,
};

CardPage.defaultProps = {
  card: null,
};

export async function getStaticProps({ params, preview = false, previewData }) {
  const card = await fetchCard(params.slug, previewData);
  return {
    props: {
      preview,
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
