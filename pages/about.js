// Libraries
import React from 'react';
import PropTypes from 'prop-types';

const About = ({ aboutName }) => (
  <p>This is about {aboutName}!</p>
);

About.propTypes = {
  aboutName: PropTypes.string.isRequired
};

About.getInitialProps = async () => {
  // Add some delay
  await new Promise(resolve => {
    setTimeout(resolve, 500);
  });
  return { aboutName: 'Next!' };
};

export default About;
