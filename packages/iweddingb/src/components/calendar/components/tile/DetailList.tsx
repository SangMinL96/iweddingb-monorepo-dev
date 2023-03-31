import theme from '@styles/theme';
import dayjs from 'dayjs';
import React from 'react';
import styled from 'styled-components';
import Tile from './Tile';

type PropsType = {
  products: any[];
  isDetail: boolean;
  setIsDetail: React.Dispatch<React.SetStateAction<boolean>>;
  date: Date;
};
function DetailList({ products, isDetail, setIsDetail, date }: PropsType) {
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
      <h5>{dayjs(date).format('MM월 DD일 (dd)')}</h5>
      <ul className='detail_list' aria-labelledby='상품 리스트'>
        <Tile.List products={products} />
      </ul>
    </Container>
  );
}

export default DetailList;
export { DetailList };

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 150px;
  background-color: white;
  border: 1px solid ${theme.black};
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;
  ${theme.flexCenter};
  flex-direction: column;
  justify-content: flex-start;
  h5 {
    margin: 10px 0;
    font-size: 1.6rem;
    color: ${theme.black};
  }
  .close_btn {
    width: 100%;
    height: 30px;
    ${theme.flexCenter};
    color: white;
    background-color: #262626;
  }
  ul {
    width: 100%;
    padding: 0 5px;
  }
`;
