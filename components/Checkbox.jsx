import React from 'react';
import PropTypes from 'prop-types';
import { Check as CheckIcon } from 'react-feather';

const Checkbox = ({ checked, name, id, error }) => (
  <div
    className={`cursor-pointer w-6 h-6 flex justify-center items-center rounded ${
      checked ? 'bg-chelseaCucumber' : 'border'
    } ${error && checked ? 'bg-red-500' : ''}
      ${error && !checked ? 'border-red-500' : ''}`}
  >
    <input
      type="checkbox"
      className="hidden"
      name={name}
      id={id}
      checked={checked}
      readOnly
    />
    <div className={`w-6 h-6 text-white ${!checked ? 'hidden' : ''}`}>
      <CheckIcon className="w-full h-auto" />
    </div>
  </div>
);

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string,
  id: PropTypes.string,
  error: PropTypes.bool,
};

Checkbox.defaultProps = {
  name: null,
  id: null,
  error: false,
};

export default Checkbox;
