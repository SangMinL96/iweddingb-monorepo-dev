import React, { useRef } from 'react';
import styled from 'styled-components';
import { checkBoxSVG } from '@styles/svg/checkBoxSVG';
import theme from '@styles/theme';
import { useState } from 'react';

type PropsType = {
  id: string;
  label: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
function CheckBox({ label, id, onChange }: PropsType) {
  const inputRef = useRef<any>(null);
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <Container>
      <input
        ref={inputRef}
        type='checkbox'
        name={label}
        id={id}
        onChange={ev => {
          setIsCheck(ev.target.checked);
          onChange(ev);
        }}
      />
      <label htmlFor={id}>{checkBoxSVG(isCheck)}</label>
      <label htmlFor={id}>{label}</label>
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
`;
