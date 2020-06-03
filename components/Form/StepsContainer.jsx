import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Context as WizardContext } from './Wizard';

const StepsContainer = ({ steps }) => {
  const { index: stepIndex } = useContext(WizardContext);
  const step = steps[stepIndex];

  return <step.Component {...step.props} />;
};

StepsContainer.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      Component: PropTypes.func.isRequired,
      props: PropTypes.shape({}).isRequired,
    })
  ).isRequired,
};

export default StepsContainer;
