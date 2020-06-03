import PropTypes from 'prop-types';

export default PropTypes.shape({
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  copyright: PropTypes.string,
});
