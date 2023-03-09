import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';

type PropsType = {
  children: React.ReactNode;
};

function Layout({ children }: PropsType) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default React.memo(Layout);

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
