import React from 'react';
import PropTypes from 'prop-types';

const Burger = ({ active, onClick }) => (
  <div className="text-0">
    <button
      className={`hamburger hamburger--collapse ${active ? 'is-active' : ''}`}
      type="button"
      aria-label="Menu"
      aria-controls="navigation"
      aria-expanded={active ? 'true' : 'false'}
      onClick={onClick}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </button>
  </div>
);

Burger.propTypes = {
  active: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Burger;
