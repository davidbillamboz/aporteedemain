import React from 'react';
import PropTypes from 'prop-types';
import SocialButton from './SocialButton';

const facebookPageUrl = process.env.FACEBOOK_PAGE_URL;
const twitterUsername = process.env.TWITTER_NICKNAME;
const instagramUsername = process.env.INSTAGRAM_USERNAME;

const SocialButtons = ({ size }) => {
  const twitterAccountUrl = `https://twitter.com/${twitterUsername}`;
  const instagramAccountUrl = `https://instagram.com/${instagramUsername}/`;

  return (
    <>
      <div className="inline-block mr-6">
        <SocialButton network="facebook" size={size} href={facebookPageUrl} />
      </div>
      <div className="inline-block mr-6">
        <SocialButton network="twitter" size={size} href={twitterAccountUrl} />
      </div>
      <div className="inline-block">
        <SocialButton
          network="instagram"
          size={size}
          href={instagramAccountUrl}
        />
      </div>
    </>
  );
};

SocialButtons.propTypes = {
  size: PropTypes.string,
};

SocialButtons.defaultProps = {
  size: 'default',
};

export default SocialButtons;
