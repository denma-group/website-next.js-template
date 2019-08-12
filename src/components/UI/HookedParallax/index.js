import React, { useRef, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import { useTranslateContent } from 'src/utils/hooks/useTranslateContext';

// TODO: check mobile

const HookedParallax = props => {
  // multiplierY defines how fast or slow we translate our elements
  const { multiplierY, style, children } = props;
  const [rect, setRect] = useState({});
  // const [screenHeight, setScreenHeight] = useState(0);
  // const [scrollY, setScrollY] = useState(0);

  const divRef = useRef(null);

  const { translateYVal } = useTranslateContent(multiplierY, rect);

  useLayoutEffect(() => {
    if (divRef) {
      const { y, height } = divRef.current.getBoundingClientRect();
      // rect has the Y position and height of the component
      setRect({ startingY: y, componentHeight: height });
    }
  }, [divRef]);

  return (
    <div ref={divRef} style={{ ...style, transform: `translateY(${translateYVal}px)` }}>
      {children}
    </div>
  );
};

HookedParallax.propTypes = {
  multiplierY: PropTypes.number.isRequired,
  children: PropTypes.node.isRequired,
  style: PropTypes.instanceOf(Object)
};

HookedParallax.defaultProps = {
  style: {}
};

export default HookedParallax;
