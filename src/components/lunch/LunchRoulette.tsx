import { css } from '@emotion/react';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import {
  findRandomMenus,
  selectRandomCategory,
  selectRandomMenus,
} from '@/utils/selectRandomItem';
import theme from '@/styles/theme';
import useFetch from '@/hooks/useFetch';
import { getMenus } from '@/pages/api/lunch/lunchRequests';
import mq from '@/utils/mediaquery';
import LunchRoulettePushBtn from '@/components/lunch/roulette/LunchRoulettePushBtn';
import LunchRouletteLockBtn from '@/components/lunch/roulette/LunchRouletteLockBtn';
import LunchRouletteBg from '@/components/lunch/roulette/LunchRouletteBg';
import useRouletteStore from '@/stores/useRouletteStore';

function LunchRoulette() {
  const { time } = LUNCH_ROULETTE_CONSTANTS;
  const { categoryState, menuState, isLocked, isOperated, isPressed, isAgain } =
    useRouletteStore();
  const { setState } = useRouletteStore;

  const { response } = useFetch({
    fetchFn: getMenus,
  });

  // Push or Again  클릭 시 카테고리와 메뉴를 셔플하는 함수
  const onClickBtnHandler = () => {
    setState({ isOperated: !isOperated }); // 가동 중!
    setState({ isPressed: !isPressed }); // 버튼 눌림!

    // *** 카테고리 고정 시! ***
    if (isLocked && isAgain) {
      const menuInterval = setInterval(() => {
        const menus = findRandomMenus(categoryState, response.data); // 랜덤하게 메뉴를 선정
        console.log(response);
        const { name, menuId } = menus; // 랜덤 메뉴의 ID와 메뉴명
        setState({ menuState: name });
        setState({ menuIdState: menuId });
      }, time.interval); // 메뉴 셔플 속도 (100ms)

      setTimeout(() => {
        clearInterval(menuInterval);
        setState({ isOperated: true }); // 가동 완료!
        setState({ isPressed: false }); // 버튼 원상 복귀!
        setState({ isSelected: false }); // 선택 완료 초기화!
      }, time.duration.fixed); // 모든 선택이 완료되는 시간 인터벌 (3000ms)

      // *** 카테고리 미 고정 시! ***
    } else {
      const categoryInterval = setInterval(() => {
        const category = selectRandomCategory(response?.data); // 랜덤하게 카테고리를 먼저 선정
        const { categoryName } = category; // 카테고리 명
        setState({ categoryState: categoryName });

        // 카테고리에 따른 메뉴 선택 인터벌 함수
        const menuInterval = setInterval(() => {
          const menus = selectRandomMenus(category);
          const { name, menuId } = menus; // 랜덤 메뉴의 ID
          setState({ menuState: name });
          setState({ menuIdState: menuId });

          // 메뉴 셔플 속도 (100ms)
        }, time.interval);

        setTimeout(() => {
          clearInterval(menuInterval);
        }, time.duration.menu); // 카테고리 선택 완료 후 메뉴 선택까지의 시간 인터벌 (500ms)
      }, time.interval); // 카테고리 셔플 속도 (100ms)

      setTimeout(() => {
        clearInterval(categoryInterval);
      }, time.duration.category); // 카테고리 선택 완료까지의 시간 인터벌 (3500ms)

      setTimeout(() => {
        setState({ isAgain: true }); // 반복 선택 !
        setState({ isOperated: true }); // 가동 완료!
        setState({ isPressed: false }); // 버튼 원상 복귀!
        setState({ isSelected: false }); // 선택 완료 초기화!
      }, time.duration.category + time.duration.menu); // 모든 선택이 완료되는 시간 인터벌 (500ms + 3500ms = 4000ms)
    }
  };

  return (
    <>
      <div css={layoutStyles}>
        <div css={bgStyles}>
          <LunchRouletteBg isOperated={isOperated} />
          <LunchRoulettePushBtn
            isPressed={isPressed}
            isAgain={isAgain}
            onClick={onClickBtnHandler}
          />
          <LunchRouletteLockBtn
            isAgain={isAgain}
            isLocked={isLocked}
            onClick={() => setState({ isLocked: !isLocked })}
          />
        </div>
      </div>
      <div css={wrapperStyles}>
        <span css={spanStyles}>{categoryState}</span>
        <span css={spanStyles}>{menuState}</span>
      </div>
    </>
  );
}

const layoutStyles = css`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const bgStyles = css`
  position: relative;
  width: 242px;
  height: 218px;

  ${mq.md} {
    width: 358px;
    height: 338px;
  }
`;

const wrapperStyles = css`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;
  height: 218px;
  gap: 10px;
  left: calc((100% - 150px) / 2);

  ${mq.md} {
    height: 318px;
    gap: 48px;
    left: calc((100% - 230px) / 2);
  }
`;

const spanStyles = css`
  justify-content: center;
  align-items: center;
  color: ${theme.palette.black};
  font: ${theme.font.etc.rouletteContent};
  margin-bottom: 15px;
  width: 150px;
  text-align: center;

  ${mq.md} {
    font: ${theme.font.etc.rouletteTitle};
    margin-bottom: 0px;
    width: 230px;
  }
`;

export default LunchRoulette;
