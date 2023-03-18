import React from 'react';
import styled from 'styled-components';
import DetailButton from './DetailButton';
import DetailList from './DetailList';
import List from './List';

type PropsType = {
  children: React.ReactNode;
};
function Tile({ children }: PropsType) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  overflow: hidden !important;
`;

Tile.List = List;
Tile.DetailButton = DetailButton;
Tile.DetailList = DetailList;
export default Tile;
export { Tile };
