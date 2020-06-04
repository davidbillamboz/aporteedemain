import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ShareButton = ({ icon }) => (
  <button
    className="bg-blueZodiac rounded-full text-white text-2xl w-16 h-16 hover:bg-opacity-75"
    type="button"
  >
    <FontAwesomeIcon icon={icon} className="" />
  </button>
);

ShareButton.propTypes = {
  icon: PropTypes.node.isRequired,
};

export default ShareButton;
