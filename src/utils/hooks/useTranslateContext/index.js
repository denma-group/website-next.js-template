// Libraries
import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

/*
	`useTranslateContent` takes a multiplier and returns the translateY value
*/
// Throtheled function that gets the Y translate value
const getTranslateYValue = (startingY, componentHeight, multipliersY, setTranslateYVal) => {
  const { scrollY, innerHeight } = window;
  // Checks if component is in view before doing calculations for performance
  if (scrollY + innerHeight >= startingY * 0.8 && scrollY < startingY * 1.2) {
    // 'componentOffsetMultiplier' handles some weird cases when scrollY is less than the innerHeight
    const componentOffsetMultiplier = _.clamp(1 - scrollY / innerHeight, 0, 1);
    console.log('startingY', startingY);
    const relativeY =
      scrollY + innerHeight - startingY - componentOffsetMultiplier * (componentHeight / 2);

    const calculation = relativeY * -multipliersY;
    setTranslateYVal(calculation);
  }
};

export const useTranslateContent = (multipliersY, { startingY, componentHeight }, isReady = true) => {
  const [translateYVal, setTranslateYVal] = useState(0);

  // Throtheled function that gets the Y translate value
  // const getTranslateYValue = () => {
  //   const { scrollY, innerHeight } = window;
  //   // Checks if component is in view before doing calculations for performance
  //   if (scrollY + innerHeight >= startingY * 0.8 && scrollY < startingY * 1.2) {
  //     // 'componentOffsetMultiplier' handles some weird cases when scrollY is less than the innerHeight
  //     const componentOffsetMultiplier = _.clamp(1 - scrollY / innerHeight, 0, 1);
  //     console.log('startingY', startingY);
  //     const relativeY =
  //       scrollY + innerHeight - startingY - componentOffsetMultiplier * (componentHeight / 2);

  //     const calculation = relativeY * -multipliersY;
  //     setTranslateYVal(calculation);
  //   }
  // };

  // throttled for performance
  const throttled = _.throttle(() => getTranslateYValue(startingY, componentHeight, multipliersY, setTranslateYVal), 100);
  useEffect(() => {
    if (isReady) {
      window.addEventListener('scroll', throttled);
      return () => window.removeEventListener('scroll', throttled);
    }
  }, [throttled, startingY, componentHeight, multipliersY, setTranslateYVal, isReady]);

  useEffect(() => {
    if (isReady) {
      console.log('throttling');
      throttled();
    }
  }, [isReady])

  return { translateYVal };
};
