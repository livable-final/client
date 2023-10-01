import { css } from '@emotion/react';
import { pretendard, godo, gwPower, yeongdeok, dnfBitBit } from '@/styles/font';

function Layout({ children }: React.PropsWithChildren) {
  return (
    <div
      className={`${pretendard.variable} ${godo.variable} ${gwPower.variable} ${yeongdeok.variable} ${dnfBitBit.variable}`}
      css={layoutStyles}
    >
      {children}
    </div>
  );
}

const layoutStyles = css`
  position: relative;
  padding: 0 16px;
  margin: 0 auto;
  min-width: 280px;
  max-width: 1024px;
`;

export default Layout;
