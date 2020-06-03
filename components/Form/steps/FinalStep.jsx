import React from 'react';
import Step from './Step';

const FinalStep = () => {
  const onNext = () => {
    // validate data
    return true;
  };
  return <Step onNext={onNext}>final</Step>;
};

export default FinalStep;
