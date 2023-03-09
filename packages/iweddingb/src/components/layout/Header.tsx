import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function Header() {
  return <Container>Header</Container>;
}

export default React.memo(Header);

const Container = styled.section`
  width: 100%;
  height: 80px;
  background-color: white;
  ${theme.flexCenter};
`;
