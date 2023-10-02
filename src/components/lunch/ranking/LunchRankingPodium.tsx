import theme from '@/styles/theme';
import { RankingPodiumProps } from '@/types/lunch/ranking';
import { css } from '@emotion/react';
import Image from 'next/image';

function LunchRankingPodium({
  menuImage,
  menuName,
  count,
  rank,
  height,
  color,
  margin,
}: RankingPodiumProps) {
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
      <div css={rankStyles(height, color)}>
        <span css={spanStyles(margin)}>{rank}</span>
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
  background: ${theme.palette.greyscale.grey45} 1px 3.663px / 97.727% 83.35%
    no-repeat;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const menuNameStyles = css`
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.black};
  line-height: 21px;
`;

const countStyles = css`
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey50};
  line-height: 16px;
`;

const rankStyles = (height: number, color: string) => css`
  display: flex;
  background: ${color};
  width: 67px;
  height: 32px;
  flex-shrink: 0;
  border-radius: 16px 16px 0px 0px;
  justify-content: center;
  align-items: end;
  height: ${height}px;
`;

const spanStyles = (margin: string) => css`
  font: ${theme.font.etc.rankingNumber};
  color: ${theme.palette.white};
  line-height: 21px;
  margin: ${margin};
`;

export default LunchRankingPodium;
