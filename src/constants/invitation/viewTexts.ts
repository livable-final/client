import { InvitationInfoThemesProps } from '@/types/invitation/view';
import theme from '@/styles/theme';

export const INVITATION_VEIW_INFO_TEXTS = {
  category: {
    main: '식스센스 초대장',
    building: '빌딩 소개',
    place: '초대 장소',
    host: '초대자 정보',
    parking: '주차 정보',
    code: '식스센스 출입증',
  },
  icon: {
    building: 'InfoBuilding',
    place: 'InfoPlace',
    host: 'InfoHost',
    parking: 'InfoParking',
  },
  host: {
    name: '이름',
    companyName: '회사',
    contact: '연락처',
    card: '현재 등록한 명함이 없습니다',
  },
  ticket: {
    headers: '임시출입증',
    zoom: '크게보기',
  },
};

// tikect theme 지정
export const INVITATION_VIEW_TICKET_THEME: InvitationInfoThemesProps = {
  default: {
    backgroundImage: `linear-gradient(
      108deg,
      #2563eb 13.2%,
      #457ffe 22.74%,
      #2563eb 37.05%,
      #5c8fff 56.65%,
      #2563eb 82.62%
    );`,
    backgroundImageBig: `linear-gradient(141deg, #2563EB 11.61%, #457FFE 22.34%, #2563EB 40.09%, #5C8FFF 71.66%, #2563EB 80.29%);`,
    shadow: `0px 25px 20px -15px #9bafff89;`,
    boxShadow: `linear-gradient(28deg, rgba(37, 99, 235, 0.30) 33.02%, rgba(37, 99, 235, 0.22) 70.11%, rgba(37, 99, 235, 0.26) 90.84%);`,
    side: `linear-gradient(to left, #c7d5ff, #ffffff, #ffffff);`,
    sideRight: `linear-gradient(to right, #9eb0ff72, #eef6ff11, #ffffff);`,
    icon: `${theme.palette.primary}`,
  },
  pink: {
    backgroundImage: `linear-gradient(105deg, #FFB2B2 1.1%, #EDB1BC 46.72%, #AED3FF 100.31%);`,
    backgroundImageBig: `linear-gradient(154deg, #FFB2B2 0.46%, #EDB1D5 63.2%, #AED3FF 104.55%);`,
    shadow: `0px 25px 20px -15px rgba(212, 191, 215, 0.5);`,
    boxShadow: `linear-gradient(
      284deg,
      rgba(78, 154, 253, 0.473) 3.48%,
      rgba(212, 191, 215, 0.5) 30.95%,
      rgba(254, 178, 178, 0.69) 59.89%
    );`,
    side: `linear-gradient(to left, #f5e0f2, #ffffff, #ffffff);`,
    sideRight: `linear-gradient(to right, #ffc4eba1, #eef6ff11, #ffffff);`,
    icon: `rgba(255, 178, 178, 1)`,
  },
  green: {
    backgroundImage: `linear-gradient(105deg, #6386D5 1.1%, #3CD1A4 52.33%, #F9DC77 88.25%, #FEFFCA 100.31%);`,
    backgroundImageBig: `linear-gradient(154deg, #6386D5 0.46%, #3CD1A4 54.21%, #F9DC77 91.9%, #FEFFCA 104.55%);`,
    shadow: `0px 25px 20px -15px rgba(99, 134, 213, 0.2);`,
    boxShadow: `linear-gradient(
    105deg,
    rgba(99, 134, 213, 0.5) 1.1%,
    rgba(60, 209, 164, 0.5) 52.33%,
    rgba(249, 220, 119, 0.5) 88.25%,
    rgba(254, 255, 202, 0.5) 100.31%
  );`,
    side: `linear-gradient(to left, #c0d7e7, #eef6ff, #ffffff);`,
    sideRight: `linear-gradient(to right, #3cccd16b, #eef6ff11, #ffffff);`,
    icon: `rgba(99, 134, 213, 1)`,
  },
  orange: {
    backgroundImage: `linear-gradient(140deg, #FFAC6F 0.63%, #FF9141 53.71%, #FF6B6B 90.91%, #FF9AB3 103.4%);`,
    backgroundImageBig: `linear-gradient(140deg, #FFAC6F 0.63%, #FF9141 53.71%, #FF6B6B 90.91%, #FF9AB3 103.4%);`,
    shadow: `0px 25px 20px -15px rgba(240, 145, 145, 0.5);`,
    boxShadow: `linear-gradient(
      105deg,
      rgba(240, 145, 145, 0.5) 1.1%,
      rgba(249, 188, 144, 0.5) 52.33%,
      rgba(255, 233, 157, 0.5) 88.25%,
      rgba(211, 255, 203, 0.5) 100.31%
    );`,
    side: `linear-gradient(to left, #f4d2cb, #ffffff, #ffffff);`,
    sideRight: `linear-gradient(to right, #ff976b60, #eef6ff11, #ffffff)`,
    icon: `rgba(255, 172, 111, 1)`,
  },
  skyblue: {
    backgroundImage: `linear-gradient(105deg, #91CEF0 1.1%, #90B1F9 52.33%, #B19EFF 90.17%, #FF9EE4 100.31%);`,
    backgroundImageBig: `linear-gradient(154deg, #91CEF0 0.46%, #90B1F9 54.21%, #B19EFF 93.91%, #FF9EE4 104.55%);`,
    shadow: `  box-shadow: 0px 25px 20px -15px #e8e2ff70;`,
    boxShadow: `linear-gradient(
      105deg,
      #91cef0 1.1%,
      #90b1f9 52.33%,
      #b19eff 90.17%,
      #ff9ee4 100.31%
    );`,
    side: `linear-gradient(to left, #d5dff6, #ffffff, #ffffff);`,
    sideRight: `linear-gradient(to right, #9eb0ff72, #eef6ff11, #ffffff);`,
    icon: `rgba(145, 206, 240, 1)`,
  },
};
// 근처 식당/카페 조회 상수
export const INVITATION_CAROUSEL_TEXTS = {
  restaurant: {
    title: '식당',
    subtitle: '점심메뉴 고민,',
    contents: '맛집',
  },
  cafe: {
    title: '카페',
    subtitle: '조금 빨리 도착하셨나요?',
  },
};
// 오피스 정보 상수(수정 예정)
export const INVITATION_VIEW_TEXTS = {
  header: {
    office: '오피스 정보',
  },
};
