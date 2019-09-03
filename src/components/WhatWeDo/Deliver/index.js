import React, { useMemo } from 'react';
import Layout from 'src/components/WhatWeDo/Layout';
import styled, { withTheme } from 'styled-components';
import Deliver from 'src/components/SVG/Icons/Deliver';
import HookedParallax from 'src/components/UI/HookedParallax';

const Design = withTheme(props => {
  const data = useMemo(
    () => ({
      title: 'Deliver',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic',
      subtitle: 'Our process',
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
      bannerText: 'Your dream has become a reality.',
      color: '#1da1f2',
      icons: [],
    }),
    []
  );
  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={2} style={{ position: 'absolute', bottom: 0, right: 0 }}>
        <Deliver fill="#1da1f2" style={{ height: 150, width: 150 }} />
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
