
// Libraries
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

// Components
import { CSSTransition } from 'react-transition-group';

// Dependencies
import useElementInViewport from '../utils/useElementInViewport';

const ANIMATION_TIMEOUT = 1000;
const POP_IN_DEFAULT_CLASS = 'pop-in';

const PopIn = props => {
  const {
    // Functionality
    wrapper: WrapperComponent,
    shouldPopOutOnExit = false,
    animationMultiplier = 1,
    animationDelay = ANIMATION_TIMEOUT / 2,
    // CSSTransition props
    animationTimeout = ANIMATION_TIMEOUT,
    classNames = POP_IN_DEFAULT_CLASS,
    onEnter,
    onExited,
    unmountOnExit = false,
    // Children MUST be one wrapper element at most
    children,
    ...rest
  } = props;
  const [ref, firstInView, inView] = useElementInViewport();

  const duration = animationTimeout * animationMultiplier;
  const delay = animationDelay * animationMultiplier;

  // A custom `Component` can be passed as a prop to use as a wrapper
  // Otherwise we fall back to a div
  const Wrapper = useMemo(() => (
    (WrapperComponent ? styled(WrapperComponent) : styled.div)`
      ${popInCss(duration, delay, classNames)}
    `
  ), [WrapperComponent, duration, delay, classNames]);

  return (
    <Wrapper
      innerRef={ref}
      {...rest}
      className={classNames}
    >
      <CSSTransition
        in={shouldPopOutOnExit ? inView : firstInView}
        timeout={animationTimeout}
        classNames={classNames}
        onEnter={onEnter}
        onExited={onExited}
        unmountOnExit={unmountOnExit}
      >
        <>
          {children}
        </>
      </CSSTransition>
    </Wrapper>
  );
};

PopIn.propTypes = {
  children: PropTypes.node.isRequired,
  wrapper: PropTypes.node,
  shouldPopOutOnExit: PropTypes.bool,
  animationMultiplier: PropTypes.number,
  animationDelay: PropTypes.number,
  animationTimeout: PropTypes.number,
  delayMultiplier: PropTypes.number,
  classNames: PropTypes.string,
  onEnter: PropTypes.func,
  onExited: PropTypes.func,
  unmountOnExit: PropTypes.bool,
};

PopIn.defaultProps = {
  wrapper: undefined,
  shouldPopOutOnExit: undefined,
  animationMultiplier: undefined,
  animationDelay: undefined,
  animationTimeout: undefined,
  delayMultiplier: undefined,
  classNames: undefined,
  onEnter: undefined,
  onExited: undefined,
  unmountOnExit: undefined,
};

const popInCss = (duration, delay, classNames) => css`
  &&& {
    .${classNames}-enter {
      opacity: 0;
      transform: scale(0.95);
    }
    .${classNames}-enter-active {
      opacity: 1;
      transform: scale(1);
      transition: opacity ${duration / 2}ms ease-in, transform ${duration / 2}ms ;
      transition-delay: ${delay / 2}ms;
    }
    .${classNames}-exit {
      opacity: 1;
      transform: scale(1);
    }
    .${classNames}-exit-active {
      opacity: 0;
      transform: scale(0.95);
      transition: opacity ${duration / 2}ms, transform ${duration / 2}ms ;
      transition-delay: ${delay / 2}ms;
    }
  }
`;

export default PopIn;
