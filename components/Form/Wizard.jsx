import React, { useEffect, useRef, useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

// handle direction and step validation

const Wizard = ({ children, stepCount }) => {
  const topRef = useRef(null);
  const [index, setIndex] = useState(0);

  const loadPreviousStep = () => {
    if (index <= 0) {
      return;
    }
    setIndex(index - 1);
  };

  const loadNextStep = () => {
    if (index + 1 >= stepCount) {
      return;
    }
    setIndex(index + 1);
  };

  const isFirstStep = index === 0;
  const isLastStep = index === stepCount - 1;

  // Scroll to top when the step changes
  useEffect(() => {
    if (!(topRef && topRef.current)) {
      return;
    }
    window.scrollTo(0, topRef.current.offsetTop);
  }, [index]);

  return (
    <Context.Provider
      value={{
        index,
        stepCount,
        loadNextStep,
        loadPreviousStep,
        isFirstStep,
        isLastStep,
      }}
    >
      <div ref={topRef}>{children}</div>
    </Context.Provider>
  );
};

Wizard.propTypes = {
  children: PropTypes.node.isRequired,
  stepCount: PropTypes.number.isRequired,
};

export default Wizard;
