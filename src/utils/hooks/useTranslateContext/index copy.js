// Libraries
import { useState, useEffect, useCallback } from 'react';
import _ from 'lodash';

/*
	`useTranslateContent` takes a multiplier and returns the translateY value
*/
export const useTranslateContent = (multipliersY, divRef) => {
  const [innerHeightWatcher, setInnerHeightWatcher] = useState({
    watcher: 0,
    isReady: false,
    timeoutId: undefined,
  });
  const { watcher, timeoutId, isReady } = innerHeightWatcher;

  useEffect(() => {
    clearTimeout(timeoutId);
    const newTimeoutId = setTimeout(() => {
      setInnerHeightWatcher(oldState => ({
      ...oldState,
      isReady: true,
      }));
    }, 500);
    setInnerHeightWatcher(oldState => ({
      ...oldState,
      timeoutId: newTimeoutId,
    }));
    // We don't want to re-run this useEffect by subscribing timeoutId to avoid an infinite loop
  }, [watcher]); // eslint-disable-line

  useEffect(() => {
    setInnerHeightWatcher(oldState => ({
      ...oldState,
      watcher: scrollHeight,
    }));
  }, [scrollHeight]);

  const [translateYVal, setTranslateYVal] = useState(0);

  // throtheled function that gets the Y translate value
  const getTranslateYValue = useCallback(() => {
    if (divRef && divRef.current) {
      const { y, height } = divRef.current.getBoundingClientRect();
      // rect has the Y position and height of the component
      const { scrollY, innerHeight } = window;
      // console.log('inside getTranslateYValue');
      // console.log('scrollY + innerHeight >= (startingY || 0) * 0.8', scrollY + innerHeight >= (startingY || 0) * 0.8);
      // console.log('scrollY < (startingY || 0) * 1.2', scrollY < (startingY || 0) * 1.2);
      // console.log('scrollY', scrollY);
      // console.log('innerHeight', innerHeight);
      // console.log('startingY', startingY);
      // checks if component is in view before doing calculations for performance
      if (
          scrollY + innerHeight >= y * 0.8 &&
          scrollY < y * 1.2
        ) {
        // 'componentOffsetMultiplier' handles some weird cases when scrollY is less than the innerHeight
        const componentOffsetMultiplier = _.clamp(1 - scrollY / innerHeight, 0, 1);
        console.log('----------------------')
        console.log('componentOffsetMultiplier', componentOffsetMultiplier);
        console.log('scrollY', scrollY);
        console.log('y', y);
        console.log('componentOffsetMultiplier', componentOffsetMultiplier);
        console.log('componentOffsetMultiplier', componentOffsetMultiplier);
        console.log('height', height);

        const relativeY =
          scrollY + innerHeight - y - componentOffsetMultiplier * (height / 2);

        const calculation = relativeY * -multipliersY;
        console.log('setting calculation', calculation);
        console.log('----------------------')
        setTranslateYVal(calculation);
      }
    }
  }, [multipliersY, divRef]);

  // throttled for performance
  const throttled = _.throttle(getTranslateYValue, 5);
  useEffect(() => {
    window.addEventListener('scroll', throttled);
    return () => window.removeEventListener('scroll', throttled);
  }, [isReady, throttled]);
  // console.log('{ isReady, translateYVal }', { isReady, translateYVal });
  if (typeof window === 'undefined') return { isReady, translateYVal };
  const { scrollHeight } = document.body;
  return { isReady, translateYVal };
};
