import React from 'react';
import { RichText } from 'prismic-reactjs';
import cardPropType from '../../../proptypes/card';
import Step from './Step';

const CardContentStep = ({ card }) => (
  <Step>
    <div className="md:flex md:items-center">
      <div className="hidden md:block md:w-1/2">
        <img src={card.image.url} alt={card.image.alt} className="w-full" />
      </div>
      <div className="text-center md:text-left md:pl-4 md:w-1/2">
        <h1 className="text-5xl font-bold leading-none md:text-15">
          {card.title}
        </h1>
        <div className="mt-4 md:hidden">
          <img src={card.image.url} alt={card.image.alt} />
        </div>
        <h2 className="text-2xl font-bold leading-none mt-4">
          {card.subtitle}
        </h2>
        <div className="mt-4">
          <RichText render={card.text} />
        </div>
      </div>
    </div>
    <div className="text-3xl font-bold leading-none mt-10 mb-4 md:text-center md:text-4xl">
      Je m’informe :<br />
      Les chiffres qui ne trompent pas
    </div>
    <div className="md:grid md:grid-cols-3 md:gap-4">
      {card.numbers.map((number, index) => (
        <div
          key={index}
          className="py-6 border-solid border-b border-gray border-opacity-25 md:border-none"
        >
          <div className="text-chelseaCucumber text-7xl sm:text-8xl md:text-6xl lg:text-7xl font-bold leading-none mb-4">
            {number.value}
          </div>
          <div>
            <RichText render={number.text} />
          </div>
          {index === card.numbers.length - 1 && (
            <p className="mt-4 uppercase text-micro">{card.numberssources}</p>
          )}
        </div>
      ))}
    </div>
  </Step>
);

CardContentStep.propTypes = {
  card: cardPropType.isRequired,
};

export default CardContentStep;
