import React from 'react';
import PropTypes from 'prop-types';
import { ChevronLeft as ChevronLeftIcon } from 'react-feather';
import MainButton from '../buttons/MainButton';
import { Context } from './Wizard';

const Navigation = ({ onNext, onPrevious, nextEnabled, isSubmit }) => (
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
        <MainButton
          title="continuer"
          type={isSubmit ? 'submit' : 'button'}
          onClick={async () =>
            nextEnabled && !isSubmit && (await onNext()) && loadNextStep()
          }
          disabled={!nextEnabled}
        />
      </div>
    )}
  </Context.Consumer>
);

Navigation.propTypes = {
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  nextEnabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
};

Navigation.defaultProps = {
  onPrevious: () => true,
  onNext: () => true,
  nextEnabled: true,
  isSubmit: false,
};

export default Navigation;
