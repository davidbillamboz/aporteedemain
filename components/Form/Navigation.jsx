import React from 'react';
import PropTypes from 'prop-types';
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from 'react-feather';
import { Context } from './Wizard';

const Navigation = ({ onNext, onPrevious, nextEnabled }) => (
  <Context.Consumer>
    {({ loadPreviousStep, loadNextStep, isFirstStep }) => (
      <div className="flex justify-center items-center mt-8">
        <button
          type="button"
          className={`rounded-full bg-white text-deepKoamaru shadow w-12 h-12 sm:w-20 sm:h-20 flex-shrink-0 flex items-center justify-center mr-5 hover:opacity-75 ${
            isFirstStep ? 'invisible' : ''
          }`}
          onClick={async () => (await onPrevious()) && loadPreviousStep()}
        >
          <ChevronLeftIcon className="w-10 h-auto" />
        </button>
        <button
          type="button"
          className={`rounded-full bg-chelseaCucumber ${
            nextEnabled ? 'hover:bg-opacity-95' : 'opacity-50 cursor-default'
          } text-white font-extrabold tracking-wider uppercase text-xl h-20 px-6 leading-none flex items-center shadow`}
          onClick={async () =>
            nextEnabled && (await onNext()) && loadNextStep()
          }
        >
          <ChevronRightIcon className="inline-block mr-2 w-10 h-auto" />
          <span className="inline-block">continuer</span>
        </button>
      </div>
    )}
  </Context.Consumer>
);

Navigation.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  nextEnabled: PropTypes.bool.isRequired,
};

export default Navigation;
