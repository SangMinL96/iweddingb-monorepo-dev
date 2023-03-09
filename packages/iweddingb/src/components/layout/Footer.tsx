import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function Footer() {
  return <Container>Footer</Container>;
}

export default React.memo(Footer);

const Container = styled.section`
  width: 100%;
  height: 15rem;
  ${theme.flexCenter};
`;
