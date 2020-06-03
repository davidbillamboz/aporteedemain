import React from 'react';
import PropTypes from 'prop-types';
import { Context } from './Wizard';

const Navigation = ({ onNext, onPrevious, nextEnabled }) => (
  <Context.Consumer>
    {({
      index,
      stepCount,
      loadPreviousStep,
      loadNextStep,
      isFirstStep,
      isLastStep,
    }) => (
      <div>
        {index}/{stepCount}
        <button
          type="button"
          onClick={async () => (await onPrevious()) && loadPreviousStep()}
        >
          previous
        </button>
        <button
          type="button"
          onClick={async () => (await onNext()) && loadNextStep()}
        >
          next
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
