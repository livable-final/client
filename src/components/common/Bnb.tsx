import { COMMON_BNB_CONSTANTS } from '@/constants/common';
import theme from '@/styles/theme';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import mq from '@/utils/mediaquery';
import Icons from '@/components/common/Icons';

function Bnb() {
  const router = useRouter();
  const { bnb } = COMMON_BNB_CONSTANTS;

  // 현재 URL과 비교하는 함수
  const isCurrent = (url: string) => router.pathname === url;

  const renderIcon = (icon: string, isActive: boolean) => {
    switch (icon) {
      case bnb.home.default:
        return isActive ? (
          <Icons icon={bnb.home.active} />
        ) : (
          <Icons icon={bnb.home.default} />
        );
      case bnb.lunch.default:
        return isActive ? (
          <Icons icon={bnb.lunch.active} />
        ) : (
          <Icons icon={bnb.lunch.default} />
        );
      case bnb.user.default:
        return isActive ? (
          <Icons icon={bnb.user.active} />
        ) : (
          <Icons icon={bnb.user.default} />
        );

      default:
        return null;
    }
  };

  return (
    <ul css={containerStlyes}>
      {Object.values(bnb).map((item) => (
        <li key={item.name} css={wrapperStyles}>
          <Link css={linkStyles} href={item.url}>
            {renderIcon(item.default, isCurrent(item.url))}
            <span css={spanStyles(isCurrent(item.url))}>{item.name}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}

const containerStlyes = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  bottom: 0;
  background-color: ${theme.palette.white};
  max-width: 1024px;
  padding: 7px 40px calc(7px + env(safe-area-inset-bottom));
  gap: 32px;
  align-self: stretch;
  margin: 0 -16px;
  width: 100%;

  // Media Query
  ${mq.tab} {
    bottom: 0;
    padding: 4px 184px;
  }
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1 0 0;
`;

const linkStyles = css`
  width: 100%;
  align-items: center;
  display: flex;
  flex-direction: column;

  > svg {
    display: flex;
    height: 24px;
  }
`;

const spanStyles = (isCurrent: boolean) => css`
  font: ${theme.font.input.default};
  color: ${isCurrent
    ? theme.palette.greyscale.grey60
    : theme.palette.greyscale.grey30};
  line-height: 16px;
  text-align: center;
  display: flex;
`;

export default Bnb;
