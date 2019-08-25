import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import Text from 'src/components/UI/Text';

const Mission = props => {
  const values = useMemo(
    () => [
      {
        title: 'Commit to quality.',
        description:
          'We believe that quality is an integral part of our work. From each small detail to endless lines of code, we want to bring out the best we’ve got.',
      },
      {
        title: 'Learning & growth.',
        description:
          'It’s difficult to deliver quality if the door is closed for feedback. In our company headquarters, the teams rely on one another, always learning from their different disciplines. We also believe that individual training is key, so we support and encourage it.',
      },
      {
        title: 'Empowering community',
        description:
          'Denma’s core identity is to empower other visionaries. From the very beginning we’ve experienced that having the correct form of support is what propels us forward',
      },
    ],
    []
  );

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
            padding: 0 100px;
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
      {values.map((value, i) => {
        return (
          <ValuesContainer reverse={i % 2 === 1}>
            <TitleContainer>
              <Text.H1>{value.title}</Text.H1>
              <Text.H3
                css={css`
                  color: white;
                `}
              >
                {value.description}
              </Text.H3>
            </TitleContainer>

            <div style={{ height: 100, width: 300, backgroundColor: 'red' }} />
          </ValuesContainer>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.lightDarkColor};
`;

const ValuesContainer = styled.div`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  width: 80%;
`;

const IconContainer = styled.div`
  display: flex;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 60%;
`;

export default Mission;
