import theme from '@styles/theme';
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

const LoginIndex = lazy(() => import('@components/login/LoginIndex'));

function LoginPageIndex() {
  return (
    <Container>
      <Suspense fallback={<div />}>
        <LoginIndex />
      </Suspense>
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
