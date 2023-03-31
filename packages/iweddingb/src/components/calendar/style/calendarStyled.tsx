import theme from '@styles/theme';
import styled, { css } from 'styled-components';

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
  .react-calendar__navigation {
    display: none !important;
  }
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: repeat(7, 1fr) !important;
    & > button {
      ${props => css`
        min-height: calc((${props.offsetHeight} / ${props.row}));
        max-height: calc((${props.offsetHeight} / ${props.row}));
      `}
      ${theme.flexCenter};
      position: relative;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      /* min-height: calc(20% - 20px); */
      padding: 6px;
      font-size: 1.4rem;
      border: 1px solid #eeeeee;
      overflow: unset !important;
      > abbr {
        padding: 10px;
        font-size: 1.6rem;
        font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
          'Helvetica Neue', sans-serif;
        color: #000;
      }
      &:nth-child(1) {
        > abbr {
          color: #ff4e4e;
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
    font-size: 1.7rem !important;
  }

  .react-calendar__month-view__weekdays {
    ${theme.flexCenter};
    border: 1px solid #e8e8e8;
    border-bottom: none;
    height: 48px;
    font-size: 1.4rem;
    font-weight: 400;
    color: #262626;
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
    > abbr {
      color: #fd4381 !important;
    }
  }

  //오늘 날짜 스타일
  .react-calendar__tile--now {
    background: none !important;
    border: 1px solid #eeeeee;
    > abbr {
      width: 28px;
      ${theme.flexCenter};
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

export default Container;
export { Container };
