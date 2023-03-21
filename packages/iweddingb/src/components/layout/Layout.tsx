import React from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import LeftMenu from './menu/LeftMenu';

type PropsType = {
  children: React.ReactNode;
};

function Layout({ children }: PropsType) {
  return (
    <Container>
      <Header />
      <Body>
        <LeftMenuBox>
          <LeftMenu />
        </LeftMenuBox>
        <Wrapper>{children}</Wrapper>
      </Body>
    </Container>
  );
}

export default React.memo(Layout);

const Container = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
`;

const Body = styled.div`
  display: flex;
  width: 100%;
  height: calc(100% - 150px);
  max-height: calc(100% - 150px);
  @media (max-width: 1300px) {
    flex-direction: column;
  }
`;
const LeftMenuBox = styled.div``;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
