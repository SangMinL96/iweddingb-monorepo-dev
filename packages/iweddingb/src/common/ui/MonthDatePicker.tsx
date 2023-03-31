import theme from '@styles/theme';
import ko from 'date-fns/locale/ko';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const ReactDatePicker = DatePicker as any;

type PropsType = {
  date: Date;
  onChange: (date: Date) => void;
};

function MonthDatePicker({ date, onChange }: PropsType) {
  return (
    <Container>
      <ReactDatePicker
        locale={ko}
        disabledKeyboardNavigation
        placeholderText=''
        selected={date}
        onChange={onChange}
        dateFormat='yyyy년 MM월'
        minDate={new Date()}
        showMonthYearPicker
        onFocus={e => {
          e.target.readOnly = true;
          e.currentTarget.readOnly = true;
          e.currentTarget.blur();
        }}
      />
    </Container>
  );
}

export default React.memo(MonthDatePicker);

const Container = styled.div`
  position: relative;
  .react-datepicker {
    font-family: 'Pretendard', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
      'Helvetica Neue', sans-serif;
    border-radius: 12px !important;
    border: 1px solid #eaeaea;
  }
  .react-datepicker-wrapper {
    width: 100px;
    ${theme.flexCenter};
    border-radius: 12px !important;
    input {
      width: 100px;
      height: 37px;
      border: none;
      font-size: 1.7rem;
      color: #262626;
      cursor: pointer;
      font-weight: 700;
    }
  }
  .react-datepicker__input-container {
    ${theme.flexCenter};
  }
  .react-datepicker__triangle {
    display: none;
  }

  .react-datepicker__navigation {
    height: 30px;
    span {
      &::before {
        border-color: ${theme.black} !important;
        border-width: 1.5px 1.5px 0 0;
        top: 7px;
      }
    }
  }
  .react-datepicker__navigation-icon::before {
    color: ${theme.black} !important;
  }
  .react-datepicker__navigation-icon--previous::before {
    width: 7px;
    height: 7px;
    font-size: 1.6rem;
  }
  .react-datepicker-popper {
    width: 220px;
    inset: 0 !important;
    left: 50% !important;
    top: 36px !important;
    transform: translateX(-50%) !important;
    z-index: 99;
  }
  .react-datepicker__header {
    height: 40px;
    ${theme.flexCenter};
    background-color: white;
    font-size: 1.4rem;
    color: ${theme.black};
    border-top-right-radius: 12px !important;
    border-top-left-radius: 12px !important;
    border-bottom: 1px solid #eaeaea;
  }
  .react-datepicker__navigation-icon {
    top: 2px;
  }
  .react-datepicker__navigation-icon--next::before {
    width: 7px;
    height: 7px;
    font-size: 1.6rem;
    color: ${theme.black} !important;
  }

  .react-datepicker__month-wrapper {
    width: 200px;
    min-height: 28px;
    border-radius: 12px !important;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(3, 1fr);
    > div {
      ${theme.flexCenter};
      font-size: 1.2rem;
      color: #262626;
      padding: 6px 23px;
      min-width: 62px !important;
      max-width: 62px !important;
      height: 28px !important;
      white-space: nowrap;
      text-align: center;
      margin: 0 !important;
      &:hover {
        background-color: rgba(253, 67, 129, 0.22);
      }
    }
  }
  .react-datepicker__month-text--keyboard-selected {
    color: #fd4381 !important;
    padding: 2px;
  }
  .react-datepicker__month--selected {
    color: #fd4381 !important;
    background-color: white;
    padding: 2px;
  }
  .react-datepicker__month--disabled {
    font-size: 1.2rem;
    color: #eeeeee !important;
  }
`;
