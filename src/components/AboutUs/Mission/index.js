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
      <Text.P
        css={css`
          &&& {
            color: ${({ theme }) => theme.brandWhite};
            margin: 50px;
						font-size: 20px;
						width: 80%;
						line-height: 30px;
          }
        `}
      >
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem
        survived not only five centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets
        containing Lorem
      </Text.P>
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
