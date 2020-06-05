import { useState, useEffect } from 'react';

function useBreakpoint(breakpoint) {
  const [breakpointReached, setBreakpointReached] = useState(false);

  // Disable menu when the window is resizing
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setBreakpointReached(window.innerWidth >= breakpoint);
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
    return null;
  }, []);

  return breakpointReached;
}

export default useBreakpoint;
