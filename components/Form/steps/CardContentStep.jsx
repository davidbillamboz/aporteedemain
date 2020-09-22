import React from 'react';
import cardPropType from '../../../proptypes/card';
import CardContent from '../../Card/Content';
import Navigation from '../Navigation';
import Step from './Step';

const CardContentStep = ({ card }) => (
  <Step>
    <CardContent card={card} />
    <Navigation />
  </Step>
);

CardContentStep.propTypes = {
  card: cardPropType.isRequired,
};

export default CardContentStep;
