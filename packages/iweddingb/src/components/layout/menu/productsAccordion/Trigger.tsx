import { 작대기없는화살표 } from '@styles/svg/작대기없는화살표';
import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useGlobalState } from '@store/useGlobalState';
import { shallow } from 'zustand/shallow';

type PropsType = {
  label?: string;
};
function Trigger({ label = '상품 선택' }: PropsType) {
  const [isProductDropdown, setIsProductDropdown] = useGlobalState(state => [state.isProductDropdown, state.setIsProductDropdown], shallow);
  const variants = {
    open: { rotate: '0deg' },
    closed: { rotate: '180deg' },
  };
  return (
    <TriggerStyled
      role='button'
      tabIndex={0}
      isProductDropdown={isProductDropdown}
      onClick={(ev: React.MouseEvent<HTMLDivElement>) => {
        ev.preventDefault();
        ev.stopPropagation();
        setIsProductDropdown(!isProductDropdown);
      }}
    >
      <span aria-label={`상품 선택 ${isProductDropdown ? '접기' : '펼치기'}`}>{label}</span>
      <motion.span animate={isProductDropdown ? 'open' : 'closed'} variants={variants} aria-hidden='true'>
        {작대기없는화살표()}
      </motion.span>
    </TriggerStyled>
  );
}
export default Trigger;
const TriggerStyled = styled.div<{ isProductDropdown: boolean }>`
  border-top: 1px solid #eaeaea;
  border-bottom: ${props => !props.isProductDropdown && `1px solid #eaeaea`};
  width: 100%;
  height: 48px;
  ${theme.flexCenter};
  justify-content: space-between;
  padding: 0 20px;
  margin-bottom: 10px;
  > span {
    font-size: 1.4rem;
    line-height: 19px;
  }
`;
