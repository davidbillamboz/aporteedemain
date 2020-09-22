import React, { useState } from 'react';
import PropTypes from 'prop-types';
import textPropType from '../../../proptypes/text';
import Checkbox from '../../Checkbox';
import RichText from '../../RichText';
import Navigation from '../Navigation';
import Step from './Step';

const IntroStep = ({
  title,
  text,
  cards,
  selectedCards: initialSelectedCards,
  updateData,
}) => {
  const [selectedCards, setSelectedCards] = useState(initialSelectedCards);
  const isValid = selectedCards.length > 0;

  const onNext = () => {
    updateData({ selectedCards });
    return true;
  };

  const onClickCard = (cardUid) => {
    if (selectedCards.includes(cardUid)) {
      const newSelectedCards = [...selectedCards];
      newSelectedCards.splice(newSelectedCards.indexOf(cardUid), 1);
      setSelectedCards(newSelectedCards);
      return;
    }
    setSelectedCards([...selectedCards, cardUid]);
  };

  return (
    <Step>
      <h1 className="text-2xl font-bold leading-none text-center md:w-4/6 md:mx-auto md:text-4xl">
        {title}
      </h1>
      <div className="mt-6 md:text-center">
        <RichText text={text} />
      </div>
      <div className="md:grid md:grid-cols-3 md:gap-4 md:my-12 md:max-w-5xl md:mx-auto">
        {cards.map((card) => (
          <div
            key={card.uid}
            className="flex items-center mt-4 md:block md:text-center md:shadow md:rounded-lg md:cursor-pointer"
            onClick={() => onClickCard(card.uid)}
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
                <Checkbox checked={selectedCards.includes(card.uid)} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Navigation onNext={onNext} nextEnabled={isValid} />
    </Step>
  );
};

IntroStep.propTypes = {
  title: PropTypes.string.isRequired,
  text: textPropType.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.string).isRequired,
  updateData: PropTypes.func.isRequired,
};

export default IntroStep;
