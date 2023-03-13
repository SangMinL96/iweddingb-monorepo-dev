import { useCycle, motion } from 'framer-motion';
import Hamburger from 'hamburger-react';
import useDimensions from 'hooks/useDimensions';
import React, { useRef, useState } from 'react';
import styled from 'styled-components';

function HamburgerMenu() {
  const [isOpen, toggleOpen] = useState<boolean>(false);
  const variants = {
    open: { opacity: 1, right: 0, width: '80%' },
    closed: { opacity: 0, right: -300, width: '0%' },
  };
  return (
    <Container id='hamburger_menu'>
      <div role='button' id='hamburger_box'>
        <Hamburger color='#262626' toggled={isOpen} toggle={toggleOpen} size={30} rounded distance='lg' />
      </div>
      <motion.div className='menu_box' animate={isOpen ? 'open' : 'closed'} variants={variants}>
        asdf
      </motion.div>
    </Container>
  );
}

export default HamburgerMenu;

const Container = styled.div`
  display: none;
  #hamburger_box {
    z-index: 99;
    position: fixed;
    top: 5px;
    right: 5px;
  }
  .menu_box {
    top: 0;
    position: fixed;
    width: 80%;
    height: 100vh;
    background-color: red;
  }
`;
