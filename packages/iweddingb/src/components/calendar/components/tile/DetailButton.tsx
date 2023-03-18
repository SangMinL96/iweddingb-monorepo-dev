import theme from '@styles/theme';
import React, { KeyboardEvent } from 'react';
import styled from 'styled-components';

type PropsType = {
  setIsDetail: React.Dispatch<React.SetStateAction<boolean>>;
};
function DetailButton({ setIsDetail }: PropsType) {
  return (
    <Container
      className='product_detail'
      onBlur={() => setIsDetail(null)}
      onClick={ev => {
        ev.preventDefault();
        ev.stopPropagation();
        setIsDetail(true);
      }}
      onKeyDown={(ev: KeyboardEvent<HTMLDivElement>) => {
        if (ev.key === 'Enter') {
          ev.preventDefault();
          ev.stopPropagation();
          setIsDetail(true);
        }
      }}
      role='button'
      aria-label='상품전체보기'
      tabIndex={0}
    >
      전체
    </Container>
  );
}

export default DetailButton;
export { DetailButton };
const Container = styled.div`
  position: absolute;
  bottom: 10px;
  height: 30px;
  width: 100%;
  left: 0;
  z-index: 99;
  ${theme.flexCenter};
  color: white;
  background-color: rgba(38, 38, 38, 0.871);
`;
