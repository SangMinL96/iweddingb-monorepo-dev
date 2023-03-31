import theme from '@styles/theme';
import React, { useState, useTransition } from 'react';
import styled from 'styled-components';

function Inputbox() {
  const [value, setValue] = useState<string>('');
  const [_, startTransition] = useTransition();

  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
  };
  return (
    <Container id='textarea' onSubmit={onSubmit}>
      <div className='textarea_box' aria-label='공지사항 입력 박스'>
        <textarea
          value={value}
          onChange={(ev: React.ChangeEvent<HTMLTextAreaElement>) => startTransition(() => setValue(ev.target.value))}
        />
      </div>
      <div className='submit_box'>
        <button type='submit'>저장</button>
        <button className='cancel' type='button'>
          취소
        </button>
      </div>
    </Container>
  );
}

export default Inputbox;

const Container = styled.form`
  margin-top: 16px;
  max-width: 1225px;
  overflow: hidden;
  ${theme.flexCenter};
  align-items: flex-start;
  height: 0;
  .textarea_box {
    width: 100%;
    margin-right: 10px;
    textarea {
      width: 100%;
      font-size: 1.4rem;
      line-height: 19px;
      border: 1px solid ${theme.black};
      border-radius: 8px;
      ${theme.hideScroll};
      color: ${theme.black};
      resize: none;
      min-height: 100px;
      padding: 16px;
      &::placeholder {
        color: #b3b3b3;
      }
    }
  }
  .submit_box {
    width: 84px;
    > button {
      width: 100%;
      height: 64px;
      background-color: ${theme.blue};
      color: white;
      font-size: 1.4rem;
      border-radius: 6px;
    }
    > button.cancel {
      margin-top: 8px;
      width: 100%;
      height: 28px;
      color: ${theme.black};
      background-color: white;
      text-decoration: underline;
    }
  }
`;
