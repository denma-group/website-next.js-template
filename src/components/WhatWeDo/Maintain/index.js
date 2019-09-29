import React, { useMemo } from 'react';
import Layout from 'src/components/WhatWeDo/Layout';
import styled, { withTheme } from 'styled-components';
import Maintain from 'src/components/SVG/Icons/Maintain';
import HookedParallax from 'src/components/UI/HookedParallax';

const Develop = withTheme(props => {
  const data = {
      title: 'Maintain',
      description:
        'After handing you the final version of your product, you can count on us to keep it in top form. If you have an existing digital product and wish to update or maintain it, Denma is the choice for you.',
      subtitle: 'How we keep your project up to date',
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
      color: props.theme.greenColor,
      icons: [],
    };
  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={0.4} style={{ position: 'absolute', top: 400, left: 20 }}>
        <Maintain fill={props.theme.greenColor} style={{ height: 150, width: 150 }} />
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
