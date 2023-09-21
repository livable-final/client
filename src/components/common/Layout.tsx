import { css } from '@emotion/react';
import { pretendard, godo } from '@/styles/font';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={`${pretendard.variable} ${godo.variable}`}
      css={layoutStyles}
    >
      {children}
    </div>
  );
}

const layoutStyles = css`
  padding: 0 16px;
  margin: 0 auto;
  min-width: 280px;
  max-width: 1024px;
  overflow: hidden;
`;

export default Layout;
