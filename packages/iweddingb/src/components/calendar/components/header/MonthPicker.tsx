import MonthDatePicker from '@common/ui/MonthDatePicker';
import { useCalendarState } from '@store/useCalendarState';
import 다음아이콘 from '@styles/svg/다음아이콘';
import 드랍다운아이콘 from '@styles/svg/드랍다운아이콘';
import 이전아이콘 from '@styles/svg/이전아이콘';
import theme from '@styles/theme';
import { formatToday } from '@iweddingb-workspace/shared';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { shallow } from 'zustand/shallow';

function MonthPicker() {
  const router = useRouter();
  const { curdate = formatToday() } = router.query;
  const [calendarRef] = useCalendarState(state => [state.calendarRef], shallow);
  const onDateArrowClick = type => {
    const date = String(curdate);
    let newDate;
    if (type === 'prev') {
      newDate = dayjs(date).subtract(1, 'months').toDate();
    }
    if (type === 'next') {
      newDate = dayjs(date).add(1, 'months').toDate();
    }
    router.replace({ query: { ...router.query, curdate: dayjs(newDate).format('YYYY/MM/DD') } }, undefined, { shallow: true });
    calendarRef?.setActiveStartDate(newDate);
  };
  return (
    <Container>
      <div className='left_box'>
        <MonthDatePicker
          date={dayjs(String(curdate)).toDate()}
          onChange={(date: Date) => {
            router.replace({ query: { ...router.query, curdate: dayjs(date).format('YYYY/MM/DD') } }, undefined, { shallow: true });
            calendarRef?.setActiveStartDate(date);
          }}
        />
        <button type='button' aria-hidden='true' className='dropdown_icon'>
          {드랍다운아이콘(false)}
        </button>
        <button type='button' aria-label='이전 월로 가기' onClick={() => onDateArrowClick('prev')} className='prev_icon'>
          {이전아이콘()}
        </button>
        <button type='button' aria-label='다음 월로 가기' onClick={() => onDateArrowClick('next')} className='next_icon'>
          {다음아이콘()}
        </button>
        <button
          type='button'
          aria-label='오늘로 가기'
          className='today'
          onClick={() => {
            router.replace({ query: { ...router.query, curdate: dayjs(new Date()).format('YYYY/MM/DD') } }, undefined, { shallow: true });
            calendarRef?.setActiveStartDate(new Date());
          }}
        >
          오늘
        </button>
      </div>
      <div className='right_box'>
        <div className='all'>
          <div className='dot' />
          전체
        </div>
        <div>
          <div className='dot' />
          가능
        </div>
        <div>
          <div className='dot' />
          마감
        </div>
      </div>
    </Container>
  );
}

export default MonthPicker;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 60px;
  ${theme.flexCenter};
  justify-content: space-between;
  border-left: 1px solid #eaeaea;
  .left_box {
    position: relative;
    width: 320px;
    padding: 0 20px;
    ${theme.flexCenter};
    justify-content: flex-start;
    .dropdown_icon {
      margin-left: -10px;
    }
    .prev_icon {
      cursor: pointer;
      margin-right: 10px;
    }
    .next_icon {
      cursor: pointer;
      margin-right: 20px;
    }
    .today {
      width: 44px;
      height: 32px;
      color: #fd4381;
      border: 1px solid #fd4381;
      border-radius: 6px;
      font-size: 1.4rem;
      font-weight: 700;
    }
  }

  .right_box {
    ${theme.flexCenter};
    justify-content: flex-end;
    > div {
      ${theme.flexCenter};
      margin-right: 20px;
      .dot {
        background-color: #eaeaea;
        border-radius: 50%;
        width: 7px;
        height: 7px;
        margin-right: 6px;
      }
    }
    > div.all {
      color: ${theme.black};
      .dot {
        background-color: #fd4381;
      }
    }
  }
`;
