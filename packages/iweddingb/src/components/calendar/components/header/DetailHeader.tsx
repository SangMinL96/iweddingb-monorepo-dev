import { useCalendarState } from '@store/useCalendarState';
import 도트아이콘 from '@styles/svg/도트아이콘';
import theme from '@styles/theme';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import styled from 'styled-components';

function DetailHeader() {
  const router = useRouter();
  const { curdate } = router.query;
  const calendarRef = useCalendarState(state => state.calendarRef);
  const daysArr = ['일', '월', '화', '수', '목', '금', '토'];
  const today = dayjs(String(curdate));

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
      <div className='weekly_header'>
        {daysArr.map((day, index) => {
          const todayDay = dayjs(String(curdate)).day();
          const diff = todayDay - index;
          
          return (
            <button
              onClick={() =>
                router.push({ query: { ...router.query, curdate: today.subtract(diff, 'day').format('YYYY/MM/DD') } }, undefined, {
                  shallow: true,
                })
              }
              className={index === todayDay && 'is_day'}
              type='button'
              key={`${day}_${index}`}
              aria-label={today.subtract(diff, 'day').format('YYYY년MM월DD일 dd요일 이동')}
            >
              <span>
                {`${today.subtract(diff, 'day').format('DD')} (${day})`}
                {index === todayDay && <span className='dot' />}
              </span>
            </button>
          );
        })}
      </div>
    </Container>
  );
}

export default DetailHeader;

const Container = styled.div`
  width: 100%;

  .date_header {
    padding: 0 20px;
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
  .weekly_header {
    width: 100%;
    height: 50px;
    border-top: 1px solid #eaeaea;
    border-bottom: 1px solid #eaeaea;
    > button {
      width: calc(100% / 7);
      height: 50px;
      font-size: 1.4rem;
      color: #aaaaaa;
      &.is_day {
        color: #fd4381;
        font-weight: 700;
      }
      > span {
        position: relative;
      }
      .dot {
        position: absolute;
        right: -4px;
        top: -2px;
        background-color: #fd4381;
        width: 4px;
        height: 4px;
        border-radius: 50%;
      }
    }
  }
`;
