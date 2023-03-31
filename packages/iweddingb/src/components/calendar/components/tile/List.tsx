import { useGlobalState } from 'store/useGlobalState';
import { ScheduleItf, isEmpty } from '@iweddingb-workspace/shared';
import theme from '@styles/theme';
import React, { useMemo } from 'react';
import styled, { css } from 'styled-components';
import { shallow } from 'zustand/shallow';

type PropsType = {
  products: ScheduleItf[];
};
function List({ products }: PropsType) {
  const [productList] = useGlobalState(state => [state.productList], shallow);

  // 홀타입별 & 상품별로 데이터 모음
  // useMemo로 products props가 변할때만 재생성
  const productBundle = useMemo(
    () =>
      Object.entries(
        products.reduce((arr, cur) => {
          if (arr[cur.name]) {
            return { ...arr, [cur.name]: arr[cur.name].concat(cur) };
          }
          return { ...arr, [cur.name]: [cur] };
        }, {}),
      ).map(([name, data]) => ({ name, data })),
    [products],
  ) as { name: string; data: ScheduleItf[] }[];

  if (!isEmpty(productBundle)) return null;
  return (
    <>
      {productBundle.map(({ name, data }, index) => {
        const 전체스케줄갯수 = data?.length;
        const 예약가능갯수 = data?.filter(item => item.status === 1).length;
        return (
          <ListStyled
            isDone={예약가능갯수 === 0}
            backgroundColor={productList?.find(item => item.name === name)?.backgroundColor}
            color={productList?.find(item => item.name === name)?.color}
            aria-label={`${name}상품 전체${전체스케줄갯수}개 예약가능 ${예약가능갯수}개`}
            key={`${name}_${index}`}
          >
            <div className='product_name' aria-label='hidden'>
              {name}
            </div>
            {예약가능갯수 === 0 ? (
              <div aria-label='hidden'>마감</div>
            ) : (
              <div aria-label='hidden'>
                <span>{예약가능갯수}</span>/{전체스케줄갯수}
              </div>
            )}
          </ListStyled>
        );
      })}
    </>
  );
}

export default List;
export { List };

type StyledProps = {
  color?: string;
  isDone: boolean;
  backgroundColor?: string;
};

const ListStyled = styled.li<StyledProps>`
  position: relative;
  width: 100%;
  margin-bottom: 4px;
  min-height: 22px;
  max-height: 22px;
  ${theme.flexCenter};
  justify-content: flex-start;
  line-height: 19px;
  > .product_name {
    width: 100%;
    position: absolute;
    left: 0;
    text-align: start;
    ${theme.flexCenter};
    min-height: 22px;
    max-height: 22px;
    font-size: 1.2rem;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    color: ${theme.black};
    background-color: ${props => props.backgroundColor};
    padding-right: 57px;
    padding-left: 6px;
  }
  > div {
    position: absolute;
    right: 0;
    ${theme.flexCenter};
    width: 42px;
    height: 22px;
    border-radius: 6px;
    background-color: ${props => props.color};
    font-size: 1.1rem;
    color: white;
    > span {
      font-weight: 700;
    }
  }
  ${props =>
    props.isDone &&
    css`
      > .product_name {
        color: rgb(170, 170, 170);
        background-color: rgba(170, 170, 170, 0.1);
      }
    `}
`;
