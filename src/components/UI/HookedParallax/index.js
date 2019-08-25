// Libraries
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useTranslateContent } from 'src/utils/hooks/useTranslateContext';

// TODO: check mobile

const HookedParallax = props => {
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

  // multiplierY defines how fast or slow we translate our elements
  const { multiplierY, style, children } = props;
  const [rect, setRect] = useState({});
  // const [screenHeight, setScreenHeight] = useState(0);
  // const [scrollY, setScrollY] = useState(0);

  const divRef = useRef(null);

  console.log('divRef', divRef);
  console.log('rect', rect);
  const { translateYVal } = useTranslateContent(multiplierY, rect, isReady);
  console.log('translateYVal', translateYVal);

  useEffect(() => {
    if (divRef && divRef.current) {
      const { y, height } = divRef.current.getBoundingClientRect();
      // rect has the Y position and height of the component
      setRect({ startingY: y, componentHeight: height });
    }
  }, [divRef]);

  if (!isReady) return null;

  return (
    <div
      ref={divRef}
      style={{
        ...style,
        transform: `translateY(${translateYVal}px)`,
      }}
    >
      {children}
    </div>
  );
};

const Container = styled.div`
  transform: translateY(${({ translateYVal }) => `${translateYVal}px`});
`;

HookedParallax.propTypes = {
  multiplierY: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
};

HookedParallax.defaultProps = {
  style: {},
};

export default HookedParallax;
