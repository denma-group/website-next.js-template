// Libraries
import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Dependencies
import { useTranslateContent } from 'src/utils/hooks/useTranslateContext';
import elementPageOffset from 'src/utils/elementPageOffset';

const BODY_HEIGHT_SETUP_DELAY = 100;

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
    }, BODY_HEIGHT_SETUP_DELAY);
    setInnerHeightWatcher(oldState => ({
      ...oldState,
      timeoutId: newTimeoutId,
    }));
    // We don't want to re-run this useEffect by subscribing timeoutId to avoid an infinite loop
  }, [watcher]); // eslint-disable-line

  // multiplierY defines how fast or slow we translate our elements
  const { multiplierY, style, children } = props;
  const [rect, setRect] = useState({});

  const divRef = useRef(null);

  const { translateYVal } = useTranslateContent(multiplierY, rect, isReady);

  useEffect(() => {
    if (divRef && divRef.current && isReady) {
      const { pageTop, height } = elementPageOffset(divRef.current);
      // rect object has the Y position and height of the component.
      setRect({ startingY: pageTop, componentHeight: height });
    }
  }, [divRef, isReady]);

  // Do not render component until the body's height has been set
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

HookedParallax.propTypes = {
  multiplierY: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object),
};

HookedParallax.defaultProps = {
  style: {},
};

export default HookedParallax;
