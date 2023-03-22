import React from 'react';
import styled from 'styled-components';

type PropsType = {
  label?: string;
  setIsAccordion: React.Dispatch<React.SetStateAction<boolean>>;
  isAccordion?: boolean;
};
function Trigger({ label = '상품 선택', setIsAccordion, isAccordion }: PropsType) {
  return (
    <TriggerStyled role={'button'} tabIndex={0} onClick={() => setIsAccordion(prev => !prev)}>
      <div aria-label={`상품 선택 ${isAccordion ? '접기' : '펼치기'}`}>{label}</div>
    </TriggerStyled>
  );
}
export default Trigger;
const TriggerStyled = styled.div`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eeeeee;
  > div {
    width: 100%;
    height: 100%;
  }
`;
