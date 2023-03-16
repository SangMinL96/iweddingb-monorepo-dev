import { User } from '@iweddingb-workspace/shared';
import fetcher, { execFetcher } from 'common/fetcher/fetcher';
import React from 'react';
import styled from 'styled-components';
import theme from 'styles/theme';
import useSWR from 'swr';

function Header() {
  const { data, error } = useSWR(`/login/getUser`, url => fetcher<User[]>(url));
  const test = async () => {
    try {
      const result = await execFetcher('post', '/login/postUser', { id: '' });
      console.log(result);
    } catch (err) {
      console.log(`Error ${err}`);
    }
  };
  return (
    <Container>
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
