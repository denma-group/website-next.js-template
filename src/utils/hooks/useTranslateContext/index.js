// Libraries
import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

/*
	`useTranslateContent` takes a multiplier and returns the translateY value
*/

export const useTranslateContent = (multipliersY, { startingY, componentHeight }, isReady = true) => {
  const [translateYVal, setTranslateYVal] = useState(0);

  // Throtheled function that gets the Y translate value
  const getTranslateYValue = useCallback(() => {
    const { scrollY, innerHeight } = window;
    // Checks if component is in view before doing calculations for performance
    if (scrollY + innerHeight >= startingY * 0.8 && scrollY < startingY * 1.2) {
      // 'componentOffsetMultiplier' handles some weird cases when scrollY is less than the innerHeight
      const componentOffsetMultiplier = _.clamp(1 - scrollY / innerHeight, 0, 1);
      const relativeY =
        scrollY + innerHeight - startingY - componentOffsetMultiplier * (componentHeight / 2);

      const calculation = relativeY * -multipliersY;
      setTranslateYVal(calculation);
    }
  }, [componentHeight, multipliersY, startingY]);

  // throttled for performance
  const throttled = _.throttle(getTranslateYValue, 100);
  useEffect(() => {
    if (isReady) {
      window.addEventListener('scroll', throttled, true);
      return () => window.removeEventListener('scroll', throttled);
    }
  }, [getTranslateYValue, throttled, isReady]);

  return { translateYVal };
};
