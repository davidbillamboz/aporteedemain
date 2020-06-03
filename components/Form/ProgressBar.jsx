import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import ProgressCircle from '../ProgressCircle';
import { Context } from './Wizard';
import { getCardById } from './utils';

const ProgressBar = ({ selectedCards, cards }) => {
  const { index } = useContext(Context);
  const baseIndex = index - 1;

  const getStepProgress = (stepIndex) => {
    if (baseIndex > stepIndex * 2) {
      return 1;
    }
    if (baseIndex >= stepIndex * 2) {
      return 0.5;
    }
    return 0;
  };

  const visualSteps = selectedCards.map((cardId, cardIndex) => {
    const card = getCardById(cards, cardId);
    return {
      title: card.theme,
      progress: getStepProgress(cardIndex),
    };
  });

  visualSteps.push({
    title: "S'engager",
    progress: getStepProgress(visualSteps.length),
  });

  return (
    <div
      className={`cursor-default bg-riptide px-8 ${
        visualSteps.length > 4 ? 'pb-2' : 'pb-6'
      } pt-2 overflow-hidden md:pb-8`}
    >
      <div className="flex justify-center">
        <>
          {visualSteps.map((step, i) => (
            <Fragment key={i}>
              <div className="relative">
                <div className="w-4 h-4">
                  <ProgressCircle percent={step.progress} />
                </div>
                <div
                  className={`absolute transform -translate-x-1/2 top-full pt-0.75 left-2 leading-none font-krub text-micro text-deepKoamaru uppercase ${
                    visualSteps.length > 4 ? 'hidden md:block' : ''
                  } md:text-base md:leading-snug`}
                >
                  {step.title}
                </div>
              </div>
              {i < visualSteps.length - 1 && (
                <div className="h-px2 bg-white flex-1 mt-2 max-w-20" />
              )}
            </Fragment>
          ))}
        </>
      </div>
    </div>
  );
};

ProgressBar.propTypes = {
  selectedCards: PropTypes.arrayOf(PropTypes.string).isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      theme: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ProgressBar;
