// Libraries
import React from 'react';
import PropTypes from 'prop-types';

const Forever = ({ dynamicForever }) => (
  <p>{dynamicForever}</p>
);

Forever.propTypes = {
  dynamicForever: PropTypes.string.isRequired
};

Forever.getInitialProps = async () => {
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });
  return { dynamicForever: 'Lorem ipsum is dummy amazing text and serves no porpuse at all other than to occupy space on a website.' };
};

export default Forever;
