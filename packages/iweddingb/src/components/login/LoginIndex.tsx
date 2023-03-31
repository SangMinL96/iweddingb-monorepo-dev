import { setAccessToken, setRefreshToken } from '@common/webStorage/storage';
import { isEmpty } from '@iweddingb-workspace/shared';
import { useLoginState } from '@store/useLoginState';
import 로고 from '@styles/svg/로고';
import theme from '@styles/theme';
import postLogin from 'api/login/api';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { shallow } from 'zustand/shallow';
import LoginForm from './components';
import { ToastContainer } from 'react-toastify';

function LoginIndex() {
  const router = useRouter();
  const [hpAuthComplate] = useLoginState(state => [state.hpAuthComplate], shallow);
  const onSubmit = async (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!hpAuthComplate) {
      return alert('휴대폰 인증을 해주세요.');
    }
    const params = {
      hp: ev.target['hp'].value,
      name: ev.target['name'].value,
    };
    try {
      const { access_token, refresh_token } = await postLogin(params);
      if (isEmpty(access_token)) {
        setAccessToken(access_token);
        setRefreshToken(refresh_token);
        return router.push(`/`);
      }
    } catch (err) {
      throw new Error(String(err));
    }
  };
  return (
    <Container onSubmit={onSubmit}>
      <div>{로고()}</div>
      <h1>로그인</h1>
      <LoginForm>
        <LoginForm.Input />
        <LoginForm.Trigger />
      </LoginForm>
      <p>
        협력사 정보에 등록된 직원 정보만 로그인이 가능합니다.
        <br />
        혹시 로그인이 안된다면 아래 번호로 문의해주세요.
      </p>
      <p className='iwedding_hp'>02-6181-4222, 02-6181-4502</p>
      <ToastContainer position='bottom-center' autoClose={2000} hideProgressBar />
    </Container>
  );
}

export default LoginIndex;

const Container = styled.form`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  width: 345px;
  > h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-top: 60px;
    margin-bottom: 30px;
  }
  > p {
    margin-top: 40px;
    text-align: center;
    line-height: 19px;
    color: #8c8c8c;
    font-size: 1.4rem;
  }
  > p.iwedding_hp {
    margin-top: 20px;
    color: ${theme.black};
  }
`;
