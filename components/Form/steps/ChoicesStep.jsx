import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '../../Checkbox';
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
    <Step onNext={onNext} isValid={selectedCards.length > 0}>
      <h1 className="text-2xl font-bold leading-none text-center md:w-4/6 md:mx-auto md:text-4xl">
        À vous de choisir !<br />
        Quelles thématiques vous intéressent ?
      </h1>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:my-12 md:max-w-5xl md:mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="flex items-center mt-4 md:block md:text-center md:shadow md:rounded-lg md:cursor-pointer"
            onClick={() => onClickCard(card.id)}
          >
            <div className="w-28 -ml-4 flex-shrink-0 md:mx-0 md:w-full md:h-auto">
              <div className="aspect-ratio-square relative">
                <img
                  src={card.image.url}
                  alt={card.image.alt}
                  className="w-full absolute top-0 left-0"
                />
              </div>
            </div>
            <div className="flex items-center md:block md:p-6 md:pt-0">
              <div className="mx-3 md:mx-0">
                <div className="text-xl font-bold leading-none md:text-4xl">
                  {card.theme}
                </div>
                <div className="font-krub leading-tight mt-2 text-sm md:text-base">
                  {card.subtitle}
                </div>
              </div>
              <div className="md:flex md:justify-center md:mt-4">
                <Checkbox checked={selectedCards.includes(card.id)} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </Step>
  );
};

ChoicesStep.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateData: PropTypes.func.isRequired,
};

export default ChoicesStep;
