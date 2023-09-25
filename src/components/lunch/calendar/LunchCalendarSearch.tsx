import { useState } from 'react';
import { css } from '@emotion/react';
import { SearchIcon } from '@/assets/icons';
import { CALENDAR_CONTENT, CALENDAR_CASE } from '@/constants/lunch';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import LunchCalendarListItem from '@/components/lunch/calendar/LunchCalendarListItem';
import LunchCalendarMenu from '@/components/lunch/calendar/LunchCalendarMenu';
import usePagesStore from '@/stores/usePagesStore';

function LunchCalendarSearch() {
  const [searchText, setSearchText] = useState('');
  const { nextComponent, setNextComponent } = usePagesStore();
  const { title, subTitle } = CALENDAR_CONTENT;
  const { listItem } = CALENDAR_CASE;

  const onClickHeaderHandler = () => {
    setNextComponent('LunchCalendarReview');
  };

  if (nextComponent === 'LunchCalendarMenu') return <LunchCalendarMenu />;

  return (
    <section>
      <Header title={title.search} onClick={onClickHeaderHandler} />
      <div css={inputStyles}>
        <Input variant="search" value={searchText} setValue={setSearchText} />
        <SearchIcon css={iconStyles} />
      </div>
      <div css={textStyles}>
        <span>{subTitle.recentSearches}</span>
        <div>
          <LunchCalendarListItem
            type={listItem.type1}
            content="최근 검색한 결과 (테스트용)"
          />
        </div>
      </div>
      <div>
        <div>
          <span css={textStyles}>{subTitle.searchResults}</span>
          <span css={colorTextStyles}>3건</span>
        </div>
        <div>
          <LunchCalendarListItem
            type={listItem.type2}
            content="검색한 결과 (테스트용)"
            category="한식 (테스트용)"
            time={3}
            imageUrl="/gift.png"
          />
          <LunchCalendarListItem
            type={listItem.type2}
            content="검색한 결과 (테스트용)"
            category="한식 (테스트용)"
            time={3}
            imageUrl="/gift.png"
          />
        </div>
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
  margin: 0 6px 4px 4px;
  font: ${theme.font.body.body2_400};
  color: ${theme.palette.greyscale.grey50};
`;

const colorTextStyles = css`
  font: ${theme.font.body.body2_500};
  color: ${theme.palette.bluescale.blue40};
`;

export default LunchCalendarSearch;
