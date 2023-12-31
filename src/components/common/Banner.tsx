import React from 'react';
import { css } from '@emotion/react';
import LunchCardProps from '@/components/lunch/LunchCard';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import theme from '@/styles/theme';
import { TearOffCalendar, Roulette } from '@/assets/icons';
import { HomeHasCafeteriaProps } from '@/types/home';
import Link from 'next/link';

function Banner({ hasCafeteria }: HomeHasCafeteriaProps) {
  // response 'hasCafeteria' boolean value에 따라 text 변경
  const getBannerText = () => {
    const key = hasCafeteria ? 'toCalendar' : 'toRoulette';
    return HOME_TEXTS[key];
  };

  const bannerText = getBannerText();

  return (
    <LunchCardProps padding={10}>
      <Link href={bannerText.href} css={containerStyles}>
        <div css={wrapperStyles}>
          <p css={bodyStyles}>{bannerText.body}</p>
          <p css={titleStyles}>{bannerText.title}</p>
        </div>
        {hasCafeteria ? <TearOffCalendar /> : <Roulette />}
      </Link>
    </LunchCardProps>
  );
}

const containerStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 0 0;
`;

const wrapperStyles = css`
  > p {
    align-self: stretch;
  }
`;

const bodyStyles = css`
  color: ${theme.palette.greyscale.grey70};
  font: ${theme.font.body.body2_500};
  line-height: 22px;
`;

const titleStyles = css`
  color: ${theme.palette.greyscale.grey90};
  font: ${theme.font.body.body1_600};
  line-height: 24px;
  max-height: 24px;
  overflow: hidden;

  // toRoulette의 text 특성 상 특정한 min-width 지정이 필요
  @media (min-width: 281px) {
    max-height: none;
  }
`;

export default Banner;
