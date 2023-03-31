import { useGlobalState } from 'store/useGlobalState';
import React, { useState } from 'react';
import styled from 'styled-components';
import MenuCalendar from './menuCalendar/MenuCalendar';
import ProductsAccordion from './productsAccordion';
import { shallow } from 'zustand/shallow';
import { motion } from 'framer-motion';
import 메뉴접기아이콘 from '@styles/svg/메뉴접기아이콘';
import theme from '@styles/theme';

function LeftMenu() {
  const [isLeftMenu, setIsLeftMenu] = useGlobalState(state => [state.isLeftMenu, state.setIsLeftMenu], shallow);

  return (
    <Container animate={isLeftMenu ? { width: 350 } : { width: 80 }}>
      <motion.div style={{ overflow: 'hidden' }} animate={isLeftMenu ? { width: 350, opacity: 1 } : { width: 0, opacity: 0 }}>
        <MenuCalendar />
        <ProductsAccordion>
          <ProductsAccordion.Trigger />
          <ProductsAccordion.List />
        </ProductsAccordion>
      </motion.div>
      <LeftButton type='button' onClick={() => setIsLeftMenu(!isLeftMenu)}>
        {메뉴접기아이콘(isLeftMenu)}
      </LeftButton>
    </Container>
  );
}

export default LeftMenu;

const Container = styled(motion.div)`
  position: relative;
  width: 350px;
  height: 100%;
`;

const LeftButton = styled.button`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  ${theme.flexCenter}
  background-color: #111111;
  right: 20px;
  opacity: 1;
  z-index: 999;
  bottom: 20px;
`;
