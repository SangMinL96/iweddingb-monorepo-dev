import LoginIndex from '@components/login/LoginIndex';
import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

function LoginPageIndex() {
  return (
    <Container>
      <LoginIndex />
    </Container>
  );
}

export default LoginPageIndex;

const Container = styled.section`
  margin: 0 auto;
  width: 100%;
  height: 100vh;
  ${theme.flexCenter};
`;
