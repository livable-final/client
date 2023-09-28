import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import COMPONENT_NAME from '@/constants/common/pages';
import { PlusSmall } from '@/assets/icons';
import { MenuData } from '@/types/lunch/calendar';
// import { getRestaurantMenu } from '@/pages/api/lunch/calendarRequests';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarListItem from '@/components/lunch/calendar/LunchCalendarListItem';
import useWriteStore from '@/stores/useWriteStore';
import usePagesStore from '@/stores/usePagesStore';
// import useFetch from '@/hooks/useFetch';

function LunchCalendarMenu() {
  const [showInput, setShowInput] = useState(false);
  const [addMenu, setAddMenu] = useState('');
  const [menuData, setMenuData] = useState<MenuData[]>([
    {
      menuId: 1,
      menuName: '제육덮밥',
    },
    {
      menuId: 2,
      menuName: '된장찌개',
    },
    {
      menuId: 3,
      menuName: '부추전',
    },
  ]);
  const { restaurant, selectedMenu } = useWriteStore();
  const { setNextComponent, goBack } = usePagesStore();
  const { subTitle, button } = CALENDAR_CONTENT;
  const { calendar } = COMPONENT_NAME.lunch;
  const inputRef = useRef<HTMLInputElement | null>(null);

  // useEffect(() => {
  //   getMenuData();
  // }, []);

  // const getMenuData = async () => {
  //   if (restaurant.restaurantId) {
  //     try {
  //       const res = await getRestaurantMenu(restaurant.restaurantId);
  //       setMenuData(res);
  //       console.log('메뉴', res);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   }
  // };

  // const { response } = useFetch({
  //   fetchFn: getRestaurantMenu,
  //   arg: restaurant.restaurantId,
  // });

  const onClickHaederHandler = () => {
    goBack();
  };

  const onClickAddBtnHandler = () => {
    setShowInput(true);

    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    setAddMenu(e.target.value.trim());
  };

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!addMenu) {
      return setShowInput(false);
    }

    const menuId = menuData.length;
    setMenuData([...menuData, { menuId, menuName: addMenu }]);
    setAddMenu('');
    setShowInput(false);
  };
  const onClickBtnHandler = () => {
    if (selectedMenu.length) {
      setNextComponent(calendar.eatOut);
    } else {
      alert('메뉴를 선택해 주세요');
    }
  };

  console.log('매뉴확인', menuData);

  return (
    <section css={pageStyles}>
      <div>
        <Header
          title={restaurant.restaurantName}
          onClick={onClickHaederHandler}
        />
        <div css={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <LunchSubTitle title={subTitle.menu} type="subTitle" />
        </div>
        {menuData.map((item) => (
          <LunchCalendarListItem
            key={item.menuId}
            type="menu"
            content={item.menuName}
          />
        ))}
        {!showInput ? (
          <button type="button" onClick={onClickAddBtnHandler} css={plusStyles}>
            <span>추가</span>
            <PlusSmall />
          </button>
        ) : (
          <form onSubmit={onSubmitHandler} css={plusStyles}>
            <input
              type="text"
              ref={inputRef}
              onChange={onChangeHandler}
              css={inputStyles}
            />
            <button type="submit" aria-label="Save" hidden />
          </form>
        )}
      </div>
      <div css={btnBoxStyles}>
        <Button
          content={button.button3.text}
          variant="blue"
          onClick={onClickBtnHandler}
        />
      </div>
    </section>
  );
}
const pageStyles = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const plusStyles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px 4px;
  cursor: pointer;
  background-color: ${theme.palette.greyscale.grey10};
  color: ${theme.palette.greyscale.grey50};
`;

const inputStyles = css`
  text-align: center;
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding-left: 0;
  margin: 0 0;
  background-color: transparent;
`;

const btnBoxStyles = css`
  margin-bottom: 20px;
`;

export default LunchCalendarMenu;
