import { Html, Head, Main, NextScript } from 'next/document';

function Document() {
  return (
    <Html lang="ko">
      <Head />
      <meta property="og:title" content="오피스너" />
      <meta property="og:description" content="편리한 오피스 생활의 시작" />
      <meta property="og:url" content="officener.vercel.app" />

      <title>Officener</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
