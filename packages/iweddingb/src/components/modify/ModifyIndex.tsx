import { isEmpty } from '@iweddingb-workspace/shared';
import React from 'react';
import styled from 'styled-components';
import Modify from './components/modify';

function ModifyIndex() {
  const onSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const params = {
      modifyText: ev.target['modify_text'].value,
    };
    if (!isEmpty(params.modifyText)) return alert('변경/추가 요청 사항을 입력해주세요.');
  };
  return (
    <Container onSubmit={onSubmit}>
      <Modify>
        <Modify.Title />
        <Modify.Textarea />
        <Modify.Trigger />
      </Modify>
    </Container>
  );
}

export default ModifyIndex;
const Container = styled.form`
  width: 100%;
  height: 100%;
  padding: 40px 20px;
`;
