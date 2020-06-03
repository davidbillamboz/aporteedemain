import PropTypes from 'prop-types';
import textPropType from '../text';

export default PropTypes.shape({
  value: PropTypes.string.isRequired,
  text: textPropType.isRequired,
});
