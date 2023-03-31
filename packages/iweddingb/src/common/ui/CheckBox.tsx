import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { 랜던색상체크박스 } from '@styles/svg/랜던색상체크박스';
import theme from '@styles/theme';
import { animate, useAnimation } from 'framer-motion';

type PropsType = {
  id: string;
  label: string;
  checked: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  color?: string;
};
function CheckBox({ label, id, onChange, color, checked }: PropsType) {
  const inputRef = useRef<any>(null);

  return (
    <Container>
      <input ref={inputRef} type='checkbox' aria-checked={checked} name={label} id={id} onChange={onChange} />
      <label htmlFor={id} className='checkbox_icon' aria-hidden='true'>
        {랜던색상체크박스(checked, color)}
      </label>
      <label className='checkbox_label' htmlFor={id}>
        {label}
      </label>
    </Container>
  );
}

export default CheckBox;

const Container = styled.li`
  width: 100%;
  height: 100%;
  ${theme.flexCenter};
  justify-content: flex-start;

  input[type='checkbox'] {
    display: none;
  }
  input[type='checkbox'] + label {
    cursor: pointer;
  }
  .checkbox_label {
    font-size: 1.4rem;
    color: ${theme.black};
    margin-left: 8px;
    line-height: 19px;
    cursor: pointer;
    user-select: none;
  }
`;
