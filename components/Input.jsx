import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ register, error, ...rest }) => (
  <input
    className={`outline-none border-solid border-2 rounded px-4 py-4 w-full ${
      error
        ? 'border-red-500 focus:border-red-600'
        : 'border-gray focus:border-deepKoamaru'
    }`}
    ref={register}
    {...rest}
  />
);

Input.propTypes = {
  register: PropTypes.func,
  error: PropTypes.shape({}),
};

Input.defaultProps = {
  register: null,
  error: null,
};

export default Input;
