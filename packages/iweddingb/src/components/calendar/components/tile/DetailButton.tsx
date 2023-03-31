import theme from '@styles/theme';
import React, { KeyboardEvent } from 'react';
import styled from 'styled-components';

type PropsType = {
  setIsDetail: React.Dispatch<React.SetStateAction<boolean>>;
};
function DetailButton({ setIsDetail }: PropsType) {
  return (
    <ButtonStyled
      className='product_detail'
      onBlur={() => setIsDetail(null)}
      onClick={ev => {
        ev.preventDefault();
        ev.stopPropagation();
        setIsDetail(true);
      }}
      onKeyDown={(ev: KeyboardEvent<HTMLButtonElement>) => {
        if (ev.key === 'Enter') {
          ev.preventDefault();
          ev.stopPropagation();
          setIsDetail(true);
        }
      }}
      aria-label='스케줄 더보기'
    >
      + 스케줄 더보기
    </ButtonStyled>
  );
}

export default DetailButton;
export { DetailButton };
const ButtonStyled = styled.button`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  bottom: 0px;
  height: 33px;
  width: 100%;
  left: 0;
  z-index: 99;
  color: ${theme.black};
  font-size: 1.2rem;
  font-weight: 700;
`;
