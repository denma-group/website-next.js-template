// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';
import App, { Container } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import CssBaseline from '@material-ui/core/CssBaseline';

// CSS styled-components app theme
import { mainTheme as theme } from 'static/theme/index';

// Dependencies
import userAgent from 'src/utils/userAgent';

// Components
import {
  Footer,
  Navbar,
  NavbarProvider,
  PageWrapper
} from 'src/layout/UI';

// Styles
import 'static/theme/index.scss';

/**
 * Event listener for route changes.
 * Loading bar animation is triggered every time.
 */
Router.events.on('routeChangeStart', () => {
  console.log('routeChangeStart');
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => {
  console.log('routeChangeStart');
  NProgress.done();
});
Router.events.on('routeChangeError', () => {
  console.log('routeChangeStart');
  NProgress.done();
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = {
        ...(await Component.getInitialProps(ctx))
      };
    }

    // Determining if the user is on a mobile device.
    const isMobile = await userAgent(ctx && ctx.req.headers['user-agent']);
    pageProps.isMobile = isMobile;

    return { pageProps };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            {/* Website */}
            <NavbarProvider>
              <Navbar />
              <PageWrapper>
                <Component {...pageProps} />
              </PageWrapper>
              <Footer />
            </NavbarProvider>
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
