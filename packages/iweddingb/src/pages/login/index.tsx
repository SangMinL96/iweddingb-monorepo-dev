import theme from '@styles/theme';
import dynamic from 'next/dynamic';
import React, { lazy, Suspense } from 'react';
import styled from 'styled-components';

const LoginIndex = dynamic(() => import('@components/login/LoginIndex'), { ssr: false });

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
