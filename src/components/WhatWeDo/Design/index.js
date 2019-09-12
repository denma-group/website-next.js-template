import React, { useMemo } from 'react';
import Layout from 'src/components/WhatWeDo/Layout';
import styled, { withTheme } from 'styled-components';
import Brush from 'src/components/SVG/Icons/Brush';
import HookedParallax from 'src/components/UI/HookedParallax';

const Design = withTheme(props => {
  const data = useMemo(
    () => ({
      title: 'Design',
      description:
        'Functionality with dazzling visuals. Guaranteed. You talk directly with our lead designer, and then we create your venture’s visuals.',
      subtitle: 'This is how we create it',
      steps: [
        {
          title: '',
          description:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
        },
        {
          title: '',
          description:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
        },
        {
          title: '',
          description:
            ' Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has',
        },
      ],
      bannerText: 'Where we shape your ideas.',
      color: props.theme.brandOrange,
      icons: [],
    }),
    [props.theme.brandOrange]
  );
  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={0.4} style={{ position: 'absolute', top: 400, right: 20 }}>
        <Brush fill={props.theme.brandOrange} style={{ height: 150, width: 150 }} />
      </HookedParallax>
    </Container>
  );
});

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
`;

export default Design;
