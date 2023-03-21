import useScheduleData from 'api/schedule/hooks';
import dayjs from 'dayjs';
import useWindowDimensions from 'hooks/useWindowDimensions';
import { useEffect, useRef, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TileContainer from './components/tile/TileContainer';
import { Container } from './style/calendarStyled';

type PropsType = {
  //   enterpriseInfo: EnterPriseResultIft;
};

function HallCalendarIndex({}: PropsType) {
  const { data: schedule } = useScheduleData();
  const [curDate, setCurDate] = useState<Date>(new Date());
  const ref = useRef<HTMLDivElement>(null);
  const [offsetHeight, setOffsetHeight] = useState<number>(0);
  const [row, setRow] = useState<Number>(0);
  const { height } = useWindowDimensions();

  const onViewChange = ev => {
    setCurDate(ev.activeStartDate);
  };

  useEffect(() => {
    const el = global.window && document.querySelectorAll('button.react-calendar__tile');
    setRow(el?.length > 35 ? 6 : 5);
    const con = global.window && document.getElementById('calendar_container');
    setOffsetHeight(Number(con?.offsetHeight) - 130);
  }, [height, curDate]);

  return (
    <Container id='calendar_container' offsetHeight={`${offsetHeight}px`} row={Number(row)}>
      <Calendar
        inputRef={ref}
        calendarType='US'
        value={new Date()}
        formatDay={(locale, date) => dayjs(date).format('D')}
        onActiveStartDateChange={onViewChange}
        minDetail='month' // 상단 네비게이션에서 '월' 단위만 보이게 설정
        maxDetail='month'
        tileDisabled={({ date, activeStartDate }) => {
          //   return scheduleTileDisabled({ date, activeStartDate, data, holidayData });
        }}
        tileContent={props => <TileContainer {...props} />}
      />
    </Container>
  );
}

export default HallCalendarIndex;
