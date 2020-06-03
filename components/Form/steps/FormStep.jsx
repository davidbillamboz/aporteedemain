import React from 'react';
import PropTypes from 'prop-types';
import Step from './Step';

const FormStep = ({ firstname, lastname, email, updateData }) => {
  const onNext = () => {
    // validate data
    // updateData()
    return true;
  };
  return <Step onNext={onNext}>form</Step>;
};

FormStep.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  updateData: PropTypes.func.isRequired,
};

export default FormStep;
