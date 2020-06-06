import PropTypes from 'prop-types';
import imagePropType from './image';

export default PropTypes.shape({
  title: PropTypes.string,
  description: PropTypes.string,
  imageSocialNetwork: imagePropType,
  siteName: PropTypes.string,
  facebookPageUrl: PropTypes.string,
  twitterUsername: PropTypes.string,
  instagramUsername: PropTypes.string,
});
