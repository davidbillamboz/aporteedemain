import PropTypes from 'prop-types';
import textPropType from '../text';
import imagePropType from '../image';
import cardNumberPropType from './number';
import cardCommitmentPropType from './commitment';
import cardResourcePropType from './resource';

export {
  cardNumberPropType as number,
  cardCommitmentPropType as commitment,
  cardResourcePropType as resource,
};

export default PropTypes.shape({
  id: PropTypes.string.isRequired,
  uid: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: imagePropType.isRequired,
  subtitle: PropTypes.string,
  text: textPropType.isRequired,
  numbers: PropTypes.arrayOf(cardNumberPropType).isRequired,
  numberssources: PropTypes.string,
  question: PropTypes.string.isRequired,
  commitments1: PropTypes.arrayOf(cardCommitmentPropType).isRequired,
  commitments2title: PropTypes.string,
  commitments2: PropTypes.arrayOf(cardCommitmentPropType).isRequired,
  resources: PropTypes.arrayOf(cardResourcePropType).isRequired,
});
