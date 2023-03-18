import postTokenTest from 'api/login/api';
import { setAccessToken } from 'common/webStorage/storage';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';

function Header() {
  const testToken = async () => {
    try {
      const result = await postTokenTest({ hp: '010-0000-0000' });
      setAccessToken(result);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };
  return (
    <Container>
      <button type='button' onClick={testToken}>
        토큰테스트
      </button>
    </Container>
  );
}

export default React.memo(Header);

const Container = styled.section`
  width: 100%;
  height: 150px;
  background-color: #22eded;
  ${theme.flexCenter};
`;
