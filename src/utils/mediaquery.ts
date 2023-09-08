const breakpoints = [361, 481, 641];

// 기본 사이즈 : small view (280 ~ 360)
const mq = {
  md: `@media (min-width: ${breakpoints[0]}px)`, // 361 ~ 480
  lg: `@media (min-width: ${breakpoints[1]}px)`, // 481 ~ 640
  tab: `@media (min-width: ${breakpoints[2]}px)`, // 641 ~ 1024
};

export default mq;
