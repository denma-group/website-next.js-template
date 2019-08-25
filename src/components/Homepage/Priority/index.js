// Libraries
import React, { useContext } from 'react';
import styled from 'styled-components';

// Dependencies
import image from 'static/images/homepage/background-attachment-divider.jpg';

// Components
import { H1 } from 'src/components/UI/Text';
import { ActiveSlideThemeContext } from '../HeroSlider';

const Priority = () => {
  const { activeSlideTheme } = useContext(ActiveSlideThemeContext);

  return (
    <Wrapper>
      <Overlay
        activeSlideTheme={activeSlideTheme}
      />
      <Container>
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
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${image});
  background-attachment: fixed;
  background-position: center center;
`;

const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(0deg, ${({ theme, activeSlideTheme }) => activeSlideTheme || theme.servify} 0%, ${({ theme }) => theme.primary} 100%);
  opacity: 0.5;
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledHeader = styled(H1)`
  &&& {
    margin: 0 1rem;
    color: ${props => props.theme.whiteColor};
    text-shadow: 1px 1px 5px ${props => props.theme.darkColor};
  }
  &&& span {
    color: ${props => props.theme.primary};
    text-shadow: 1px 1px 2.5px ${props => props.theme.darkColor};
  }
  &&&, span {
    font-weight: 700;
  }
`;

export default Priority;
