import theme from '@/styles/theme';
import { LunchMainRankingCardProps } from '@/types/lunch/ranking';
import { css } from '@emotion/react';
import Image from 'next/image';

function LunchMainRankingCard({
  menuImage,
  menuName,
  count,
  rank,
  height,
}: LunchMainRankingCardProps) {
  return (
    <div css={containerStyles}>
      <Image
        css={menuImageStyles}
        src={menuImage}
        alt="음식"
        width={44}
        height={44}
      />
      <div css={wrapperStyles}>
        <span css={menuNameStyles}>{menuName}</span>
        <span css={countStyles}>{count}명</span>
      </div>
      <div css={rankStyles(height)}>
        <span css={spanStyles}>{rank}</span>
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

const menuImageStyles = css`
  border-radius: 100px;
  background: lightgray 1px 3.663px / 97.727% 83.35% no-repeat;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const menuNameStyles = css`
  font: ${theme.font.body.body3_500};
  line-height: 21px;
`;

const countStyles = css`
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey50};
  line-height: 16px;
`;

const rankStyles = (height: number) => css`
  display: flex;
  background: ${theme.palette.orange};
  width: 67px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 8px 8px 0px 0px;
  justify-content: center;
  align-items: end;
  height: ${height}px;
`;

const spanStyles = css`
  font: ${theme.font.etc.rankingNumber};
  color: ${theme.palette.white};
  line-height: 21px;
`;

export default LunchMainRankingCard;
