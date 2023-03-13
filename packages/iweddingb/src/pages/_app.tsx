import GlobalStyles from '@styles/globalStyles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 가져오기
import relativeTime from 'dayjs/plugin/relativeTime';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@components/layout/Layout'), { ssr: false });

dayjs.extend(relativeTime);
dayjs.locale('ko');
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default App;
