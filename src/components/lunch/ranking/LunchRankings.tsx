import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { MenuTopTen } from '@/types/lunch/menuTopTen';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import { useCallback, useEffect, useState } from 'react';
import LunchRankingReviews from '@/components/lunch/ranking/LunchRankingReviews';

// 1위부터 10위까지의 랭킹을 상세히 나열하는 컴포넌트
function LunchRankings({ ...props }: MenuTopTen) {
  const { rank, count } = LUNCH_MAIN_CONSTANTS.ranking;
  const [isOpen, setIsOpen] = useState(false);
  const [menuId, setMenuId] = useState(props.menuId);

  // 클릭 시 <LunchRankingReviews /> 컴포넌트 토글
  const onClickHandler = useCallback(() => {
    setIsOpen((prev) => !prev);
    setMenuId(props.menuId);
  }, [props.menuId]);

  // 최초 렌딩 시 1위 음식에 대한 리뷰 목록을 open합니다.
  useEffect(() => {
    if (props.rank === 1) {
      setIsOpen(true);
    }
  }, [props.rank]);

  return (
    <div css={containerStyles}>
      <div css={greyBlockStyles} />
      <button type="button" onClick={onClickHandler} css={buttonStyles}>
        <span css={rankStyles(props.color)}>
          {props.rank}
          {rank}
        </span>
        <div css={wrapperStyles}>
          <span css={menuNameStyles}>{props.menuName}</span>
          <span css={countStyles}>
            {props.count}
            {count}
          </span>
        </div>
      </button>
      {isOpen && <LunchRankingReviews menuId={menuId} />}
    </div>
  );
}

const containerStyles = css`
  width: 100%;
`;

const greyBlockStyles = css`
  display: flex;
  height: 16px;
  margin: 0 -16px;
  background-color: ${theme.palette.greyscale.grey5};
`;

const buttonStyles = css`
  display: flex;
  padding: 12px 0px;
  align-items: center;
  align-self: stretch;
  gap: 12px;
  box-sizing: unset;
  border-bottom: 1px solid ${theme.palette.greyscale.grey5};
  width: calc(100% + 32px);
  transition: background-color 0.2s ease;
  margin: 0 -16px;

  &:active {
    background-color: ${theme.palette.greyscale.grey10};
  }
`;

const rankStyles = (color?: string) => css`
  display: flex;
  padding: 12px 20px 12px 28px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-right: 1px solid ${theme.palette.greyscale.grey5};
  font: ${theme.font.subTitle.subTitle1_600};
  color: ${color};
  line-height: 26px;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`;

const menuNameStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
  line-height: 24px;
`;

const countStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey40};
  line-height: 21px;
`;

export default LunchRankings;
