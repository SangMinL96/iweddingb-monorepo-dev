import { isEmpty } from '@iweddingb-workspace/shared';
import { useLoginState } from '@store/useLoginState';
import theme from '@styles/theme';
import postHpAuthNumSend from 'api/auth/api';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { shallow } from 'zustand/shallow';

function Input() {
  const [setHpAuthComplate] = useLoginState(state => [state.setHpAuthComplate], shallow);
  const [authType, setAuthType] = useState<'0' | '1' | '2' | '3'>('0'); // 0:인증요청전 1:인증요청후 2: 인증시간초과 3: 인증완료
  const [authNum, setAuthNum] = useState<string>(null); // 인증번호
  const [authInputValue, setAuthInputValue] = useState<string>('');
  const [time, setTime] = useState<string>('02:59');
  const [hp, setHp] = useState<string>('');
  useEffect(() => {
    const authTime = setInterval(() => {
      const hour = Number(time?.split(':')?.[0]);
      const minute = Number(time?.split(':')?.[1]);
      if (minute === 0) {
        return setTime(`0${hour - 1}:59`);
      }

      if (minute <= 10) {
        return setTime(`0${hour}:0${minute - 1}`);
      }
      return setTime(`0${hour}:${minute - 1}`);
    }, 1000);
    if (time === '00:00') {
      setAuthType('2');
      clearInterval(authTime);
    }
    if (authType !== '1') {
      clearInterval(authTime);
    }
    return () => {
      clearInterval(authTime);
    };
  }, [authType, time]);

  const onAuthClick = async () => {
    if (!isEmpty(hp)) {
      return toast('휴대폰 번호를 입력해주세요.');
    }
    toast('인증 번호가 전송되었습니다.');
    const randomNum = Math.floor(1000 + Math.random() * 9000);
    setTime('00:30');
    setAuthType('1');
    setAuthNum(String(randomNum));
    const { result } = await postHpAuthNumSend(hp, String(randomNum));
    if (result === 'fail') {
      alert('인증번호를 보낼 수 없습니다');
    }
  };
  const onAuthComplate = () => {
    if (authNum === authInputValue) {
      setAuthType('3');
      setHpAuthComplate(true);
    } else {
      setHpAuthComplate(false);
      alert('인증번호가 틀립니다.');
    }
  };
  return (
    <Contaier>
      <div className='input_box'>
        <input id='name' name='이름' placeholder='이름을 입력해주세요.' required />
      </div>
      <div className='input_box hp'>
        <input
          id='hp'
          name='휴대폰 번호'
          type='number'
          placeholder={`휴대폰 번호를 '-'없이 입력해주세요`}
          required
          onChange={(ev: ChangeEvent<HTMLInputElement>) => setHp(ev.target.value)}
        />
        <button onClick={onAuthClick} type='button' aria-label='인증번호 보내기'>
          {authType === '0' && '보내기'}
          {authType === '2' && '재전송'}
        </button>
      </div>
      {authType !== '0' && (
        <div className='input_box authnum'>
          <input
            type='text'
            name='auth-token'
            inputMode='numeric'
            pattern='[0-9]*'
            autoComplete='one-time-code'
            onChange={(ev: React.ChangeEvent<HTMLInputElement>) => setAuthInputValue(ev.target.value)}
            placeholder='인증번호를 입력해주세요.'
          />
          {authType === '1' && (
            <>
              <div>{time}</div>
              <button type='button' onClick={onAuthComplate}>
                확인
              </button>
            </>
          )}
          {authType === '2' && <div className='authtype_text'>인증시간만료</div>}
          {authType === '3' && <div className='authtype_text'>인증완료</div>}
        </div>
      )}
    </Contaier>
  );
}

export default Input;

const Contaier = styled.div`
  .input_box {
    margin-bottom: 8px;
    position: relative;
    ${theme.flexCenter};
    justify-content: space-between;
    width: 345px;
    height: 50px;

    > input {
      padding: 15px;
      font-size: 1.4rem;
      color: ${theme.black};
      border: 1px solid #f0f0f0;
      border-radius: 8px;
      height: 50px;
      min-width: 345px;
      &:placeholder {
        color: #999999;
        font-size: 1.4rem;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .input_box.hp {
    padding-right: 60px;
    > button {
      position: absolute;
      right: 20px;
      font-size: 1.4rem;
      font-weight: 700;
      color: ${theme.blue};
    }
  }
  .input_box.authnum {
    padding-right: 105px;
    > div {
      position: absolute;
      font-size: 1.4rem;
      font-weight: 700;
      color: ${theme.blue};
      right: 64px;
    }
    > button {
      position: absolute;
      font-size: 1.4rem;
      right: 20px;
      font-weight: 700;
      color: ${theme.blue};
    }
    > div.authtype_text {
      right: 20px;
    }
  }
`;
