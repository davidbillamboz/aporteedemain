import PropTypes from 'prop-types';
import linkPropType from '../link';
import imagePropType from '../image';

export default PropTypes.shape({
  title: PropTypes.string,
  type: PropTypes.string,
  link: linkPropType,
  image: imagePropType,
});
