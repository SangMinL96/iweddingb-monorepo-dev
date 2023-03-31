import theme from '@styles/theme';
import { useRouter } from 'next/router';
import React from 'react';
import { isDesktop } from 'react-device-detect';
import styled from 'styled-components';

function Trigger() {
  const router = useRouter();
  return (
    <Container>
      <button
        className='cancel'
        type='button'
        onClick={() => {
          if (isDesktop) {
            return window.close();
          }
          return router.back();
        }}
      >
        취소
      </button>
      <button type='submit'>보내기</button>
    </Container>
  );
}

export default Trigger;

const Container = styled.div`
  margin-top: 16px;
  width: 100%;
  ${theme.flexCenter};
  > button {
    width: 180px;
    height: 40px;
    border-radius: 6px;
    background-color: ${theme.blue};
    color: white;
    font-size: 1.4rem;
    margin: 0 5px;
  }
  > button.cancel {
    color: #aaaaaa;
    background-color: #f8f8f8;
  }
`;
