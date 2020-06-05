import PropTypes from 'prop-types';
import textPropType from '../text';

export default PropTypes.shape({
  text: textPropType,
  icon: PropTypes.shape({
    url: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
});
