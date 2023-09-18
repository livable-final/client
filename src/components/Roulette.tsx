import { css } from '@emotion/react';
import { useState } from 'react';
import {
  ROULETTE_CONSTANTS,
  DUMMY_RESPONSE,
} from '@/constants/lunch/rouletteTexts';
import Button from '@/components/common/Button';
import {
  findRandomMenus,
  selectRandomCategory,
  selectRandomMenus,
} from '@/utils/selectRandomItem';
import theme from '@/styles/theme';

function Roulette() {
  const [categoryState, setCategoryState] = useState('카테고리'); // 랜덤 카테고리명
  const [menuState, setMenuState] = useState('메뉴'); // 랜덤 메뉴명
  const [menuIdState, setMenuIdState] = useState(0);
  const [isChecked, setIsChecked] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const { time, content } = ROULETTE_CONSTANTS;

  // 버튼 클릭 시 카테고리와 메뉴를 셔플하는 함수
  const onClickHandler = () => {
    setIsShown(false);
    // 체크박스가 체크되었을 때
    if (isChecked) {
      // 메뉴만 랜덤하게 변경
      const menuInterval = setInterval(() => {
        const menus = findRandomMenus(DUMMY_RESPONSE, categoryState);
        const { name, menuId } = menus; // 랜덤 메뉴의 ID
        setMenuState(name);
        setMenuIdState(menuId);

        // 메뉴 셔플 속도 (100ms)
      }, time.interval);

      // 모든 선택이 완료되는 시간 인터벌 (500ms)
      setTimeout(() => {
        clearInterval(menuInterval);
        setIsShown(true);
      }, time.duration.fixed);
    } else {
      // 체크박스가 체크되지 않았을 때
      const categoryInterval = setInterval(() => {
        const category = selectRandomCategory(DUMMY_RESPONSE);
        const { categoryName } = category;
        setCategoryState(categoryName);

        // 카테고리에 따른 메뉴 선택 인터벌 함수
        const menuInterval = setInterval(() => {
          const menus = selectRandomMenus(category);
          const { name, menuId } = menus; // 랜덤 메뉴의 ID
          setMenuState(name);
          setMenuIdState(menuId);

          // 메뉴 셔플 속도 (100ms)
        }, time.interval);

        // 카테고리 선택 완료 후 메뉴 선택까지의 시간 인터벌 (500ms)
        setTimeout(() => {
          clearInterval(menuInterval);
        }, time.duration.menu);

        // 카테고리 셔플 속도 (100ms)
      }, time.interval);

      // 카테고리 선택 완료까지의 시간 인터벌 (3500ms)
      setTimeout(() => {
        clearInterval(categoryInterval);
      }, time.duration.category);

      // 모든 선택이 완료되는 시간 인터벌 (500ms + 3500ms = 4000ms)
      setTimeout(() => {
        setIsShown(true);
      }, time.duration.category + time.duration.menu);
    }
  };

  return (
    <>
      <div css={WrapperStyles}>
        <span css={spanStyles}>{categoryState}</span>
        <span css={spanStyles}>{menuState}</span>
      </div>
      <Button
        onClick={onClickHandler}
        content={content.button}
        isDisabled={!isShown && menuIdState > 0}
        variant="blue"
      />
      <div css={checkboxStyles(isShown)}>
        <input
          css={inputStyles}
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
        <label>{`'${categoryState}' 고정`}</label>
      </div>
      {`이 음식의 ID값입니다 :> ${menuIdState}`}
    </>
  );
}

const WrapperStyles = css`
  display: flex;
  width: 320px;
  justify-content: space-around;
  margin: auto;
`;

const spanStyles = css`
  min-width: 100px;
  text-align: center;
  font: ${theme.font.body.body1_600};
`;

const checkboxStyles = (isShown: boolean) => css`
  display: ${isShown ? 'flex' : 'none'};
  justify-content: center;
  gap: 16px;
`;

const inputStyles = css`
  width: 16px;
  height: auto;
  min-width: 0;
  max-width: 40px;
`;

export default Roulette;
