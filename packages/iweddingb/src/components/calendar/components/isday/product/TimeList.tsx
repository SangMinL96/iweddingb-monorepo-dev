import { ScheduleItf } from '@iweddingb-workspace/shared';
import 업다운아이콘 from '@styles/svg/업다운아이콘';
import theme from '@styles/theme';
import React from 'react';
import styled, { css } from 'styled-components';

type PropsType = {
  color?: string;
  times: ScheduleItf[];
  backgroundColor?: string;
  onTimeChange: (no: number, type: 'minus' | 'plus') => void;
};
function TimeList({ color, times, onTimeChange, backgroundColor }: PropsType) {
  return (
    <Container>
      {times.map(time => {
        const isDone = time.status === 2;
        return (
          <ListStyled
            isDone={isDone}
            key={time.no}
            backgroundColor={backgroundColor}
            color={color}
            aria-label={`${time.schedule_time}분 수량${isDone ? 0 : 1}개`}
          >
            <div className='time' aria-hidden='true'>
              {time.schedule_time}
            </div>
            <div className='button_box'>
              <button
                type='button'
                className='minus'
                disabled={isDone}
                onClick={() => onTimeChange(time.no, 'minus')}
                aria-label='수량 1개 올리기'
                aria-disabled={isDone}
              >
                {업다운아이콘('minus')}
              </button>
              <div className='count' aria-label={isDone ? '0개' : '1개'}>
                {isDone ? 0 : 1}
              </div>
              <button
                type='button'
                className='plus'
                disabled={!isDone}
                onClick={() => onTimeChange(time.no, 'plus')}
                aria-label='수량 1개 내리기'
                aria-disabled={!isDone}
              >
                {업다운아이콘('plus')}
              </button>
            </div>
          </ListStyled>
        );
      })}
    </Container>
  );
}

export default TimeList;

type StyledProps = {
  color?: string;
  backgroundColor?: string;
  isDone: boolean;
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const ListStyled = styled.li<StyledProps>`
  width: 180px;
  height: 48px;
  border-radius: 6px;
  border: 1px solid ${props => props.color};
  ${theme.flexCenter};
  justify-content: space-between;
  margin-right: 10px;
  margin-bottom: 10px;
  padding-left: 16px;
  padding-right: 10px;
  background-color: ${props => props.backgroundColor};
  .time {
    font-size: 1.4rem;
    font-weight: 700;
    color: ${theme.black};
  }
  .button_box {
    ${theme.flexCenter};
    justify-content: space-between;
    width: 80px;
    height: 100%;
    .count {
      font-size: 1.4rem;
      color: ${theme.black};
    }
  }
  ${props =>
    props.isDone
      ? css`
          border: none;
          background-color: #f8f8f8;
          .time {
            color: #aaaaaa;
          }
          button.minus {
            opacity: 0.4;
          }
        `
      : css`
          button.plus {
            opacity: 0.4;
          }
        `}
`;
