import theme from '@/styles/theme';
import { ButtonColorsProps } from '@/types/common/button';
import { CategoryColorsProps } from '@/types/common/category';
import { InputColorsProps } from '@/types/common/input';
import { TimeSelectorsColorProps } from '@/types/invitation/create';

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
  hoveredBlue: {
    border: `2px solid ${theme.palette.bluescale.blue30}`,
    backgroundColor: `${theme.palette.white}`,
    color: `${theme.palette.bluescale.blue30}`,
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
  search: {
    border: `${theme.palette.greyscale.grey20}`,
    backgroundColor: `${theme.palette.white}`,
    color: `${theme.palette.input.unabled}`,
    font: `${theme.font.body.body1_400}`,
  },
};

// 에러메세지
export const COMMON_ERROR_MESSAGE = {
  default: '오류가 발생했습니다',
  name: '이름 형식이 올바르지 않아요',
  contact: '전화번호 형식이 올바르지 않아요',
  noName: '이름을 입력해 주세요!',
  noContact: '전화번호를 입력해 주세요!',
  noNameContact: '이름과 전화번호를 입력해 주세요!',
  noPlace: '장소를 먼저 선택해 주세요!',
  noPage: '페이지를 찾을 수 없어요',
  noServer: '네트워크 연결상태를 확인해주세요',
  back: '이전으로 돌아가기',
  prepare: '기능 준비 중입니다.',
  copyFailed: '클립보드 복사 실패',
  copy: '클립보드 복사 완료',
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
    copy: 'copy',
    list: 'list',
    plusSmall: 'plusSmall',
    building: 'InfoBuilding',
    place: 'InfoPlace',
    host: 'InfoHost',
    parking: 'InfoParking',
  },
  home: {
    home: 'home',
    homeActive: 'homeActive',
    lunch: 'lunch',
    lunchActive: 'lunchActive',
    my: 'my',
    myActive: 'myActive',
    down: 'down',
    check: 'check',
    weather: {
      clearDay: 'clearDay',
      clearNight: 'clearNight',
      fewClouds: 'fewClouds',
      clouds: 'clouds',
      brokenClouds: 'brokenClouds',
      showerRain: 'showerRain',
      rain: 'rain',
      thunderStorm: 'thunderStorm',
      snow: 'snow',
      mist: 'mist',
    },
    service: {
      serviceCafeteria: 'serviceCafeteria',
      serviceCalendar: 'serviceCalendar',
      serviceInvitation: 'serviceInvitation',
      serviceParking: 'serviceParking',
      serviceReception: 'serviceReception',
      serviceTemp: 'serviceTemp',
    },
  },
  user: {
    coin: 'coin',
  },
  lunch: {
    smile: 'smile',
    confused: 'confused',
    thumbsUp: 'thumbsUp',
    popup: 'popup',
  },
  common: {
    close: 'close',
    error: 'error',
    exitSmall: 'exitSmall',
    reviewer: 'reviewer',
    exitMedium: 'exitMedium',
  },
};

// 초대장 생성 - 초대 목적 카테고리
export const COMMON_CATEGORIES = {
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
};

export const COMMON_USER_NAME = [
  '유희태',
  '이시우',
  '김진우',
  '김준희',
  '조은상',
];

// 토글 버튼
export const COMMON_TOGGLE_TITLE = '종일';

// 모달 내부 버튼
export const COMMON_MODAL_BUTTONS = {
  confirm: '확인',
  cancel: '취소',
  close: '닫기',
};

// Bottom Navigation Bar 상수
export const COMMON_BNB_CONSTANTS = {
  bnb: {
    home: { name: '홈', url: '/', default: 'home', active: 'homeActive' },
    lunch: {
      name: '오늘 점심',
      url: '/lunch',
      default: 'lunch',
      active: 'lunchActive',
    },
    user: { name: 'MY', url: '/user', default: 'my', active: 'myActive' },
  },
  indicator: {
    height: 34,
  },
};

export const COMMON_DATES = {
  daysOfWeek: [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ],
  months: [
    '1월',
    '2월',
    '3월',
    '4월',
    '5월',
    '6월',
    '7월',
    '8월',
    '9월',
    '10월',
    '11월',
    '12월',
  ],
};

// 공통 타임 셀렉터
export const COMMON_TIME_SELECTOR: TimeSelectorsColorProps = {
  abled: {
    status: 'abled',
    background: `${theme.palette.white}`,
    color: `${theme.palette.greyscale.grey40}`,
    border: `${theme.palette.greyscale.grey20}`,
  },
  disabled: {
    status: 'disabled',
    background: `${theme.palette.greyscale.grey10}`,
    color: `${theme.palette.greyscale.grey30}`,
  },
  enabled: {
    status: 'enabled',
    background: `${theme.palette.bluescale.blue10}`,
    color: `${theme.palette.bluescale.blue50}`,
    border: `${theme.palette.bluescale.blue20}`,
  },
};
