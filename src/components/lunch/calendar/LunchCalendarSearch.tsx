import { useState, useEffect } from 'react';
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
import useFetch from '@/hooks/useFetch';

function LunchCalendarSearch() {
  const [searchData, setSearchData] = useState<RestaurantsData[]>([]);
  const [showSearch, setShowSearch] = useState(true);
  const [keyword, setKeyword] = useState('');
  const { nextComponent, setNextComponent, goBack } = usePagesStore();
  const setRestaurant = useWriteStore((state) => state.setRestaurant);

  const { calendar } = COMPONENT_NAME.lunch;
  const { title, subTitle } = CALENDAR_CONTENT;
  const { listItem } = CALENDAR_CASE;

  useEffect(() => {}, []);

  const onClickHeaderHandler = () => {
    goBack();
  };

  const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      console.log('keyword', keyword);
      const res = await getRestaurants(keyword);
      setSearchData(res);
      console.log('검색 성공', res);
    } catch (err) {
      console.log('검색 오류', err);
    }
  };
  const onClickBtnHandler = (
    e: MouseEvent,
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

  const searchData1 = [
    {
      restaurantId: 1,
      restaurantName: '김밥천국',
      restaurantCategory: '분식',
      inBuilding: false,
      estimatedTime: 15,
      foor: 0,
    },
    {
      restaurantId: 2,
      restaurantName: '할머니순두부',
      restaurantCategory: '한식',
      inBuilding: true,
      estimatedTime: 0,
      floor: -1, // (지하 1층)
    },
    {
      restaurantId: 3,
      restaurantName: '제육한상',
      restaurantCategory: '한식',
      inBuilding: false,
      estimatedTime: 3,
      floor: 0,
    },
  ];

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
            <LunchCalendarListItem
              type={listItem.type1}
              content="최근 검색한 결과 (테스트용)"
            />
          </div>
        </div>
      ) : (
        <div>
          <div>
            <span css={textStyles}>{subTitle.searchResults}</span>
            <span css={colorTextStyles}>3건</span>
          </div>
          <div>
            {searchData1.map((item) => (
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
