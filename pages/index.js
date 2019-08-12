// Libraries
import React, { useContext, useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import styled, { css, withTheme } from 'styled-components';

// Icons
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// Dependencies
import { useOnScrollBgColor } from 'src/utils/hooks/useOnScrollBgColor';

// Components
import ReactResizeDetector from 'react-resize-detector';
import {
  Row,
  Col,
} from 'src/components/Layout';
import { NavbarContext } from 'src/layout/UI/Navbar';
import { Parallax } from 'src/components/UI';
import {
  HeroSlider,
  ActiveSlideThemeProvider,
  HelpYourBusiness,
  BackgroundAttachedDiv,
  SubscribeForm,
  StyledPageWrapper,
  HeroWrapper,
  LogoContainer,
  StyledLogo,
  StyledHeroValueProposition,
} from 'src/components/Homepage/';

const Homepage = props => {
  const { theme, isMobile } = props;
  const navbarContext = useContext(NavbarContext);
  const setNavbarCss = navbarContext.cssState[1];

  const [totalScreenHeight, setTotalScrenHeight] = useState(0);

  /**
   * Background color brackets.
   */
  const BRACKET_1_HEIGHT = totalScreenHeight * 0;
  const BRACKET_2_HEIGHT = totalScreenHeight * 0.25;
  const BRACKET_3_HEIGHT = totalScreenHeight * 0.5;
  const BRACKET_4_HEIGHT = totalScreenHeight * 0.75;
  const BRACKET_5_HEIGHT = totalScreenHeight * 1;
  const BRACKET_6_HEIGHT = totalScreenHeight * 1.25;

  const handleOnScrollBgColor = ({
    currentScrollHeight
  }) => {
    const totalScrollRatio = Number(currentScrollHeight / BRACKET_5_HEIGHT).toFixed(2);
    const opacityRatio = (1 - totalScrollRatio) <= 0 ? 0 : Number(1 - totalScrollRatio).toFixed(2);
    /**
     * Navbar handlers.
     */
    switch (true) {
      case currentScrollHeight <= BRACKET_2_HEIGHT:
        // Show Navbar
        setNavbarCss(css`
          opacity: ${opacityRatio};
          color: ${theme.whiteColor};
          background-color: transparent;
        `);
        break;
      case currentScrollHeight <= BRACKET_3_HEIGHT:
         // Partially hide Navbar
        setNavbarCss(css`
          opacity: ${opacityRatio};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case currentScrollHeight <= BRACKET_4_HEIGHT:
        // Hide Navbar
        setNavbarCss(css`
          opacity: ${0};
          color: ${theme.whiteColor};
          background-color: transparent;
          box-shadow: none;
        `);
        break;
      case currentScrollHeight >= BRACKET_5_HEIGHT:
      default:
        // Show Navbar
        setNavbarCss(css`
          opacity: ${1 - opacityRatio};
          color: ${theme.brandLightBlack};
          background-color: ${theme.whiteColor};
        `);
        break;
    }
  };

  useOnScrollBgColor(
    [
      [BRACKET_1_HEIGHT, theme.darkColor],
      [BRACKET_2_HEIGHT, theme.lightDarkColor],
      [BRACKET_3_HEIGHT, theme.brandLogoRed],
      [BRACKET_4_HEIGHT, theme.brandRed],
      [BRACKET_5_HEIGHT, theme.brandOrange],
      [BRACKET_6_HEIGHT, theme.brandWhite],
    ],
    {
      callback: handleOnScrollBgColor,
      throttleLimit: 20,
    }
  );

  const arrowDownOnClickHandler = () => {
    if (valuePropositionRef && valuePropositionRef.current) {
      valuePropositionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
    });
    }
  };

  const valuePropositionRef = useRef(undefined);

  return useMemo(() => (
    <ActiveSlideThemeProvider>
      <StyledPageWrapper>
        <ReactResizeDetector
          handleWidth
          handleHeight
          onResize={() => {
            setTotalScrenHeight(window.innerHeight);
          }}
        />
        <HeroWrapper>
          <Row
            height={totalScreenHeight - 64}
          >
            <Parallax speed={0.5}>
              <LogoContainer>
                <StyledLogo />
                <ArrowDownwardIcon
                  onClick={arrowDownOnClickHandler}
                  className="scroll-down"
                />
              </LogoContainer>
            </Parallax>
          </Row>
        </HeroWrapper>
        <Row
          height={totalScreenHeight}
          styledCss={
            css`
              display: flex;
              align-items: center;
              justify-content: flex-start;
              text-align: left;
              max-width: 1200px;
              margin: 100px auto 0;
              padding: 0 40px;
              background-color: transparent;
            `}
          innerRef={valuePropositionRef}
        >
          <StyledHeroValueProposition variant="h1">
            For companies who find themselves in need of <span>high-quality</span> software applications, <span>Denma</span> is a software development studio that provides personalized services with a solid methodology to <span>help</span> companies take their businesses to the <span>next level</span>.
          </StyledHeroValueProposition>
        </Row>
        {/* LINKS */}
        <Row
          height={totalScreenHeight}
        >
          <HelpYourBusiness />
        </Row>
        {/* DIVIDER */}
        <Row
          height={totalScreenHeight * 0.5}
        >
          <BackgroundAttachedDiv />
        </Row>
        {/* HERO-SLIDER */}
        <Row
          height={0.9 * (totalScreenHeight - 64)}
        >
          <HeroSlider
            isMobile={isMobile}
            settings={{
              slidingDuration: 250,
              slidingDelay: 100,
              shouldAutoplay: false,
              shouldDisplayButtons: true,
              autoplayDuration: 20000,
              height: 0.9 * (totalScreenHeight - 64),
              color: '#FFF'
            }}
          />
        </Row>
        {/* SUBSCRIBE TO US FORM */}
        <Row
          height="auto"
        >
          <SubscribeForm />
        </Row>
      </StyledPageWrapper>
    </ActiveSlideThemeProvider>
  ), [totalScreenHeight, valuePropositionRef, isMobile]);
};

Homepage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  theme: PropTypes.instanceOf(Object).isRequired
};

export default withTheme(Homepage);
