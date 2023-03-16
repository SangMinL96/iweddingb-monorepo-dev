import GlobalStyles from '@styles/globalStyles';
import dayjs from 'dayjs';
import 'dayjs/locale/ko'; // 한국어 가져오기
import relativeTime from 'dayjs/plugin/relativeTime';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { SWRConfig } from 'swr';

const Layout = dynamic(() => import('@components/layout/Layout'), { ssr: false });

dayjs.extend(relativeTime);
dayjs.locale('ko');
function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ revalidateOnFocus: false, errorRetryCount: 3 }}>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
}

export default App;
