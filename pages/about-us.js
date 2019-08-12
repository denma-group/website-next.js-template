import React, { useContext, useState, useMemo, useRef, useEffect } from 'react';
import styled, { css, withTheme } from 'styled-components';

import Text from 'src/components/UI/Text';
import { Header } from 'src/components/AboutUs';

const AboutUs = props => {
  useEffect(() => {});
  return (
    <Container>
      <Header />
    </Container>
  );
};

const Container = styled.div`
  color: ${props => props.theme.lightDarkColor};
  transition: all ease 200ms;
`;

export default withTheme(AboutUs);
