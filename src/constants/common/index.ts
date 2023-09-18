import theme from '@/styles/theme';
import { ButtonColorsProps } from '@/types/common/button';
import { CategoryColorsProps } from '@/types/common/category';
import { InputColorsProps, ErrorTypeProps } from '@/types/common/input';

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

// Input box 스타일
export const COMMON_INPUT_COLORS: InputColorsProps = {
  default: {
    border: `${theme.palette.greyscale.grey10}`,
    backgroundColor: `${theme.palette.white}`,
    color: `${theme.palette.input.unabled}`,
    font: `${theme.font.body.body1_400}`,
    isFocused: `${theme.palette.input.enabled}`,
    isError: `${theme.palette.state.warning}`,
  },
  disabled: {
    border: `${theme.palette.greyscale.grey10}`,
    backgroundColor: `${theme.palette.greyscale.grey5}`,
    color: `${theme.palette.input.unabled}`,
    font: `${theme.font.body.body1_400}`,
  },
};

// 에러메세지 내용은 추후 변경
export const COMMON_ERROR_MESSAGE: ErrorTypeProps = {
  test: '에러메세지',
  test2: '이럴수가메세지',
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
    direction: 'direction',
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

// 토글 버튼
export const COMMON_TOGGLE_TITLE = '종일';

// 모달 내부 버튼
export const COMMON_MODAL_BUTTONS = {
  confirm: '확인',
  cancel: '취소',
  send: '전송하기',
};
