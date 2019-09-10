// Libraries
import React, { useState, useContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';

// Dependencies
import servifyBg from 'static/images/hero_slider/servify/slide-bg.jpg';
import bopreuFoodsBg from 'static/images/hero_slider/bonpreu_foods/slide-bg.jpg';
import tireOutletBg from 'static/images/hero_slider/tire_outlet/slide-bg.jpg';

// Components
import HeroSlider, {
  Nav
} from 'hero-slider';
import SlideWrapper from './SlideWrapper';
import Servify from './Slides/Servify';
import BonpreuFoods from './Slides/BonpreuFoods';
import TireOutlet from './Slides/TireOutlet';

export const ActiveSlideThemeContext = React.createContext({
  activeSlideTheme: undefined
});

/**
 * The active slide `theme` will be passed to the background
 * attached divider component to set the bottom gradient's color
 * equal to the active slide's color.
 */
export const ActiveSlideThemeProvider = withTheme(props => {
  const { children, theme } = props;
  const [activeSlideTheme, setActiveSlideTheme] = useState(theme.servify);
  return useMemo(() => (
    <ActiveSlideThemeContext.Provider
      value={{
        activeSlideTheme,
        setActiveSlideTheme
      }}
    >
      {children}
    </ActiveSlideThemeContext.Provider>
  ), [activeSlideTheme, setActiveSlideTheme, children]);
});

const Slider = props => {
  const { theme } = props;
  const { setActiveSlideTheme } = useContext(ActiveSlideThemeContext);

  const onChangeHandler = nextSlide => {
    switch (nextSlide) {
      case 1:
        return setActiveSlideTheme(theme.servify);
      case 2:
        return setActiveSlideTheme(theme.bonpreuFoods);
      case 3:
        return setActiveSlideTheme(theme.tireOutlet);
      default: // Do nothing
    }
  };

  const slidesBackgrounds = {
    shouldLazyLoad: false,
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
  };

  const slides = [
    {
      key: 'servify',
      slide: Servify,
      overlay: theme.servify,
      backgroundImage: servifyBg,
      background: slidesBackgrounds
    },
    {
      key: 'bonpreu_foods',
      slide: BonpreuFoods,
      overlay: theme.bonpreuFoods,
      backgroundImage: bopreuFoodsBg,
      background: slidesBackgrounds
    },
    {
      key: 'tire_outlet',
      slide: TireOutlet,
      overlay: theme.tireOutlet,
      backgroundImage: tireOutletBg,
      background: slidesBackgrounds
    },
  ];

  return (
    <HeroSlider
      slidingAnimation="left_to_right"
      orientation="horizontal"
      initialSlide={1}
      settings={props.settings}
      onChange={onChangeHandler}
    >
      {props.children}
      {/* SERVIFY */}
      {slides.map(({ key, slide: SlideComponent, overlay, backgroundImage, background }) => (
        <SlideWrapper
          key={key}
          background={{
            ...background,
            backgroundImage,
          }}
          overlayColor={overlay}
          shouldRenderMask
        >
          <SlideComponent />
        </SlideWrapper>
      ))}
      <Nav />
    </HeroSlider>
  );
};

Slider.propTypes = {
  settings: PropTypes.instanceOf(Object).isRequired,
  theme: PropTypes.instanceOf(Object).isRequired,
  children: PropTypes.node
};

Slider.defaultProps = {
  children: null
};

export default withTheme(Slider);
