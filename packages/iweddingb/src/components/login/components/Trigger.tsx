import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

function Trigger() {
  return <ButtonStyled type='submit'>로그인</ButtonStyled>;
}

export default Trigger;

const ButtonStyled = styled.button`
  border-radius: 8px;
  background-color: ${theme.blue};
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
  margin-top: 16px;
  width: 100%;
  height: 50px;
`;
