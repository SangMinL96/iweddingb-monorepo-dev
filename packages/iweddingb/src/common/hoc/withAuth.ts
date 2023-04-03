import { haveSsrCookieToken } from '@common/fetcher/option';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';

const withAuth =
  (gssp: GetServerSideProps): GetServerSideProps =>
  async (ctx: GetServerSidePropsContext) => {
    if (!haveSsrCookieToken(ctx)) {
      return {
        redirect: { statusCode: 302, destination: '/login' },
      };
    }
    const gsspData = await gssp(ctx);
    if (!('props' in gsspData)) {
      throw new Error('서버사이드 프롭스 결과 없음');
    }

    return {
      props: {
        ...gsspData.props,
      },
    };
  };

export default withAuth;
export { withAuth };
