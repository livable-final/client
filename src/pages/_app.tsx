import theme from '@/styles/theme';
import Layout from '@/components/common/Layout';
import GlobalStyle from '@/styles/GlobalStyle';
import { ThemeProvider } from '@emotion/react';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
