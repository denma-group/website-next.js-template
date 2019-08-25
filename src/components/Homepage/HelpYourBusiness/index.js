// Libraries
import React, { useState } from 'react';
import styled from 'styled-components';

// Dependencies
import image from 'static/images/homepage/help_your_business.png';

// Components
import { CSSTransition } from 'react-transition-group';
import { LazyImage } from 'src/components/UI';
import { H2, H3 } from 'src/components/UI/Text';

const ANIMATION_TIMEOUT = 500;

const HelpYourBusiness = () => {
  const [hasLoaded, setLoaded] = useState(false);

  return (
    <Wrapper>
      <CSSTransition
        in={hasLoaded}
        timeout={ANIMATION_TIMEOUT}
        classNames="content"
        onEnter={() => setLoaded(true)}
      >
        <Container>
          <Help>
            <StyledH2>
              We’re committed to improve your ventures.
            </StyledH2>
            <StyledH3>
              We’ve experienced the cumbersome project management approach given by big firms. We <span>forgo</span> the <span>redundant</span> and <span>focus</span> on <span>generating value</span> for <span>your</span> company.
            </StyledH3>
            <br />
            <StyledH3>
              Our team knows that <span>responsiveness is key</span> for your project, and we’re here to tailor to your specific needs. And most <span>importantly</span>, you’re our team’s <span>priority</span>.
            </StyledH3>
          </Help>
          <Image>
            <LazyImage
              draggable={false}
              src={image}
            />
          </Image>
        </Container>
      </CSSTransition>
    </Wrapper>
  );
};

// Wrapper
const Wrapper = styled.div`
  position: relative;
  min-width: 100%;
  min-height: 100%;

  .content-enter {
    opacity: 0;
    transform: scale(0.9);
  }
  .content-enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
  }
  .content-exit {
    opacity: 1;
  }
  .content-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity ${props => props.animationDuration}ms, transform ${props => props.animationDuration}ms;
  }
`;

// Left column
const Container = styled.div`
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Help = styled.div`
  min-width: 55%;
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;
  padding: 0 5%;
`;

const Image = styled.div`
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 85%;
    margin: 0 auto;
    max-height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.screenMd}) {
    display: none;
    min-width: 0%;
  }
`;

const StyledH2 = styled(H2)`
  &&& {
    font-size: 54px;
    line-height: 64px;
    margin-bottom: 1em;
    font-weight: 700;
    color: ${props => props.theme.primary};
    text-align: center;

    @media (max-width: ${({ theme }) => theme.screenMd}) {
      font-size: 48px;
      line-height: 58px;
      margin-bottom: 1.25em;
    }

    @media (max-width: ${({ theme }) => theme.screenSm}) {
      font-size: 36px;
      line-height: 52px;
    }

    @media (max-width: ${({ theme }) => theme.screenXs}) {
      font-size: 28px;
      line-height: 36px;
    }
  }
`;

const StyledH3 = styled(H3)`
  &&& {
    text-align: justify;
    span {
      color: ${props => props.theme.primary};
      font-weight: 400;
    }
  }
`;

export default HelpYourBusiness;
