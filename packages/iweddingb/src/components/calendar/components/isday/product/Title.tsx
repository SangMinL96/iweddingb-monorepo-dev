import { ScheduleItf } from '@iweddingb-workspace/shared';
import theme from '@styles/theme';
import React from 'react';
import styled from 'styled-components';

type PropsType = {
  name: string;
  times: ScheduleItf[];
  color: string;
};

function Title({ name, color, times }: PropsType) {
  const possible = times?.filter(item => item.status === 1);
  const done = times?.filter(item => item.status === 2);
  const 전체 = possible.length + done.length;
  return (
    <Container color={color}>
      <div className='status_count'>
        {전체 === done.length ? (
          '마감'
        ) : (
          <>
            <span>{possible.length}</span>/{전체}
          </>
        )}
      </div>
      <h5>{name}</h5>
    </Container>
  );
}

export default Title;

type StyledProps = {
  color?: string;
};
const Container = styled.div<StyledProps>`
  ${theme.flexCenter};
  justify-content: flex-start;
  margin-bottom: 16px;

  .status_count {
    margin-right: 10px;
    padding: 8px 10px;
    height: 36px;
    border-radius: 6px;
    color: white;
    font-size: 1.6rem;
    ${theme.flexCenter};
    background-color: ${props => props.color};
    > span {
      font-weight: 700;
    }
  }
  > h5 {
    color: ${props => props.color};
    font-size: 1.8rem;
    font-weight: 700;
    line-height: 19px;
  }
`;
