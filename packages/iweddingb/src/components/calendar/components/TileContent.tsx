import theme from '@styles/theme';
import React, { FocusEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import useMouseEvent from '../hooks/useMouseEvent';

function TileContent() {
  const [overId, setOverId] = useState(null);
  console.log(overId);
  const onMouseOver = data => {
    setOverId(data);
  };
  const onMouseOut = () => {
    setOverId(null);
  };
  const onFocus = data => {
    setOverId(data);
  };
  const onBlur = () => {
    setOverId(null);
  };
  return (
    <Container>
      <List>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li> <li>웨딩촬영1</li> <li>웨딩촬영1</li>
        <div
          className='all'
          onBlur={() => setOverId(null)}
          onClick={ev => {
            ev.preventDefault();
            ev.stopPropagation();
            setOverId(['웨딩촬영1', '웨딩촬영2', '웨딩촬영3']);
          }}
          aria-hidden='true'
        >
          전체
        </div>
        {overId && (
          <div
            className='dddd'
            onClick={ev => {
              ev.preventDefault();
              ev.stopPropagation();
              setOverId(null);
            }}
            onMouseLeave={() => setOverId(null)}
            aria-hidden='true'
          >
            {overId.map(item => {
              return <p key={`${item}`}>{item}</p>;
            })}
          </div>
        )}
      </List>
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

const List = styled.div`
  width: 100%;

  overflow: hidden !important;
  .all {
    position: absolute;
    bottom: 10px;
    height: 30px;
    width: 100%;
    left: 0;
    ${theme.flexCenter};
    color: white;
    background-color: rgba(38, 38, 38, 0.871);
  }
  .dddd {
    position: absolute;
    width: 300px;
    min-height: 300px;
    background-color: white;
    top: 0;
    left: 0;
    z-index: 999;
  }
  > li {
    position: relative;
    width: 100%;
    height: 25px;
    border: 1px solid red;
    background-color: bisque;
    border-radius: 8px;
    margin-bottom: 3px;
  }
`;
