import theme from '@styles/theme';
import React, { useState } from 'react';
import styled from 'styled-components';
import Tile from './tile/Tile';

function TileContent() {
  const [isDetail, setIsDetail] = useState<boolean>(null);
  const mockData = ['웨딩촬영1', '웨딩촬영2', '웨딩촬영3', '웨딩촬영4'];
  return (
    <Container>
      <Tile>
        <Tile.List products={mockData} key='1' />
        <Tile.DetailButton setIsDetail={setIsDetail} />
        <Tile.DetailList products={mockData} isDetail={isDetail} setIsDetail={setIsDetail} />
      </Tile>
    </Container>
  );
}

export default TileContent;

const Container = styled.div`
  width: 100%;
  height: calc(100% - 70px);
  overflow-y: scroll !important;
  ${theme.hideScroll};
`;
