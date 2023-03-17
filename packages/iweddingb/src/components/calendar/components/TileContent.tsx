import theme from '@styles/theme';
import React, { FocusEvent, KeyboardEvent, MouseEvent, useState } from 'react';
import styled from 'styled-components';
import useMouseEvent from '../hooks/useMouseEvent';

function TileContent(props) {
  const [overId, setOverId] = useState(null);
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
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <li>웨딩촬영1</li>
        <div
          className='all'
          onBlur={() => setOverId(null)}
          onClick={ev => {
            ev.preventDefault();
            ev.stopPropagation();
            setOverId(prev => (prev ? null : ['웨딩촬영1', '웨딩촬영2', '웨딩촬영3']));
          }}
          onKeyDown={(ev: KeyboardEvent<HTMLDivElement>) => {
            if (ev.key === 'Enter') {
              ev.preventDefault();
              ev.stopPropagation();
              setOverId(prev => (prev ? null : ['웨딩촬영1', '웨딩촬영2', '웨딩촬영3']));
            }
          }}
          role='button'
          aria-label='상품전체보기'
          tabIndex={0}
        >
          전체
        </div>
        {overId && (
          <div
            className='detail_list_box'
            onClick={ev => {
              ev.preventDefault();
              ev.stopPropagation();
              setOverId(null);
            }}
            onMouseLeave={() => setOverId(null)}
            aria-hidden='true'
          >
            <ul className='detail_list' aria-labelledby='상품 리스트'>
              {overId.map(item => {
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
  .detail_list_box {
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
