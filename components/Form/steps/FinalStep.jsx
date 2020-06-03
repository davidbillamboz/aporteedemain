import React from 'react';
import Step from './Step';

const FinalStep = () => {
  const onNext = () => {
    // validate data
    return true;
  };
  return (
    <Step onNext={onNext} withoutNavigation>
      final
    </Step>
  );
};

export default FinalStep;
