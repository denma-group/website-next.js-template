import { useCallback, useEffect, useState } from 'react';

export const useIsReady = () => {
  const [isReady, setIsReady] = useState(false);

  const initialScroll = useCallback(() => {
    if (!isReady && window.scrollY === 0) {
      setIsReady(true);
    }
  }, [isReady]);

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, []);

  return { isReady, setIsReady };
};
