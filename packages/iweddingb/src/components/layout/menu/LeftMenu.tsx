import React from 'react';
import styled from 'styled-components';

function LeftMenu() {
  return <Container id='left_menu'>LeftMenu</Container>;
}

export default LeftMenu;

const Container = styled.div`
  width: 350px;
  height: 100%;
  background-color: red;
`;
