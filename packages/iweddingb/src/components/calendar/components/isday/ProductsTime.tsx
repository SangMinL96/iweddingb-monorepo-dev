import { isEmpty } from '@iweddingb-workspace/shared';
import { useGlobalState } from '@store/useGlobalState';
import putTimeUpdate from 'api/schedule/api';
import useScheduleData from 'api/schedule/hooks';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { shallow } from 'zustand/shallow';
import Product from './product';

function ProductsTime() {
  const router = useRouter();
  const { selectedproducts } = router.query;
  const [productList] = useGlobalState(state => [state.productList], shallow);
  const { data: schedule, mutate } = useScheduleData();

  const onTimeChange = async (no: number, type: 'minus' | 'plus') => {
    const findTime = schedule.find(item => item.no === no);
    const filterSchedule = schedule.map(item => {
      if (item.no === findTime.no) {
        return { ...findTime, status: type === 'minus' ? 2 : 1 };
      }
      return item;
    });
    mutate(putTimeUpdate({ no, type, returnData: filterSchedule }), { optimisticData: filterSchedule });
  };

  return (
    <Container>
      {productList?.map(product => {
        const filterProducts = String(selectedproducts).split('::');
        // 스케줄이 하나도 등록안된 상품 필터
        if (!schedule.find(item => item.product_no === product.no)) return;
        // 왼쪽 상품박스에서 선택되는 필터
        if (isEmpty(selectedproducts) && !filterProducts.includes(String(product.no))) return;
        return (
          <React.Fragment key={`${product.no}`}>
            <Product>
              <Product.Title color={product?.color} name={product?.name} times={schedule.filter(item => item.product_no === product.no)} />
              <Product.TimeList
                onTimeChange={onTimeChange}
                color={product?.color}
                backgroundColor={product?.backgroundColor}
                times={schedule.filter(item => item.product_no === product.no)}
              />
            </Product>
            <div className='divide' aria-hidden='true' />
          </React.Fragment>
        );
      })}
    </Container>
  );
}

export default ProductsTime;

const Container = styled.section`
  width: 100%;
  height: 100%;
  padding: 0 20px;
  .divide {
    margin-top: 40px;
  }
`;
