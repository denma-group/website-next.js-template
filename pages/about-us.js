import React, { useContext, useState, useMemo, useRef, useEffect } from 'react';
import styled, { withTheme } from 'styled-components';
import { Header, Founder, Mission } from 'src/components/AboutUs';
import { useIsReady } from 'src/utils/hooks/useIsReady';

const AboutUs = () => {
  const founderRef = useRef(null);
  // const { isReady } = useIsReady();
  useIsReady();
  // useEffect(() => {
  //   document.body.style.overflowX = 'hidden';
  //   return () => {
  //     document.body.style.overflowX = 'visible';
  //   };
  // });

  return (
    <Container>
      <>
        <Header scrollRef={founderRef} />
        <Founder innerRef={founderRef} />
        <Mission />
      </>
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.theme.whiteColor};
  transition: all ease 200ms;
  min-height: 200vh;
  background-color: ${({ theme }) => theme.lightDarkColor};
`;

export default withTheme(AboutUs);
