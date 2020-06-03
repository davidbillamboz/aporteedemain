import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Step from './Step';

const ChoicesStep = ({
  cards,
  selectedCards: initialSelectedCards,
  updateData,
}) => {
  const [selectedCards, setSelectedCards] = useState(initialSelectedCards);

  const onNext = () => {
    updateData({ selectedCards });
    return true;
  };

  const onClickCard = (cardId) => {
    if (selectedCards.includes(cardId)) {
      const newSelectedCards = [...selectedCards];
      newSelectedCards.splice(newSelectedCards.indexOf(cardId), 1);
      setSelectedCards(newSelectedCards);
      return;
    }
    setSelectedCards([...selectedCards, cardId]);
  };

  return (
    <Step onNext={onNext}>
      {cards.map((card) => (
        <div key={card.id} onClick={() => onClickCard(card.id)}>
          {card.title}
        </div>
      ))}
    </Step>
  );
};

ChoicesStep.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateData: PropTypes.func.isRequired,
};

export default ChoicesStep;
