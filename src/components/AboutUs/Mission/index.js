import React from 'react';
import styled, { css } from 'styled-components';
import Text from 'src/components/UI/Text';

const Mission = props => {
  return (
    <Container>
      <Text.H1
        css={css`
          color: ${({ theme }) => theme.brandDarkRed};
        `}
      >
        Mission
      </Text.H1>
      <Text.H3
        css={css`
          &&& {
            color: ${({ theme }) => theme.brandWhite};
            margin: 50px;
            padding: 0 200px;
          }
        `}
      >
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged.
      </Text.H3>
      <Text.H1
        css={css`
          color: ${({ theme }) => theme.brandOrange};
        `}
      >
        Values
      </Text.H1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.lightDarkColor};
`;

export default Mission;
