import 공지사항아이콘 from '@styles/svg/공지사항아이콘';
import 드랍다운아이콘 from '@styles/svg/드랍다운아이콘';
import theme from '@styles/theme';
import { animate } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Trigger() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useEffect(() => {
    const box = document.getElementById('textarea');
    if (box) {
      if (isOpen) {
        animate(box, { height: 100 }, { duration: 0.2 });
      } else {
        animate(box, { height: 0 }, { duration: 0.2 });
      }
    }
  }, [isOpen]);
  return (
    <Container>
      <div aria-hidden='true' className='notice_icon'>
        {공지사항아이콘()}
      </div>
      <button onClick={() => setIsOpen(prev => !prev)} type='button' aria-label={`공지사항 작성 ${isOpen ? '접기' : '펼치기'}`}>
        공지사항
        <div aria-hidden='true'>{드랍다운아이콘(isOpen)}</div>
      </button>
      <p>(최근 업데이트 2023-03-03 10:21)</p>
    </Container>
  );
}

export default Trigger;

const Container = styled.div`
  ${theme.flexCenter};
  height: 24px;
  justify-content: flex-start;
  .notice_icon {
    margin-right: 8px;
  }
  > button {
    font-size: 1.8rem;
    font-weight: 700;
    ${theme.flexCenter};
    color: ${theme.black};
    > div {
      width: 24px;
      height: 24px;
      ${theme.flexCenter};
    }
  }
  > p {
    margin-left: 10px;
    color: ${theme.blue};
    font-size: 1.2rem;
  }
`;
