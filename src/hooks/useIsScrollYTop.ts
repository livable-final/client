import { useEffect, useState } from 'react';

const useIsScrollYTop = (target: number) => {
  const [isTop, setIsTop] = useState(true);
  const [scrollY, setScrollY] = useState(0);

  const onScrollChange = () => {
    // 스크롤이 최상단일 때
    if (window.scrollY === 0) {
      setIsTop(true);
      setScrollY(0);
    } else {
      setIsTop(false);
      setScrollY(target);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', onScrollChange);

    return () => {
      window.removeEventListener('scroll', onScrollChange);
    };
  });

  return { isTop, scrollY };
};

export default useIsScrollYTop;
