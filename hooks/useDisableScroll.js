import { useEffect, useState } from 'react';

const getOverflow = () => {
  if (typeof document === 'undefined') {
    return null;
  }
  const htmlEl = document.querySelector('html');
  return htmlEl.style.overflow;
};

function useDisableScroll(disabled) {
  const [initialOverflow] = useState(getOverflow());

  useEffect(() => {
    if (typeof document !== 'undefined') {
      const htmlEl = document.querySelector('html');

      // Disable scroll when the menu is active
      if (disabled) {
        htmlEl.style.overflow = 'hidden';
      } else {
        htmlEl.style.overflow = initialOverflow;
      }

      return () => {
        htmlEl.style.overflow = initialOverflow;
      };
    }
    return null;
  }, [disabled]);
}

export default useDisableScroll;
