// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import{ useInView } from 'react-intersection-observer';

// Dependencies
import image from 'static/images/homepage/help_your_business.png';

// Components
import { CSSTransition } from 'react-transition-group';
import { Image } from 'src/components/UI';
import { H2, H3 } from 'src/components/UI/Text';
import {
  Row,
  Col,
} from 'src/components/Layout';

const ANIMATION_TIMEOUT = 650;

const HelpYourBusiness = ({ totalScreenHeight }) => {
  const [hasLoaded, setLoaded] = useState(false);
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0,
  });

  // Whenever inView changes to true for the first time,
  // set hasLoaded to true, this will trigger the CSS animation.
  // This will only happen once.
  if (!hasLoaded && inView) {
    setLoaded(true);
  }

  return (
    <Wrapper
      innerRef={ref}
      height={totalScreenHeight}
      alignItems="center"
    >
      {/* PITCH */}
      <CSSTransition
        in={hasLoaded}
        timeout={ANIMATION_TIMEOUT}
        classNames="pitch"
      >
        <Help alignItems="center" justifyContent="center" sm={12} md={7} ref={ref}>
          <StyledH2>
            We’re committed to improve your ventures
          </StyledH2>
          <StyledH3>
            We’ve experienced the cumbersome project management approach given by big firms.
            We <span>forgo</span> the <span>redundant</span> and <span>focus</span> on
            <span>generating value</span> for <span>your</span> company.
          </StyledH3>
        </Help>
      </CSSTransition>
      {/* IMAGE */}
      <CSSTransition
        in={hasLoaded}
        timeout={ANIMATION_TIMEOUT * 2}
        classNames="image"
      >
        <ImageContainer alignItems="center" justifyContent="center" sm={12} md={5}>
          <Image
            draggable={false}
            src={image}
          />
        </ImageContainer>
      </CSSTransition>
    </Wrapper>
  );
};

HelpYourBusiness.propTypes = {
  totalScreenHeight: PropTypes.number,
};

HelpYourBusiness.defaultProps = {
  totalScreenHeight: undefined,
};

// Wrapper
const Wrapper = styled(Row)`
  &&& {
    margin: 5% auto 10%;
    max-width: 1200px;
    .pitch-enter, .image-enter {
      opacity: 0;
      transform: scale(0.9);
    }
    .pitch-enter-active, .image-enter-active {
      opacity: 1;
      transform: translateX(0);
      transition: opacity ${ANIMATION_TIMEOUT / 2}ms, transform ${ANIMATION_TIMEOUT / 2}ms;
      transition-delay: ${ANIMATION_TIMEOUT / 2}ms;
    }
    .pitch-exit, .image-exit {
      opacity: 1;
    }
    .pitch-exit-active, .image-exit-active {
      opacity: 0;
      transform: scale(0.9);
      transition: opacity ${ANIMATION_TIMEOUT / 2}ms, transform ${ANIMATION_TIMEOUT / 2}ms;
      transition-delay: ${ANIMATION_TIMEOUT / 2}ms;
    }

    .image-enter-active {
      transition-delay: ${ANIMATION_TIMEOUT}ms;
    }
    .image-exit-active {
      transition-delay: ${ANIMATION_TIMEOUT}ms;
    }
  }
`;

const Help = styled(Col)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 5%;
`;

const ImageContainer = styled(Col)`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 85%;
    margin: 30px auto 0px;
    max-height: 100%;
    max-width: 620px;
  }
`;

const StyledH2 = styled(H2)`
  &&& {
    margin-bottom: 1em;
    line-height: 1.5;
    font-weight: 700;
    color: ${props => props.theme.primary};
    text-align: center;
    font-size: 44px;

    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 36px;
    }

    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 28px;
    }

    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 20px;
    }
  }
`;

const StyledH3 = styled(H3)`
  &&& {
    text-align: center;
    span {
      color: ${props => props.theme.primary};
      font-weight: 400;
    }
  }
`;

export default HelpYourBusiness;
