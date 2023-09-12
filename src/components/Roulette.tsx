import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState } from 'react';
import Button from './common/Button';

// 임시 더미데이터
const response = {
  korean: {
    category: '한식',
    menu: ['국밥', '뚝배기 불고기', '제육볶음', '백반', '짜글이'],
  },
  chinese: {
    category: '중식',
    menu: ['짜장면', '짬뽕', '마라탕', '도삭면'],
  },
  western: {
    category: '양식',
    menu: ['햄버거', '치킨', '피자', '샐러드', '스테이크'],
  },
  japanese: {
    category: '일식',
    menu: ['돈까스', '텐동', '초밥', '라멘'],
  },
  snacks: {
    category: '분식',
    menu: ['떡볶이', '김밥', '쫄면', '땡초우동'],
  },
  asian: {
    category: '아시안',
    menu: ['쌀국수', '분짜', '팟타이'],
  },
};

function Roulette() {
  const [category, setCategory] = useState<string[]>(['카테고리']);
  const [menu, setMenu] = useState<string[]>(['메뉴명']);
  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // 카테고리 배열 string[]
  const categories = Object.values(response).map((value) => value.category);
  // 카테고리별 메뉴 배열 string[][]
  const menus = Object.values(response).map((value) => value.menu);

  // length를 매개변수로 받아 length에 따른 랜덤 number 반환
  const onRandomHandler = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const onClickHandler = () => {
    const categoryIdx = onRandomHandler(categories.length);
    const menuIdx = onRandomHandler(menus[categoryIdx].length);

    if (isChecked) {
      // 업데이트된 카테고리에 따른 랜덤 메뉴 state 업데이트
      setMenu(menus[menuIdx]);
    } else {
      // 랜덤하게 카테고리 state 업데이트
      setCategory(categories);

      // 업데이트된 카테고리에 따른 랜덤 메뉴 state 업데이트
      setMenu(menus[menuIdx]);
    }
    setIsClicked(true);
    console.log(isClicked);
  };

  const onCheckHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <div>
        <div>
          <div>
            {category.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </div>
          <div>
            {menu.map((value) => (
              <li key={value}>{value}</li>
            ))}
          </div>
        </div>
      </div>
      {isClicked && (
        <div>
          <input type="checkbox" id="checkbox" onClick={onCheckHandler} />
          <span>{`${category} 고정`}</span>
        </div>
      )}
      <Button content="버튼" onClick={onClickHandler} variant="blue" />
    </>
  );
}

export default Roulette;
