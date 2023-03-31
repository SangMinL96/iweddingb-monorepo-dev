import { formatToday } from '@iweddingb-workspace/shared';
import { useCalendarState } from '@store/useCalendarState';
import theme from '@styles/theme';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

function DetailHeader() {
  const router = useRouter();
  const { curdate } = router.query;
  const calendarRef = useCalendarState(state => state.calendarRef);
  return (
    <Container>
      <div className='date_header'>
        <h5>{dayjs(String(curdate)).format('YYYY년 M월')}</h5>
        <button
          onClick={() => {
            const date = dayjs(String(curdate)).toDate() as Date;
            calendarRef?.setActiveStartDate(date);
            router.push({ query: { curdate, isday: 0 } }, undefined, { shallow: true });
          }}
          type='button'
          aria-label='달력 전체보기로 이동'
        >
          달력 전체보기
        </button>
      </div>
    </Container>
  );
}

export default DetailHeader;

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  .date_header {
    ${theme.flexCenter};
    justify-content: flex-start;
    height: 60px;
    > h5 {
      color: ${theme.black};
      font-size: 1.8rem;
      font-weight: 500;
      margin-right: 20px;
    }
    > button {
      width: 96px;
      height: 32px;
      border: 1px solid ${theme.black};
      border-radius: 6px;
      font-weight: 700;
      font-size: 1.4rem;
    }
  }
`;
