import theme from '@/styles/theme';
import { ButtonColorsProps } from '@/types/common/button';

const COMMON_BUTTON_COLORS: ButtonColorsProps = {
  blue: {
    background: `${theme.palette.blue.blue60}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.blue.blue20}`,
  },
  greyscale: {
    background: `${theme.palette.greyscale.grey30}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.greyscale.grey10}`, // 추후 업데이트 필요
  },
};

export default COMMON_BUTTON_COLORS;
