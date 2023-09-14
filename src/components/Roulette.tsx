import { useEffect, useState } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

// 임시 더미데이터
const response = [
  {
    categoryName: '한식',
    menuNames: ['국밥', '뚝배기 불고기', '제육볶음', '백반', '짜글이'],
  },
  {
    categoryName: '중식',
    menuNames: ['짜장면', '짬뽕', '마라탕', '도삭면'],
  },
  {
    categoryName: '양식',
    menuNames: ['햄버거', '치킨', '피자', '샐러드', '스테이크'],
  },
  { categoryName: '일식', menuNames: ['돈까스', '텐동', '초밥', '라멘'] },
  { categoryName: '분식', menuNames: ['떡볶이', '김밥', '쫄면', '땡초우동'] },
  { categoryName: '아시안', menuNames: ['쌀국수', '분짜', '팟타이'] },
];

interface VariantProps {
  scaleY: number;
  y: string | number;
  opacity: number;
  filter?: string;
}

function Roulette() {
  const [category, setCategory] = useState('카테고리');
  const [menu, setMenu] = useState('메뉴명');
  const [count, setCount] = useState(0);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [lastIdx, setLastIdx] = useState(0);
  const [isChecked, setIsChecked] = useState(false);

  // 카테고리 배열 string[]
  const categories = Object.values(response).map((value) => value.categoryName);

  // 카테고리별 메뉴 객체 string: string[]
  const objectedMenus: Record<string, string[]> = {};
  response.forEach((item) => {
    objectedMenus[item.categoryName] = item.menuNames;
  });

  // 카테고리 불문 모든 메뉴 배열 string[]
  const menus = Object.values(response)
    .map((value) => value.menuNames)
    .reduce((acc, cur) => acc.concat(cur));

  useEffect(() => {
    const interval = setInterval(
      () => {
        setCurrentIdx((prev) => {
          return prev < menus.length - 1 ? prev + 1 : prev;
        });
      },
      getDuration(10, currentIdx),
    );

    return () => clearInterval(interval);
  }, [currentIdx, menus.length]);

  const variants: Variants = {
    initial: { scaleY: 0.3, y: '-50%', opacity: 0 },
    animate: ({ isLast }) => {
      const props: VariantProps = { scaleY: 1, y: 0, opacity: 1 };
      if (!isLast) props.filter = 'blur(1.1px)';

      return props;
    },
    exit: { scaleY: 0.3, y: '50%', opacity: 0 },
  };

  function getDuration(base: number, Idx: number) {
    return base * (Idx + 1) * 0.5;
  }

  // length를 매개변수로 받아 length에 따른 랜덤 number 반환
  const onRandomHandler = (length: number) => {
    return Math.floor(Math.random() * length);
  };

  const onClickHandler = () => {
    const categoryIdx = onRandomHandler(categories.length);
    const menuIdx = onRandomHandler(categories[categoryIdx].length);
    setLastIdx(menus.length - 1 - count);

    if (isChecked) {
      // 업데이트된 카테고리에 따른 랜덤 메뉴 state 업데이트
      setMenu(objectedMenus[menu][menuIdx]);
    } else {
      // 랜덤하게 카테고리 state 업데이트
      setCategory(categories[categoryIdx]);

      // 업데이트된 카테고리에 따른 랜덤 메뉴 state 업데이트
      setMenu(objectedMenus[categories[categoryIdx]][menuIdx]);
    }
    setCurrentIdx(0);
    setCount((prev) => {
      return prev < menus.length - 1 ? prev + 1 : 0;
    });
  };

  // const onCheckHandler = () => {
  //   setIsChecked((prev) => !prev);
  // };

  return (
    <div css="flex justify-between">
      <AnimatePresence mode="popLayout">
        {menus.map((text, i) => {
          const isLast = i === lastIdx;

          return (
            i === currentIdx && (
              <motion.p
                className="overflow-hidden text-7xl font-thin"
                key={text}
                custom={{ isLast }}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{
                  duration: getDuration(isLast ? 0.1 : 0.01, i),
                  ease: isLast ? 'easeInOut' : 'linear',
                }}
              >
                {text}
              </motion.p>
            )
          );
        })}
      </AnimatePresence>
      <motion.button
        className="mr-[650px]"
        onClick={onClickHandler}
        whileTap={{ scale: 0.9 }}
      >
        button
      </motion.button>
    </div>
  );
}

export default Roulette;
