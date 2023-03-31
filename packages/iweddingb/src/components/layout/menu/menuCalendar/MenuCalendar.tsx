import MonthDatePicker from '@common/ui/MonthDatePicker';
import { formatToday } from '@iweddingb-workspace/shared';
import 다음아이콘 from '@styles/svg/다음아이콘';
import 이전아이콘 from '@styles/svg/이전아이콘';
import theme from '@styles/theme';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';
import SmallCalendarContainer from './style/calendarStyled';

function MenuCalendar() {
  const router = useRouter();
  const [ref, setRef] = useState(null);
  const { curdate = formatToday() } = router.query;
  const [localDate, setLocalDate] = useState<Date>(dayjs(String(curdate)).toDate());
  const onDateArrowClick = type => {
    let newDate;
    if (type === 'prev') {
      newDate = dayjs(localDate).subtract(1, 'months').toDate();
    }
    if (type === 'next') {
      newDate = dayjs(localDate).add(1, 'months').toDate();
    }
    setLocalDate(newDate);
    ref?.setActiveStartDate(newDate);
  };
  return (
    <Container>
      <div className='small_datepicker'>
        <button type='button' aria-label='이전 월로 가기' onClick={() => onDateArrowClick('prev')} className='prev_icon'>
          {이전아이콘()}
        </button>
        <MonthDatePicker
          date={localDate}
          onChange={(date: Date) => {
            ref?.setActiveStartDate(date);
            setLocalDate(date);
          }}
        />
        <button type='button' aria-label='다음 월로 가기' onClick={() => onDateArrowClick('next')} className='next_icon'>
          {다음아이콘()}
        </button>
      </div>
      <SmallCalendarContainer>
        <Calendar
          ref={setRef}
          calendarType='US'
          value={localDate}
          formatDay={(locale, date) => dayjs(date).format('D')}
          onClickDay={(date: Date) => {
            setLocalDate(date);
            ref?.setActiveStartDate(date);
            router.push({ query: { ...router.query, curdate: dayjs(date).format('YYYY/MM/DD'), isday: 1 } }, undefined, {
              shallow: true,
            });
          }}
          minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
          maxDetail='month'
        />
      </SmallCalendarContainer>
    </Container>
  );
}

export default MenuCalendar;
const Container = styled.div`
  .small_datepicker {
    margin-top: 40px;
    ${theme.flexCenter};
    .next_icon {
      margin-left: -5px;
    }
  }
`;
