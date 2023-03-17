import { UserInfoItf } from '@iweddingb-workspace/shared';
import fetcher, { execFetcher } from 'common/fetcher/fetcher';
import { setAccessToken, setStorage } from 'common/webStorage/storage';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import useSWR from 'swr';

function Header() {
  const { data, error } = useSWR(`/login/getUser`, url => fetcher<any[]>(url));
  const test = async () => {
    try {
      const result = await execFetcher('post', '/login/postUser', { id: '' });
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };
  const testToken = async () => {
    try {
      const result = await execFetcher<{ access_token: string }>('post', '/login/hp-login', { hp: '010-0000-0000' });
      setAccessToken(result.data.access_token);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };
  return (
    <Container>
      <button type='button' onClick={testToken}>
        토큰테스트
      </button>
      <button type='button' onClick={test}>
        테스트
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
