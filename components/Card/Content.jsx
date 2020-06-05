import React from 'react';
import { RichText } from 'prismic-reactjs';
import cardPropType from '../../proptypes/card';

const CardContent = ({ card }) => (
  <>
    <div className="md:flex md:items-center">
      <div className="hidden md:block md:w-1/2">
        <div className="md:aspect-ratio-square md:relative">
          {card.image && (
            <img
              src={card.image.url}
              alt={card.image.alt}
              className="w-full absolute top-0 left-0"
            />
          )}
        </div>
      </div>
      <div className="text-center md:text-left md:pl-4 md:w-1/2">
        <h1 className="text-5xl font-bold leading-none md:text-15">
          {card.title}
        </h1>
        <div className="aspect-ratio-square relative mt-4 md:hidden">
          {card.image && (
            <img
              src={card.image.url}
              alt={card.image.alt}
              className="w-full absolute top-0 left-0"
            />
          )}
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
      {card.numbers.slice(0, 3).map((number, index) => (
        <div
          key={index}
          className="py-6 border-solid border-b border-gray border-opacity-25 md:border-none"
        >
          <div className="text-chelseaCucumber text-7xl overflow-hidden font-bold leading-none mb-4 sm:text-8xl md:text-6xl lg:text-7xl">
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
  </>
);

CardContent.propTypes = {
  card: cardPropType.isRequired,
};

export default CardContent;
