import PropTypes from 'prop-types';

export default PropTypes.shape({
  url: PropTypes.string.isRequired,
  dimensions: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }),
  alt: PropTypes.string,
  copyright: PropTypes.string,
});
