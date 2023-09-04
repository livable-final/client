import theme from '@/styles/theme';
import { ButtonColorsProps } from '@/types/common/button';

const COMMON_BUTTON_COLORS: ButtonColorsProps = {
  blue: {
    background: `${theme.palette.blue.blue60}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.blue.blue20}`,
  },
  grey: {
    background: `${theme.palette.greyscale.grey30}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.greyscale.grey10}`, // 추후 업데이트 필요
  },
  secondaryBlue: {
    background: `${theme.palette.white}`,
    color: `${theme.palette.blue.blue60}`,
  },
  secondaryGrey: {
    background: `${theme.palette.white}`,
    color: `${theme.palette.greyscale.grey40}`,
  },
};

export default COMMON_BUTTON_COLORS;
