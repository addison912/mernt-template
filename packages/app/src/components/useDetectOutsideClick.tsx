import { useState, useEffect } from 'react';

/**
 * Hook for handling closing when clicking outside of an element
 * @param { EventTarget } el
 * @param { boolean } initialState
 */
export const useDetectOutsideClick = (el: React.RefObject<HTMLElement>, initialState: boolean) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const onClick = ({ target }: MouseEvent) => {
      // If the active element exists and is clicked outside of

      if (el.current !== null && !el.current.contains(target as Node)) {
        setIsActive(!isActive);
      }
    };

    // If the item is active, then listen for clicks outside
    if (isActive) {
      window.addEventListener('click', onClick);
    }

    return () => {
      window.removeEventListener('click', onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive] as const;
};
