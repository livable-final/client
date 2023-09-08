const breakpoints = [360, 480, 640];

// 기본 사이즈 : small view (280 ~ 359)
const mq = {
  md: `@media (min-width: ${breakpoints[0]}px)`, // 360 ~ 479
  lg: `@media (min-width: ${breakpoints[1]}px)`, // 480 ~ 639
  tab: `@media (min-width: ${breakpoints[2]}px)`, // 640 ~ 1024
};

export default mq;
