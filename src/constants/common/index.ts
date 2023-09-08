import theme from '@/styles/theme';
import { ButtonColorsProps } from '@/types/common/button';
import { CategoryColorsProps } from '@/types/common/category';

// 공통 버튼 색상
export const COMMON_BUTTON_COLORS: ButtonColorsProps = {
  blue: {
    background: `${theme.palette.bluescale.blue60}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.bluescale.blue20}`,
  },
  grey: {
    background: `${theme.palette.greyscale.grey30}`,
    color: `${theme.palette.white}`,
    isDisabled: `${theme.palette.greyscale.grey10}`, // 추후 업데이트 필요
  },
  secondaryBlue: {
    background: `${theme.palette.white}`,
    color: `${theme.palette.bluescale.blue60}`,
  },
  secondaryGrey: {
    background: `${theme.palette.white}`,
    color: `${theme.palette.greyscale.grey40}`,
  },
};

// 공통 카테고리 색상
export const COMMON_CATEGORY_COLORS: CategoryColorsProps = {
  blue: {
    border: `2px solid ${theme.palette.primary}`,
    backgroundColor: `${theme.palette.white}`,
    color: `${theme.palette.primary}`,
  },
  grey: {
    border: `2px solid ${theme.palette.greyscale.grey20}`,
    backgroundColor: `${theme.palette.white}`,
    color: `${theme.palette.greyscale.grey40}`,
  },
};

// Header
export const COMMON_HEADER = {
  typeCase: {
    close: 'close',
    text: 'text',
  },
};

// 아이콘 이름
export const COMMON_ICON_NAMES = {
  invitation: {
    meeting: 'meeting',
    interview: 'interview',
    fixedTermWork: 'fixedTermWork',
    seminar: 'seminar',
    as: 'as',
    etc: 'etc',
    info: 'info',
  },
  home: {
    // 추후 보강 예정
  },
};

// 카테고리 이름
export const COMMON_CATEGORIES = {
  invitation: {
    meeting: {
      icon: 'meeting',
      title: '회의',
    },
    interview: {
      icon: 'interview',
      title: '면접',
    },
    fixedTermWork: {
      icon: 'fixedTermWork',
      title: '기간 근무',
    },
    seminar: {
      icon: 'seminar',
      title: '세미나',
    },
    as: {
      icon: 'as',
      title: 'AS/점검',
    },
    etc: {
      icon: 'etc',
      title: '기타',
    },
  },
};
