import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, placeholder }) => (
  <input
    className="border-solid border-2 border-gray focus:border-deepKoamaru rounded px-4 py-4 w-full"
    type={type}
    placeholder={placeholder}
  />
);

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
