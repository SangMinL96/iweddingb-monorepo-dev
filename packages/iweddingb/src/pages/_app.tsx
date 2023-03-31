import dayjs from 'dayjs';
import 'dayjs/locale/ko';
import relativeTime from 'dayjs/plugin/relativeTime';
import { AppProps } from 'next/app';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { SWRConfig } from 'swr';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '@styles/globalStyles';

const Layout = dynamic(() => import('@components/layout/Layout'), { ssr: false });

dayjs.extend(relativeTime);
dayjs.locale('ko');
function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <SWRConfig value={{ revalidateOnFocus: false, errorRetryCount: 3, suspense: true }}>
      <GlobalStyles />
      {router.pathname !== '/' ? (
        <Component {...pageProps} />
      ) : (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </SWRConfig>
  );
}

export default App;
