import { getStorage } from '@common/webStorage/storage';
import { isEmpty, ScheduleItf } from '@iweddingb-workspace/shared';
import 임시저장아이콘 from '@styles/svg/임시저장아이콘';
import theme from '@styles/theme';
import dayjs from 'dayjs';
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
  const isTemp = isEmpty(getStorage(`${dayjs(date).format('YYYY/MM/DD')}_temp`));
  return (
    <Container>
      {isTemp && <div className='temp_icon'>{임시저장아이콘()}</div>}
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
  .temp_icon {
    position: absolute;
    top: 15px;
    right: 15px;
  }
`;
