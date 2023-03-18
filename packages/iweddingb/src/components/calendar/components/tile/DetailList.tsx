import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

type PropsType = {
  products: any[];
  isDetail: boolean;
  setIsDetail: React.Dispatch<React.SetStateAction<boolean>>;
};
function DetailList({ products, isDetail, setIsDetail }: PropsType) {
  console.log(isDetail);
  if (!isDetail) return null;
  return (
    <Container
      onClick={ev => {
        ev.preventDefault();
        ev.stopPropagation();
        setIsDetail(null);
      }}
      onMouseLeave={() => setIsDetail(null)}
      aria-hidden='true'
    >
      <div className='detail_list_box'>
        <ul className='detail_list' aria-labelledby='상품 리스트'>
          {products.map(item => {
            return (
              <li aria-label={item} key={`${item}`}>
                {item}
              </li>
            );
          })}
        </ul>
        <div role='button' aria-label='상품전체보기' className='close_btn'>
          닫기
        </div>
      </div>
    </Container>
  );
}

export default DetailList;
export { DetailList };

const Container = styled.div`
  padding-top: 20px;
  position: absolute;
  width: 300px;
  min-height: 100px;
  background-color: white;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  ${theme.flexCenter};
  flex-direction: column;
  justify-content: space-between;
  .close_btn {
    width: 100%;
    height: 30px;
    ${theme.flexCenter};
    color: white;
    background-color: #262626;
  }
`;
