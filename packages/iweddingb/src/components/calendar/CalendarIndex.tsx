import theme from '@styles/theme';
import Calendar from 'react-calendar';
import styled, { css } from 'styled-components';
import 'react-calendar/dist/Calendar.css';
import { useEffect, useRef, useState } from 'react';
import dayjs from 'dayjs';
import useWindowDimensions from 'hooks/useWindowDimensions';
import useMouseEvent from './hooks/useMouseEvent';
import TileContent from './components/TileContent';

function CalendarIndex() {
  const [curDate, setCurDate] = useState<Date>(new Date());
  const ref = useRef<HTMLDivElement>(null);
  const [isCalendarMount, setIsCalendarMount] = useState<boolean>(false);
  const [offsetHeight, setOffsetHeight] = useState<number>(0);
  const [row, setRow] = useState<Number>(0);
  const { height } = useWindowDimensions();

  const onViewChange = ev => {
    setCurDate(ev.activeStartDate);
    // setSessionStore('schedule_rtnDate', moment(ev.activeStartDate).format('YYYY-MM-DD'));
    // mutate(ev.activeStartDate);
    // onChange(moment(ev.activeStartDate).format('YYYY-MM-DD'));
    // const calendar = ref.current;
    // calendar?.setActiveStartDate(ev.activeStartDate);
  };

  useEffect(() => {
    const el = global.window && document.querySelectorAll('button.react-calendar__tile');
    setRow(el?.length > 35 ? 6 : 5);
    const con = global.window && document.getElementById('calendar_container');
    setOffsetHeight(Number(con?.offsetHeight) - 130);
  }, [height]);
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
        tileContent={({ date, view }) => <TileContent />}
      />
    </Container>
  );
}

export default CalendarIndex;

type StyledType = {
  offsetHeight: string;
  row: number;
};

const Container = styled.div<StyledType>`
  position: relative;
  width: 100%;
  height: 100%;
  .react-calendar {
    width: 100%;
    height: calc(100vh - 150px);
  }
  .react-calendar__month-view__days {
    & > button {
      ${props => css`
        height: calc((${props.offsetHeight} / ${props.row}));
      `}

      ${theme.flexCenter};
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      /* min-height: calc(20% - 20px); */
      padding: 6px;
      font-size: 14px;
      border: 1px solid #eeeeee;
      overflow: unset !important;
      > abbr {
        height: 28px;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
        color: #000;
      }
      &:nth-child(1) {
        > abbr {
          color: #ff4e4e;
        }
      }
      &:nth-child(8) {
        > abbr {
          color: #ff4e4e;
        }
      }

      &:nth-child(15) {
        > abbr {
          color: #ff4e4e;
        }
      }
      &:nth-child(22) {
        > abbr {
          color: #ff4e4e;
        }
      }
      &:nth-child(29) {
        > abbr {
          color: #ff4e4e;
        }
      }
      &:nth-child(36) {
        > abbr {
          color: #ff4e4e;
        }
      }
      &:nth-child(43) {
        > abbr {
          color: #ff4e4e;
        }
      }
      &:nth-child(7) {
        > abbr {
          color: #369afc;
        }
      }
      &:nth-child(14) {
        > abbr {
          color: #369afc;
        }
      }
      &:nth-child(21) {
        > abbr {
          color: #369afc;
        }
      }
      &:nth-child(28) {
        > abbr {
          color: #369afc;
        }
      }
      &:nth-child(35) {
        > abbr {
          color: #369afc;
        }
      }
      &:nth-child(42) {
        > abbr {
          color: #369afc;
        }
      }
    }
    button:disabled {
      background-color: white;
      > abbr {
        color: #cecece;
      }
    }

    & > button.react-calendar__month-view__days__day--neighboringMonth {
      > abbr {
        color: #cecece;
      }
    }
  }
  .react-calendar {
    position: relative;
    width: 100%;
    border: none;
    font-size: 17px !important;
  }
  .react-calendar__navigation {
    ${theme.flexCenter};
    /* width: 200px !important; */
    min-width: 175px !important;
    max-width: 200px !important;
    height: 50px;
    margin: 0 auto;
    > button {
      height: 24px;
    }
  }
  .react-calendar__navigation button:disabled {
    //매인 년도 월
    background-color: white;
    font-size: 18px;
    font-weight: 700;
    color: #262626;
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
  }
  .react-calendar__navigation__label {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: auto !important;
    flex-grow: unset !important;
    margin: 0 10px;
    /* height: 100%; */
    font-size: 16px;
    font-weight: 700;
  }
  .react-calendar__navigation__prev-button {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    width: 24px;
    /* height: 100%; */
    min-width: unset;
    font-size: 30px;
    color: #dddddd;
    /* transform: translateY(-2px); */
  }
  .react-calendar__navigation__next-button {
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    width: 24px;
    /* height: 100%; */
    min-width: unset;
    font-size: 30px;
    color: #dddddd;
    /* transform: translateY(-2px); */
  }
  .react-calendar__navigation__prev2-button {
    display: none;
  }
  .react-calendar__navigation__next2-button {
    display: none;
  }
  .react-calendar__month-view__weekdays {
    ${theme.flexCenter};
    border: 1px solid #e8e8e8;
    border-bottom: none;
    height: 80px;
    font-size: 13px;
    font-weight: 400;
    color: #cecece;
    abbr[title] {
      text-decoration: none;
    }
    > div {
      //토요일
      &:nth-child(1) {
        color: #fd4381;
      }
      //일요일
      &:nth-child(7) {
        color: #369afc;
      }
    }
  }
  .react-calendar__tile--active {
    background: none;
    color: inherit;
  }

  //오늘 날짜 스타일
  .react-calendar__tile--now {
    background: none;

    > abbr {
      width: 28px;
      height: 28px;
      background-color: #262626 !important;
      border-radius: 50px;
      color: white !important;
    }
  }
  // 빨간날 스타일
  .react-calendar__month-view__days__day--weekend {
    > abbr {
      color: #ff4e4e;
    }
  }

  // 비활성 날짜 스타일
  .react-calendar__month-view__days__day--neighboringMonth {
    > abbr {
      color: #cecece !important;
    }
  }
  //포커싱 클릭 색상
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: none;
  }

  // 전달 or 다음달 날짜 비활성화
  .react-calendar__month-view__days__day--neighboringMonth {
    > abbr {
      color: #cecece !important;
    }
  }
`;
