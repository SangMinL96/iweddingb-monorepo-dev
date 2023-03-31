import React, { lazy } from 'react';
import styled from 'styled-components';

const ModifyIndex = lazy(() => import('@components/modify/ModifyIndex'));

function ModifyIndexPage() {
  return (
    <Container>
      <ModifyIndex />
    </Container>
  );
}

export default ModifyIndexPage;

const Container = styled.section`
  width: 100%;
  height: 100%;
`;
