const breakpoints = [280, 360, 480, 670];

const mq = {
  sm: `@media (max-width: ${breakpoints[0]}px)`,
  md: `@media (max-width: ${breakpoints[1]}px)`,
  lg: `@media (max-width: ${breakpoints[2]}px)`,
  tab: `@media (max-width: ${breakpoints[3]}px)`,
};

export default mq;
