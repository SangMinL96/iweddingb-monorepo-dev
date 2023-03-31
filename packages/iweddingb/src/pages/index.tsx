import { haveSsrCookieToken } from '@common/fetcher/option';
import { getRand } from '@iweddingb-workspace/shared';
import theme from '@styles/theme';
import { useEnterpriseInfo } from 'api/schedule/hooks';
import { GetServerSidePropsContext } from 'next';
import { lazy, useEffect } from 'react';
import { useGlobalState } from 'store/useGlobalState';
import styled from 'styled-components';

const StudioCalendarIndex = lazy(() => import('@components/calendar/StudioCalendarIndex'));

function HomeIndexPage() {
  const { data } = useEnterpriseInfo();
  const [setProductList, resetState] = useGlobalState(state => [state.setProductList, state.resetState]);
  useEffect(() => {
    setProductList(
      data?.products?.map(product => {
        const randomIndex = getRand();
        return {
          ...product,
          color: theme.colorPalette[randomIndex],
          backgroundColor: theme.opacityColorPalette[randomIndex],
        };
      }),
    );

    return () => resetState();
  }, []);

  return (
    <Container>
      <StudioCalendarIndex />
    </Container>
  );
}
// authorization: Bearer
export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  if (!haveSsrCookieToken(ctx)) {
    return {
      redirect: {
        permanent: false,
        destination: `/login`,
      },
    };
  }
  return {
    props: { isLogin: true }, // will be passed to the page component as props
  };
}

export default HomeIndexPage;

const Container = styled.section`
  width: 100%;
  height: 100vh;
`;
