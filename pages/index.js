// Libraries
import React, { useContext, useState, useMemo, useRef } from 'react';
import PropTypes from 'prop-types';
import { css, withTheme } from 'styled-components';

// Icons
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

// Dependencies
import { useOnScrollBgColor } from 'src/utils/hooks/useOnScrollBgColor';

// Components
import ReactResizeDetector from 'react-resize-detector';
import {
  Row,
} from 'src/components/Layout';
import { NavbarContext } from 'src/layout/UI/Navbar';
import { Parallax } from 'src/components/UI';
import {
  HeroSlider,
  ActiveSlideThemeProvider,
  HelpYourBusiness,
  Priority,
  SubscribeForm,
  GetToKnowUs,
  PromoVideo,
  StyledPageWrapper,
  HeroWrapper,
  LogoContainer,
  StyledLogo,
  ValueProposition,
  WhyUsStoryLinks,
} from 'src/components/Homepage/';

const Homepage = props => {
  const { theme, isMobile } = props;
  const navbarContext = useContext(NavbarContext);
  const [, setNavbarColor] = navbarContext.colorState;
  const [, setNavbaBgColor] = navbarContext.backgroundColorState;
  const [, setOpacityState] = navbarContext.opacityState;
  const [, setBoxShadowState] = navbarContext.boxShadowState;

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
        setNavbarColor(theme.whiteColor);
        setNavbaBgColor('transparent');
        setOpacityState(opacityRatio);
        break;
      case currentScrollHeight <= BRACKET_3_HEIGHT:
         // Partially hide Navbar
        setNavbarColor(theme.whiteColor);
        setNavbaBgColor('transparent');
        setOpacityState(opacityRatio);
        setBoxShadowState('none');
        break;
      case currentScrollHeight <= BRACKET_4_HEIGHT:
        // Hide Navbar
        setNavbarColor(theme.whiteColor);
        setNavbaBgColor('transparent');
        setOpacityState(0);
        setBoxShadowState('none');
        break;
      case currentScrollHeight >= BRACKET_5_HEIGHT:
      default:
        // Show Navbar
        setNavbarColor(theme.brandLightBlack);
        setNavbaBgColor(theme.whiteColor);
        setOpacityState(1 - opacityRatio);
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
          styledCss={containerCss}
          innerRef={valuePropositionRef}
          alignItems="center"
          justify="center"
        >
          <ValueProposition>
            <span>Denma</span> develops <span>cutting-edge</span> technology for new and established companies.
            {/* For companies who find themselves in need of <span>high-quality</span> software applications, <span>Denma</span> is a software development studio that provides personalized services with a solid methodology to <span>help</span> companies take their businesses to the <span>next level</span>. */}
          </ValueProposition>
        </Row>
        {/* GET_TO_KNOW_US */}
        <Row
          height={totalScreenHeight}
          styledCss={containerCss}
          alignItems="center"
          justify="center"
        >
          <GetToKnowUs />
        </Row>
        {/* PROMO VIDEO */}
        <Row
          height={totalScreenHeight}
          alignItems="center"
          justify="center"
        >
          <PromoVideo />
        </Row>
        {/* LINKS */}
        <Row
          height={totalScreenHeight}
        >
          <HelpYourBusiness />
        </Row>
        {/* PRIORITY/BACKGROUND PARALLAX DIVIDER */}
        <Row
          height={totalScreenHeight * 0.5}
        >
          <Priority />
        </Row>
        {/* HERO_SLIDER */}
        <Row>
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
        {/* WHY US/OUR STORY LINKS */}
        <Row
          height="auto"
        >
          <WhyUsStoryLinks />
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

const containerCss = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 18px;
  background-color: transparent;
`;

Homepage.propTypes = {
  isMobile: PropTypes.bool.isRequired,
  theme: PropTypes.instanceOf(Object).isRequired
};

export default withTheme(Homepage);
