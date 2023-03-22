import { useGlobalState } from '@hooks/zustand/useGlobalState';
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuCalendar from './menuCalendar/MenuCalendar';
import ProductsAccordion from './productsAccordion';

function LeftMenu() {
  const [isAccordion, setIsAccordion] = useState<boolean>(true);
  const enterpriseInfo = useGlobalState(state => state.enterpriseInfo);
  return (
    <Container>
      <MenuCalendar />
      <ProductsAccordion>
        <ProductsAccordion.Trigger isAccordion={isAccordion} setIsAccordion={setIsAccordion} />
        <ProductsAccordion.List isAccordion={isAccordion} enterpriseInfo={enterpriseInfo} />
      </ProductsAccordion>
    </Container>
  );
}

export default LeftMenu;

const Container = styled.div`
  width: 350px;
  height: 100%;
`;
