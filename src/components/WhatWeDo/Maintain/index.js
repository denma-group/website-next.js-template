import React, { useMemo } from 'react';
import Layout from 'src/components/WhatWeDo/Layout';
import styled, { withTheme } from 'styled-components';
import Maintain from 'src/components/SVG/Icons/Maintain';
import HookedParallax from 'src/components/UI/HookedParallax';

const Develop = withTheme(props => {
  const data = useMemo(
    () => ({
      title: 'Maintain',
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
      bannerText: 'Keeping your product up to date.',
      color: '#17bf63',
      icons: [],
    }),
    [props.theme.brandRed]
  );
  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={2} style={{ position: 'absolute', bottom: 0, left: 0 }}>
        <Maintain fill="#17bf63" style={{ height: 150, width: 150 }} />
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

export default Develop;
