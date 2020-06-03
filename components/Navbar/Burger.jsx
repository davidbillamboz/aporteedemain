import React, { useState } from 'react';

const Burger = () => {
  const [active, setActive] = useState(false);
  const onClick = () => {
    setActive(!active);
  };

  return (
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
};

export default Burger;
