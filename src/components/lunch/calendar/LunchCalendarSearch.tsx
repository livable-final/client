import { css } from '@emotion/react';
import { SearchIcon } from '@/assets/icons';
import { CALENDAR_CONTENT, CALENDAR_CASE } from '@/constants/lunch';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import LunchListItem from '@/components/lunch/LunchListItem';

function LunchCalendarSearch() {
  const { title, subTitle } = CALENDAR_CONTENT;
  const { listItem } = CALENDAR_CASE;
  const onClickHandler = () => {};

  return (
    <section>
      <Header title={title.search} onClick={onClickHandler} />
      <div css={inputStyles}>
        <Input variant="search" />
        <SearchIcon css={iconStyles} />
      </div>
      <div css={textStyles}>
        <span>{subTitle.recentSearches}</span>
        <ul>
          <LunchListItem
            type={listItem.type1}
            content="최근 검색한 결과 (테스트용)"
          />
        </ul>
      </div>
      <div>
        <div css={textStyles}>
          <span>{subTitle.searchResults}</span>
          <span>3건</span>
        </div>
        <ul>
          <LunchListItem
            type={listItem.type1}
            content="검색한 결과 (테스트용)"
            category="한식 (테스트용)"
            time={3}
            imageUrl="/gift.png"
          />
          <LunchListItem
            type={listItem.type1}
            content="검색한 결과 (테스트용)"
            category="한식 (테스트용)"
            time={3}
            imageUrl="/gift.png"
          />
        </ul>
      </div>
    </section>
  );
}

const inputStyles = css`
  position: relative;
  margin-bottom: 24px;
`;

const iconStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 16px;
  margin: auto 0;
  cursor: auto;
`;

const textStyles = css`
  & span:first-child {
    display: inline-block;
    margin: 0 6px 4px 4px;
    font: ${theme.font.body.body2_400};
    color: ${theme.palette.greyscale.grey50};
  }
  & span:last-child {
    font: ${theme.font.body.body2_500};
    color: ${theme.palette.bluescale.blue40};
  }
`;

export default LunchCalendarSearch;
