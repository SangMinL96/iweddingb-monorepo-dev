import dynamic from 'next/dynamic';

const CalendarIndex = dynamic(() => import('@components/calendar/CalendarIndex'), { ssr: false });
function HomeIndexPage() {
  return (
    <div>
      <CalendarIndex />
    </div>
  );
}

export default HomeIndexPage;
