// Libraries
import React, { useState, useContext } from 'react';
import styled, { css } from 'styled-components';

// Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from 'src/layout/UI';
import { NavbarLogo, Spacing } from './components';

// Dependencies
import Provider, { NavbarContext as Context } from './context';

// Links
import { links, getShouldRenderDrawerIcon, renderNavLinks } from './links';

// Navbar React Context exports
export const NavbarContext = Context;
export const NavbarProvider = Provider;

const navbarLogo = (
  <NavbarLogo
    alt="Denma Home"
    title="Denma Home"
    focusable="false"
  />
);

const drawerLogo = (
  <NavbarLogo
    alt="Denma Home"
    title="Denma Home"
    focusable="false"
  />
);

const Navbar = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const navbarContext = useContext(NavbarContext);
  const [color] = navbarContext.colorState;
  const [backgroundColor] = navbarContext.backgroundColorState;
  const [opacity] = navbarContext.opacityState;
  const [position] = navbarContext.positionState;
  const [boxShadow] = navbarContext.boxShadowState;
  const [transform] = navbarContext.transformState;
  const [styledCss] = navbarContext.cssState;

  const shouldRenderDrawerIcon = getShouldRenderDrawerIcon(links);

  return (
    <React.Fragment>
      <Spacing />
      <StyledAppBar
        position={position}
        color={color}
        backgroundColor={backgroundColor}
        opacity={opacity}
        boxShadow={boxShadow}
        transform={transform}
        styledCss={styledCss}
      >
        <Toolbar>
          <a role="button">
            {navbarLogo}
          </a>
          <div className="spacing" />
          {renderNavLinks(links)}
          <StyledIconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => setDrawerOpen(!isDrawerOpen)}
            className="menu-button"
            shouldRenderDrawerIcon={shouldRenderDrawerIcon}
          >
            <MenuIcon />
          </StyledIconButton>
        </Toolbar>
      </StyledAppBar>
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        closeDrawer={() => setDrawerOpen(false)}
        drawerLogo={drawerLogo}
        links={links}
      />
    </React.Fragment>
  );
};

const StyledAppBar = styled(({ color, backgroundColor, opacity, boxShadow, transform, styledCss, ...rest }) => <AppBar {...rest} />)`
  && {
    ${props => (
      css`
        color: ${props.color || props.theme.brandLightBlack};
        background-color: ${props.backgroundColor || 'transparent'};
        opacity: ${({ opacity }) => (
          (
            opacity !== null ||
            opacity !== undefined
          ) ? opacity : 1
        )};
        box-shadow: ${props.boxShadow || 'none'};
        transform: ${props.transform || undefined};
      `
    )}
    ${props => (props.styledCss && props.styledCss)}
    transition: all ease 150ms;
    transition-property: color, background-color, opacity;

    .spacing {
      flex-grow: 1;
    }

    .menu-button {
      margin-left: 20px;
      float: right;
    }

    button:hover {
      text-decoration: none;
      background-color: rgba(255, 255, 255, 0.08);
    }

    ${({ theme }) => css`
      .MuiToolbar-root > .MuiButtonBase-root:not(.menu-button),
      .MuiToolbar-root > .dropdown-menu {
        @media (min-width: ${theme.screenLg}) {
          display: inline-flex;
        }

        @media (min-width: 0px) and (max-width: ${theme.screenLg}) {
          display: none;
        }
      }
    `}
  }
`;

const StyledIconButton = styled(({ shouldRenderDrawerIcon, ...rest }) => <IconButton {...rest} />)`
  ${({ theme, shouldRenderDrawerIcon }) => css`
    &&& {
      @media (min-width: ${theme.screenLg}) {
        display: ${shouldRenderDrawerIcon ? 'inline-flex' : 'none'};
      }

      @media (min-width: 0px) and (max-width: ${theme.screenLg}) {
        display: inline-flex;
      }
    }
  `}
`;

export default Navbar;
