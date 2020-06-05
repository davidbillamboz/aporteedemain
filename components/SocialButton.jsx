import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const getIcon = (network) => {
  switch (network) {
    case 'facebook':
      return faFacebookF;
    case 'twitter':
      return faTwitter;
    case 'instagram':
      return faInstagram;
    default:
      throw new Error('network not supported');
  }
};

const SocialButton = ({ network }) => {
  const icon = getIcon(network);
  return (
    <a
      href="/"
      className="flex items-center justify-center bg-white rounded-full text-blueZodiac text-2xl w-16 h-16 hover:bg-opacity-75"
    >
      <FontAwesomeIcon icon={icon} className="" />
    </a>
  );
};

SocialButton.propTypes = {
  network: PropTypes.oneOf(['facebook', 'twitter', 'instagram']).isRequired,
};

export default SocialButton;
