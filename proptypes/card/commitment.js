import PropTypes from 'prop-types';
import textPropType from '../text';

export default PropTypes.shape({
  text: textPropType.isRequired,
  icon: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
});
