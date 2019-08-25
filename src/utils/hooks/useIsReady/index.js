import { useCallback, useEffect, useState } from 'react';

export const useIsReady = () => {
  const [isReady, setIsReady] = useState(false);

  const initialScroll = useCallback(() => {
    if (!isReady && window.scrollY === 0) {
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    console.log('zzz windowY:', window.scrollY);
    if (window.scrollY === 0) {
      setIsReady(true);
    } else {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
      window.addEventListener('scroll', initialScroll);
    }

    return () => window.removeEventListener('scroll', initialScroll);
  }, []);

  return { isReady, setIsReady };
};
