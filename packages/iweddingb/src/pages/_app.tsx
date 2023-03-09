import Layout from '@components/layout/Layout';
import GlobalStyles from '@styles/globalStyles';
import { AppProps } from 'next/app';

import React from 'react';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </>
  );
}

export default App;
