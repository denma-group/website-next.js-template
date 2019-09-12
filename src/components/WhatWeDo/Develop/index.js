import React, { useMemo } from 'react';
import Layout from 'src/components/WhatWeDo/Layout';
import styled, { withTheme } from 'styled-components';
import Rocket from 'src/components/SVG/Icons/Rocket';
import HookedParallax from 'src/components/UI/HookedParallax';

const Develop = withTheme(props => {
  const data = useMemo(
    () => ({
      title: 'Develop',
      description:
        'Our development team works at the edge of industry standards, always pushing for the best functionality. You are key in the development process, as you define what we create for you. Does your digital product require Maps integration? Seamless duality between web and mobile, website and app? That’s our specialty. And you, are our priority.',
      subtitle: 'Our developing process looks like this',
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
      bannerText: 'Bringing designs to life',
      color: props.theme.brandRed,
      icons: [],
    }),
    [props.theme.brandRed]
  );
  return (
    <Container>
      <Layout data={data} />
      <HookedParallax multiplierY={0.4} style={{ position: 'absolute', top: 400, left: 20 }}>
        <Rocket fill={props.theme.brandRed} style={{ height: 150, width: 150 }} />
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
