// Libraries
import React from 'react';
import { ThemeProvider } from 'styled-components';
import App, { Container } from 'next/app';
import Router from 'next/router';
import Link from 'next/link';
import NProgress from 'nprogress';

// CSS styled-components app theme
import { mainTheme as theme } from 'static/theme/index';

const linkStyle = {
  margin: '0 10px 0 0'
};

/**
 * Event listener for route changes.
 * Loading bar animation is triggered every time.
 */
Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <div style={{ marginBottom: 20 }}>
              <Link href="/">
                <a style={linkStyle}>Home</a>
              </Link>
              <Link href="/about">
                <a style={linkStyle}>About</a>
              </Link>
              <Link href="/forever">
                <a style={linkStyle}>Forever</a>
              </Link>
              <a href="/non-existing" style={linkStyle}>
                Non Existing Page
              </a>
            </div>
            <Component {...pageProps} />
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}
