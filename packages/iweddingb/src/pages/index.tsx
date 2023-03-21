import { EnterPriseResultIft, isEmpty } from '@iweddingb-workspace/shared';
import { useGlobalState } from 'hooks/zustand/useGlobalState';
import { GetServerSidePropsContext } from 'next';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import styled from 'styled-components';

const HallCalendarIndex = dynamic(() => import('@components/calendar/HallCalendarIndex'), { ssr: false });

type PropsType = {
  enterpriseInfo: EnterPriseResultIft;
  isHall: boolean;
};
function HomeIndexPage({ enterpriseInfo, isHall }: PropsType) {
  const setEnterpriseInfo = useGlobalState(state => state.setEnterpriseInfo);
  useEffect(() => {
    setEnterpriseInfo(enterpriseInfo);
  }, []);
  return <Container>{isHall && <HallCalendarIndex />}</Container>;
}

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  // const { prdNo, entCode } = ctx.query;
  const isHall = !isNaN(1486016390);
  if (isHall) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_HOST}/api/v1/enterprise/hallInfo`);
    const data = await res.json();

    return {
      props: { enterpriseInfo: data, isHall }, // will be passed to the page component as props
    };
  }
}

export default HomeIndexPage;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
