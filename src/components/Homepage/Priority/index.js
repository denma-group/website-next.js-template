// Libraries
import React, { useContext } from 'react';
import styled, { css } from 'styled-components';

// Components
import { H1 } from 'src/components/UI/Text';
import { ActiveSlideThemeContext } from '../HeroSlider';

const Priority = () => {
  const { activeSlideTheme } = useContext(ActiveSlideThemeContext);

  return (
    <Wrapper>
      <Container
        activeSlideTheme={activeSlideTheme}
      >
        <StyledHeader
          align="center"
        >
          We forgo the redundant and focus on <span>generating value for your company</span>.
          Our team knows that responsiveness is key for your project, and we’re here to
          tailor to your specific needs.
        </StyledHeader>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-position: center center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: ${({ theme, activeSlideTheme }) => css`
      linear-gradient(0deg, ${theme.whiteColor} 75%, ${activeSlideTheme || theme.servify} 100%)
    `};
    opacity: 0.1;
  }

  h1 {
    z-index: 1;
  }
`;

const StyledHeader = styled(H1)`
  &&& {
    margin: 1rem;
  }
  &&& span {
    color: ${props => props.theme.primary};
  }
  &&&, span {
    font-weight: 700;
  }
`;

export default Priority;
