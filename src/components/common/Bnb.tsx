import { COMMON_BNB_CONSTANTS } from '@/constants/common';
import theme from '@/styles/theme';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import mq from '@/utils/mediaquery';
import Icons from '@/components/common/Icons';

function Bnb() {
  const router = useRouter();
  const { greyscale } = theme.palette;
  const { bnb } = COMMON_BNB_CONSTANTS;

  // 현재 URL과 비교하는 함수
  const isCurrent = (url: string) => router.pathname === url;

  const renderIcon = (icon: string, isActive: boolean) => {
    switch (icon) {
      case bnb.home.icon:
        return (
          <Icons
            icon={bnb.home.icon}
            color={isActive ? greyscale.grey60 : greyscale.grey30}
          />
        );
      case bnb.lunch.icon:
        return (
          <Icons
            color={isActive ? greyscale.grey60 : greyscale.grey30}
            icon={bnb.lunch.icon}
          />
        );
      case bnb.user.icon:
        return (
          <Icons
            color={isActive ? greyscale.grey60 : greyscale.grey30}
            icon={bnb.user.icon}
          />
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
            {renderIcon(item.icon, isCurrent(item.url))}
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
