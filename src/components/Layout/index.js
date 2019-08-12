// Libraries
import React from 'react';
import styled, { css } from 'styled-components';
import Grid from '@material-ui/core/Grid';

const StyledRow = styled(({ height, styledCss, ...rest }) => <Grid {...rest} />)`
  position: relative;
  ${({ height }) => (typeof height === 'number') && css`
    height: ${height}px;
    min-height: 100vh;
  `};
  ${({ styledCss }) => styledCss};
`;

const Row = props => (
  <StyledRow
    {...props}
    container
  />
);

const Col = props => (
  <Grid
    {...props}
    item
  />
);

export {
  Row,
  Col,
};
