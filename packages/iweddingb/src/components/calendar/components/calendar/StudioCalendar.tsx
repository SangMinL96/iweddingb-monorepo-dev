import Container from '@components/calendar/style/calendarStyled';
import { useCalendarState } from '@store/useCalendarState';
import useScheduleData from 'api/schedule/hooks';
import dayjs from 'dayjs';
import useWindowDimensions from 'hooks/useWindowDimensions';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { shallow } from 'zustand/shallow';

const TileContainer = dynamic(() => import('../tile/TileContainer'));

function StudioCalendar() {
  const router = useRouter();
  const { curdate = dayjs(new Date()).format('YYYY/MM/DD') } = router.query;

  const { data: schedule } = useScheduleData();
  const [setCalendarRef] = useCalendarState(state => [state.setCalendarRef], shallow);
  const { height } = useWindowDimensions();

  const [offsetHeight, setOffsetHeight] = useState<number>(0);
  const [row, setRow] = useState<Number>(0);

  const onViewChange = ev => {
    router.replace({ query: { ...router.query, curdate: dayjs(ev.activeStartDate).format('YYYY/MM/DD') } }, undefined, { shallow: true });
  };

  useEffect(() => {
    const el = global.window && document.querySelectorAll('#calendar_container button.react-calendar__tile');
    const rows = el?.length > 35 ? 6 : 5;
    setRow(rows);
    const con = global.window && document.getElementById('calendar_container');
    setOffsetHeight(Number(con?.offsetHeight) - 108);
  }, [height, curdate]);

  return (
    <Container id='calendar_container' offsetHeight={`${offsetHeight}px`} row={Number(row)}>
      <Calendar
        ref={setCalendarRef}
        calendarType='US'
        value={dayjs(String(curdate)).toDate()}
        formatDay={(locale, date) => dayjs(date).format('D')}
        onClickDay={date => {
          if (dayjs(date).diff(new Date()) < -1) return alert('이전/당일 날짜는 선택 불가합니다.');
          router.push({ query: { ...router.query, curdate: dayjs(date).format('YYYY/MM/DD'), isday: 1 } }, undefined, {
            shallow: true,
          });
        }}
        onActiveStartDateChange={onViewChange}
        minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail='month'
        tileContent={({ date }) => (
          <TileContainer
            date={date}
            products={schedule?.filter(item => dayjs(item.schedule_date).format('YYYY/MM/DD') === dayjs(date).format('YYYY/MM/DD'))}
          />
        )}
      />
    </Container>
  );
}

export default React.memo(StudioCalendar);
