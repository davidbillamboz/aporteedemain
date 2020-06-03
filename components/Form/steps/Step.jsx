import React from 'react';
import PropTypes from 'prop-types';
import Navigation from '../Navigation';

const Step = ({ children, onPrevious, onNext, isValid, withoutNavigation }) => (
  <div>
    {children}
    {!withoutNavigation && (
      <Navigation
        onPrevious={onPrevious}
        onNext={onNext}
        nextEnabled={isValid}
      />
    )}
  </div>
);

Step.propTypes = {
  children: PropTypes.node.isRequired,
  onPrevious: PropTypes.func,
  onNext: PropTypes.func,
  isValid: PropTypes.bool,
  withoutNavigation: PropTypes.bool,
};

Step.defaultProps = {
  onPrevious: () => true,
  onNext: () => true,
  isValid: true,
  withoutNavigation: false,
};

export default Step;
