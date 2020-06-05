import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from './SocialButton';

const SocialButtons = ({ size }) => (
  <>
    <div className="inline-block mr-6">
      <SocialButton network="facebook" size={size} />
    </div>
    <div className="inline-block mr-6">
      <SocialButton network="twitter" size={size} />
    </div>
    <div className="inline-block">
      <SocialButton network="instagram" size={size} />
    </div>
  </>
);

SocialButtons.propTypes = {
  size: PropTypes.string,
};

SocialButtons.defaultProps = {
  size: 'default',
};

export default SocialButtons;
