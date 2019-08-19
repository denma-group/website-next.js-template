import React, { useContext, useState, useMemo, useRef, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { Header, Founder, Mission } from 'src/components/AboutUs';

const AboutUs = () => {
  const founderRef = useRef(null);
  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => {
      document.body.style.overflowX = 'visible';
    };
  });
  return (
    <Container>
      <Header scrollRef={founderRef} />
      <Founder innerRef={founderRef} />
      <Mission />
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.theme.lightDarkColor};
  transition: all ease 200ms;
`;

export default withTheme(AboutUs);
