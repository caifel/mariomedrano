import { useEffect } from 'react';

export const usePreventTouchStart = () => {
  useEffect(() => {
    const onDocumentTouchStart = (event: TouchEvent) => {
      event.preventDefault();
    };
    document.addEventListener('touchstart', onDocumentTouchStart, {
      passive: false,
    });

    return () => {
      document.removeEventListener('touchstart', onDocumentTouchStart);
    };
  }, []);
};
