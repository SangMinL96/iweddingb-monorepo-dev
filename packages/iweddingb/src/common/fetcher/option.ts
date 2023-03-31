import { isEmpty } from '@iweddingb-workspace/shared';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

const haveSsrCookieToken = (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);
  return isEmpty(cookies.access_token);
};

const ssrOption = (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);
  return { headers: { cookie: ctx.req.headers.cookie, Authorization: `Bearer ${cookies.access_token}` } };
};

export default ssrOption;
export { ssrOption, haveSsrCookieToken };
