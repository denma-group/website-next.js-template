import React, { useRef, useMemo, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled, { withTheme, css } from 'styled-components';
import ReactResizeDetector from 'react-resize-detector';
import HookedParallax from 'src/components/UI/HookedParallax';
import Button from '@material-ui/core/Button';
import Text from 'src/components/UI/Text';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Header = props => {
  const founderContainerRef = useRef(null);
  const [screenHeight, setScreenHeight] = useState(0);
  // Functions
  const ArrowDownClickHandler = useCallback(() => {
    if (founderContainerRef && founderContainerRef.current) {
      founderContainerRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      });
    }
  }, []);
  return (
    <HeaderStyle>
      <ReactResizeDetector
        handleWidth
        handleHeight
        onResize={() => {
          setScreenHeight(window.innerHeight);
        }}
      />
      <HeaderContainer height={screenHeight}>
        <Text.H1
          css={css`
            color: ${props.theme.brandWhite};
          `}
        >
          Devoted to provide{' '}
          <Text.Span
            css={css`
              color: ${props.theme.brandDarkRed};
            `}
          >
            professional advice
          </Text.Span>
          , deliver{' '}
          <Text.Span
            css={css`
              color: ${props.theme.brandRed};
            `}
          >
            amazing software
          </Text.Span>
          , and take your company to the{' '}
          <SpanText color={props.theme.brandOrange}>next level.</SpanText>
        </Text.H1>
        <GradientButton color1={props.theme.brandDarkRed} color2={props.theme.brandOrange}>
          Contact Us
        </GradientButton>
        <HookedParallax
          multiplierY={2}
          style={{
            marginTop: 20,
            position: 'absolute',
            bottom: -250,
            right: -250,
            zIndex: 10
          }}
        >
          <Circle size={500} color={props.theme.brandDarkRed}>
            <ArrowDownwardIcon onClick={ArrowDownClickHandler} className="scroll-down" />
          </Circle>
        </HookedParallax>
      </HeaderContainer>
    </HeaderStyle>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: ${props => `${props.height - 200}px`};
  width: 800px;
  margin-left: 120px;
  margin-top: 200px;
  overflow: hidden;
`;

const SpanText = styled.span`
  font-size: inherit;
  line-height: inherit;
  font-weight: 500;
  color: ${props => props.color};
`;

const HeaderStyle = styled.div`
  display: flex;
  background-color: ${props => props.backgroundColor || props.theme.lightDarkColor};
  color: ${props => props.theme.primary};
`;

const GradientButton = styled(Button)`
  &&& {
    background: ${props => `linear-gradient(45deg, ${props.color1} 30%, ${props.color2} 200%);`};
    border-radius: 50px;
    border: 0;
    color: ${props => props.theme.brandWhite};
    height: 50px;
    font-weight: bold;
    width: 400px;
    margin-top: 20px;
    font-size: 42px;
  }
`;

const Circle = styled.div`
  display: flex;
  height: ${props => `${props.size}px`};
  width: ${props => `${props.size}px`};
  border-radius: 50%;
  background-color: ${props => props.color};
  justify-content: center;
  align-items: center;
  .scroll-down {
    width: 80px;
    height: 80px;
    padding: 0 0 24px;
    cursor: pointer;
    pointer-events: auto;
    color: white;
    right: ${props => `${props.size / 5}px`};
    bottom: ${props => `${props.size / 6}px`};
    position: relative;
  }
`;

Header.propTypes = {
  theme: PropTypes.instanceOf(Object).isRequired
};

export default withTheme(Header);
