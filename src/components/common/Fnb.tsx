import HOME_TEXTS from '@/constants/home/homeTexts';
import theme from '@/styles/theme';
import Link from 'next/link';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import mq from '@/utils/mediaquery';
import Icons from '@/components/common/Icons';
import useIsScrollYTop from '@/hooks/useIsScrollYTop';

function Fnb() {
  // 스크롤 위치 상태
  const router = useRouter();
  const { isTop, scrollY } = useIsScrollYTop(HOME_TEXTS.indicator.height);
  const { greyscale } = theme.palette;
  const { gnb } = HOME_TEXTS;

  // 현재 URL과 비교하는 함수
  const isCurrent = (url: string) => router.pathname === url;

  // 아이콘 렌더링 함수
  // TOFIXED: 아이콘이 확정되지 않아서 임시로 넣어두었습니다.
  const renderIcon = (icon: string, isActive: boolean) => {
    switch (icon) {
      case gnb.home.icon:
        return (
          <Icons
            icon={gnb.home.icon}
            color={isActive ? greyscale.grey60 : greyscale.grey30}
          />
        );
      case gnb.lunch.icon:
        return (
          <Icons
            color={isActive ? greyscale.grey60 : greyscale.grey30}
            icon={gnb.home.icon}
          />
        );
      case gnb.user.icon:
        return (
          <Icons
            color={isActive ? greyscale.grey60 : greyscale.grey30}
            icon={gnb.home.icon}
          />
        );
      default:
        return null;
    }
  };

  return (
    <>
      <ul css={containerStlyes(scrollY)}>
        {Object.values(gnb).map((item) => (
          <li key={item.name} css={wrapperStyles}>
            <Link href={item.url}>
              {renderIcon(item.icon, isCurrent(item.url))}
            </Link>
            <span css={spanStyles}>{item.name}</span>
          </li>
        ))}
      </ul>
      <div css={indicatorStyles(isTop)} />
    </>
  );
}

const containerStlyes = (target: number) => css`
  margin: 0 -16px;
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  bottom: ${target}px;
  width: 100%;
  background-color: ${theme.palette.white};
  max-width: 1024px;
  padding: 10px 34px 6px;

  // Media Query
  ${mq.md} {
    padding: 10px 68px 6px;
  }
  ${mq.tab} {
    bottom: 0;
    padding: 4px 184px;
  }

  /* Safari에서만 적용. */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      bottom: ${target}px;
    }
  }
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
`;

const spanStyles = css`
  font: ${theme.font.input.default};
  line-height: 16px;
  width: 26px;
  text-align: center;
`;

const indicatorStyles = (isTop: boolean) => css`
  display: flex;
  height: 34px;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  margin: 0 -16px;
  position: fixed;
  bottom: 0;
  background-color: ${theme.palette.white};
  width: 100%;

  ${mq.tab} {
    display: none;
  }

  /* Safari에서만 적용. */
  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) {
      display: ${isTop ? 'none' : 'flex'};
    }
  }
`;

export default Fnb;
