import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function Header() {
  return <Container>Header</Container>;
}

export default React.memo(Header);

const Container = styled.section`
  width: 100%;
  height: 150px;
  background-color: #22eded;
  ${theme.flexCenter};
`;
