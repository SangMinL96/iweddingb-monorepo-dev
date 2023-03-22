import React from 'react';
import styled from 'styled-components';
import List from './List';
import Trigger from './Trigger';

type PropsType = {
  children: React.ReactNode;
};
function ProductsAccordion({ children }: PropsType) {
  return <Container>{children}</Container>;
}

ProductsAccordion.Trigger = Trigger;
ProductsAccordion.List = List;
export default ProductsAccordion;

const Container = styled.div`
  width: 100%;
`;
