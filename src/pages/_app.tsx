import '@/styles/globals.css';
import theme from '@/styles/theme';
import Layout from '@/components/common/Layout';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
