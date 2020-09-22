import React from 'react';
import PropTypes from 'prop-types';

const Step = ({ children }) => (
  <div className="container mt-4 lg:mt-6 mx-auto p-4 text-deepKoamaru">
    {children}
  </div>
);

Step.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Step;
