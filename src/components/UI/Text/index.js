// Libraries
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Components
import Typography from '@material-ui/core/Typography';

const H1 = ({ children, ...rest }) => (
  <Typography variant="h1" {...rest}>
    {children}
  </Typography>
);

const H2 = ({ children, ...rest }) => (
  <Typography variant="h2" {...rest}>
    {children}
  </Typography>
);

const H3 = ({ children, ...rest }) => (
  <Typography variant="h2" {...rest}>
    {children}
  </Typography>
);

const H6 = ({ children, ...rest }) => (
  <Typography variant="h6" {...rest}>
    {children}
  </Typography>
);

const P = ({ children, ...rest }) => (
  <Typography variant="body1" {...rest}>
    {children}
  </Typography>
);

const Caption = ({ children, ...rest }) => (
  <Typography variant="caption" {...rest}>
    {children}
  </Typography>
);

const Subtitle = ({ children, ...rest }) => (
  <Typography variant="subtitle1" {...rest}>
    {children}
  </Typography>
);

const StyledH1 = styled(H1)`
  &&& {
    font-size: 42px;
    line-height: 54px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;

const StyledH2 = styled(H2)`
  &&& {
    font-size: 34px;
    line-height: 46px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;

const StyledH3 = styled(H3)`
  &&& {
    font-size: 24px;
    line-height: 36px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;

const StyledH6 = styled(H6)`
  &&& {
    ${({ css }) => css};
    color: ${({ theme, color }) => theme[color] || theme.secondary};
    /* TODO: screen size changes */
  }
`;

const StyledP = styled(P)`
  &&& {
    font-size: 16px;
    line-height: 20px;
    ${({ css }) => css};
    /* TODO: screen size changes */
  }
`;

const StyledCaption = styled(Caption)`
  &&& {
    font-size: 16px;
    line-height: 20px;
    ${({ css }) => css};
    color: ${({ theme, color }) => theme[color] || theme.secondary};
    /* TODO: screen size changes */
  }
`;

const StyledSubtitle = styled(Subtitle)`
  &&& {
    font-size: 16px;
    line-height: 20px;
    ${({ css }) => css};
    color: ${({ theme, color }) => theme[color] || theme.secondary};
    /* TODO: screen size changes */
  }
`;

const StyledSpan = styled.span`
  font-size: inherit;
  line-height: inherit;
  ${({ css }) => css};
`;

const propTypes = {
  children: PropTypes.node.isRequired
};

H1.propTypes = propTypes;
H2.propTypes = propTypes;
H3.propTypes = propTypes;
H6.propTypes = propTypes;
P.propTypes = propTypes;
Caption.propTypes = propTypes;
Subtitle.propTypes = propTypes;

export {
  StyledH1 as H1,
  StyledH2 as H2,
  StyledH3 as H3,
  StyledH6 as H6,
  StyledP as P,
  StyledSpan as Span,
  StyledCaption as Caption,
  StyledSubtitle as Subtitle,
};
