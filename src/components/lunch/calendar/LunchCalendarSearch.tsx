import { useState } from 'react';
import { css } from '@emotion/react';
import { SearchIcon } from '@/assets/icons';
import { CALENDAR_CONTENT, CALENDAR_CASE } from '@/constants/lunch';
import COMPONENT_NAME from '@/constants/common/pages';
import { getRestaurants } from '@/pages/api/lunch/calendarRequests';
import { RestaurantsData } from '@/types/lunch/calendar';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import LunchCalendarListItem from '@/components/lunch/calendar/LunchCalendarListItem';
import usePagesStore from '@/stores/usePagesStore';
import useWriteStore from '@/stores/useWriteStore';
import useSaveStore from '@/stores/useSaveStore';
import keyDate from '@/utils/key';

function LunchCalendarSearch() {
  const [searchData, setSearchData] = useState<RestaurantsData[]>([]);
  const [showSearch, setShowSearch] = useState(false);
  const [keyword, setKeyword] = useState('');
  const { setNextComponent, goBack } = usePagesStore();
  const setRestaurant = useWriteStore((state) => state.setRestaurant);
  const keywordData = useSaveStore((state) => state.keyword);
  const key = keyDate();

  const { calendar } = COMPONENT_NAME.lunch;
  const { title, subTitle } = CALENDAR_CONTENT;
  const { listItem } = CALENDAR_CASE;

  const onClickHeaderHandler = () => {
    goBack();
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await getRestaurants(keyword);
      setSearchData(res);
      setShowSearch(true);
    } catch (err) {
      //  검색 오류 예외 처리
    }
  };
  const onClickBtnHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    restaurantId: number,
    restaurantName: string,
  ) => {
    setNextComponent(calendar.menu);
    setRestaurant({ restaurantId, restaurantName });
  };

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    e.preventDefault();

    setKeyword(e.target.value);
  };

  return (
    <section>
      <Header title={title.search} onClick={onClickHeaderHandler} />
      <form css={inputStyles} onSubmit={onSubmitHandler}>
        <Input variant="search" value={keyword} onChange={onChangeHandler} />
        <button type="submit" css={iconStyles}>
          <SearchIcon />
        </button>
      </form>

      {!showSearch ? (
        <div css={textStyles}>
          <span>{subTitle.recentSearches}</span>
          <div>
            {keywordData.map((value) => (
              <LunchCalendarListItem
                key={key}
                type={listItem.type1}
                content={value}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div>
            <span css={textStyles}>{subTitle.searchResults}</span>
            <span css={colorTextStyles}>3건</span>
          </div>
          <div>
            {searchData.map((item) => (
              <LunchCalendarListItem
                key={item.restaurantId}
                type={listItem.type2}
                content={item.restaurantName}
                category={item.restaurantCategory}
                time={item.estimatedTime}
                imageUrl="/ruppy.png"
                onClick={(e) =>
                  onClickBtnHandler(e, item.restaurantId, item.restaurantName)
                }
              />
            ))}
          </div>
        </div>
      )}
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
