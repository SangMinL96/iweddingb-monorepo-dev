import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

function Title() {
  return (
    <Container>
      <h3>변경/추가 요청 사항을 기재해주세요.</h3>
      <p>*가능/마감에 대한 변경 요청은 해당되지 않습니다.</p>
    </Container>
  );
}

export default Title;

const Container = styled.div`
  > h3 {
    font-size: 1.8rem;
    font-weight: 700;
    color: ${theme.black};
  }
  > p {
    margin-top: 6px;
    font-size: 1.4rem;
    color: #fd4381;
  }
`;
