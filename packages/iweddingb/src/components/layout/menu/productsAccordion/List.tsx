import CheckBox from '@common/ui/CheckBox';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useGlobalState } from 'store/useGlobalState';
import { ChangeEvent, ReactEventHandler } from 'react';
import { useRouter } from 'next/router';
import { isEmpty, parseArray } from '@iweddingb-workspace/shared';
import { shallow } from 'zustand/shallow';

function List() {
  const router = useRouter();
  const { selectedproducts } = router.query;
  const [isProductDropdown, productList] = useGlobalState(state => [state.isProductDropdown, state.productList], shallow);

  const variants = {
    open: { height: 'auto' },
    closed: { height: '0' },
  };

  const onProductClick = (ev: ChangeEvent<HTMLInputElement>) => {
    const id = ev.target.id as string;

    if (id === '전체') {
      return router.replace({ query: { ...router.query, selectedproducts: null } }, undefined, {
        shallow: true,
      });
    }
    const productsArr = isEmpty(selectedproducts) ? String(selectedproducts).split('::') : [];
    const isChecked = String(selectedproducts).split('::').includes(id);
    if (isChecked) {
      return router.replace(
        { query: { ...router.query, selectedproducts: productsArr.filter(item => item !== id).join('::') } },
        undefined,
        {
          shallow: true,
        },
      );
    }
    return router.replace({ query: { ...router.query, selectedproducts: productsArr.concat(id).join('::') } }, undefined, {
      shallow: true,
    });
  };

  return (
    <ListStyled animate={isProductDropdown ? 'open' : 'closed'} variants={variants} transition={{ duration: 0.2 }}>
      <CheckBox
        checked={!isEmpty(selectedproducts)}
        key='product_전체'
        id='전체'
        color='#111111'
        label='전체 상품'
        onChange={onProductClick}
      />
      {productList?.map(product => {
        return (
          <CheckBox
            checked={String(selectedproducts).split('::').includes(String(product.no))}
            key={`product_${product.name}`}
            id={String(product.no)}
            color={product?.color}
            label={product.name}
            onChange={onProductClick}
          />
        );
      })}
    </ListStyled>
  );
}

export default List;

const ListStyled = styled(motion.ul)`
  width: 100%;
  max-height: calc(100% - 356px);
  padding: 0 20px;
  overflow-y: hidden;
  > li {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 10px;
  }
`;
