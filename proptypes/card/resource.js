import PropTypes from 'prop-types';
import linkPropType from '../link';
import imagePropType from '../image';

export default PropTypes.shape({
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  link: linkPropType.isRequired,
  image: imagePropType.isRequired,
});
