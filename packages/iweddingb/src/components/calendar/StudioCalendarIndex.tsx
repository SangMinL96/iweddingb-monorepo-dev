import MainCalendarSkeleton from '@common/skeleton/MainCalendarSkeleton';

import { useRouter } from 'next/router';
import { lazy, Suspense } from 'react';
import styled from 'styled-components';
import DetailHeader from './components/header/DetailHeader';
import MonthPicker from './components/header/MonthPicker';
import Notice from './components/isday/Notice';
import ProductsTime from './components/isday/ProductsTime';
import Temp from './components/isday/Temp';

const StudioCalendar = lazy(() => import('./components/calendar/StudioCalendar'));

function StudioCalendarIndex() {
  const router = useRouter();
  const { isday = '0' } = router.query;
  return (
    <Container isday={isday === '1'}>
      {/* 스케줄 디테일 */}
      {isday === '1' ? (
        <>
          <DetailHeader />
          <Notice />
          <ProductsTime />
          <Temp />
        </>
      ) : (
        <>
          <MonthPicker />
          <Suspense fallback={<MainCalendarSkeleton />}>
            <StudioCalendar />
          </Suspense>
        </>
      )}
    </Container>
  );
}

export default StudioCalendarIndex;

const Container = styled.div<{ isday: boolean }>`
  width: 100%;
  height: calc(100vh - 56px);
  border-left: ${props => props.isday && `1px solid #EAEAEA`};
  /* border: 1px solid #eaeaea; */
`;
