import React from 'react';
import PropTypes from 'prop-types';
import { Check as CheckIcon } from 'react-feather';

const Checkbox = ({ checked }) => {
  return (
    <div
      className={`w-6 h-6 flex justify-center items-center rounded ${
        checked ? 'bg-chelseaCucumber' : 'border'
      }`}
    >
      <div className={`w-6 h-6 text-white ${!checked ? 'hidden' : ''}`}>
        <CheckIcon className="w-full h-auto" />
      </div>
    </div>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
};

export default Checkbox;
