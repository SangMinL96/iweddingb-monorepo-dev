import React from 'react';
import styled from 'styled-components';

type PropsType = {
  label?: string;
  setIsAccordion: React.Dispatch<React.SetStateAction<boolean>>;
};
function Trigger({ label = '상품 선택', setIsAccordion }: PropsType) {
  return (
    <TriggerStyled role={'button'} tabIndex={0} aria-label='펼치기버튼' onClick={() => setIsAccordion(prev => !prev)}>
      <div>{label}</div>
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
