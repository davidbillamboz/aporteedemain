import React from 'react';
import PropTypes from 'prop-types';
import { ChevronRight as ChevronRightIcon } from 'react-feather';

const MainButton = ({ title, disabled, ...rest }) => (
  <button
    type="button"
    className={`rounded-full bg-chelseaCucumber ${
      !disabled ? 'hover:bg-opacity-95' : 'opacity-50 cursor-default'
    } text-white font-extrabold tracking-wider uppercase text-xl h-20 px-6 leading-none flex items-center shadow`}
    {...rest}
  >
    <ChevronRightIcon className="inline-block mr-2 w-10 h-auto" />
    <span className="inline-block">{title}</span>
  </button>
);

MainButton.propTypes = {
  title: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

MainButton.defaultProps = {
  disabled: false,
};

export default MainButton;
