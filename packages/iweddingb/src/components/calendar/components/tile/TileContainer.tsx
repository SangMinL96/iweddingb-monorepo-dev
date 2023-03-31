import { isEmpty, ScheduleItf } from '@iweddingb-workspace/shared';
import theme from '@styles/theme';
import { useRouter } from 'next/router';
import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Tile from './Tile';

type PropsType = {
  date: Date;
  products?: ScheduleItf[];
};
function TileContainer({ date, products }: PropsType) {
  const router = useRouter();
  const { selectedproducts } = router.query;
  const [isDetail, setIsDetail] = useState<boolean>(null);
  const filterProducts = useMemo(
    () =>
      products.filter(product => !isEmpty(selectedproducts) || String(selectedproducts).split('::').includes(String(product.product_no))),
    [selectedproducts, products],
  );
  return (
    <Container>
      <Tile>
        <Tile.List products={filterProducts} key='1' />
        <Tile.DetailButton setIsDetail={setIsDetail} />
        <Tile.DetailList products={filterProducts} isDetail={isDetail} setIsDetail={setIsDetail} date={date} />
      </Tile>
    </Container>
  );
}

export default TileContainer;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  overflow-y: scroll !important;
  ${theme.hideScroll};
`;
