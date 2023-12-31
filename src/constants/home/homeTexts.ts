export const HOME_TEXTS = {
  title: {
    lunch: '오늘 점심',
    user: '마이페이지',
    login: '로그인',
  },
  toCalendar: {
    title: '오늘 점심 달력 작성하기',
    subtitle: '오늘 점심 달력 작성하기',
    body: '오늘 먹은 점심을 공유해주세요',
    icon: 'Calendar',
    href: '/lunch/calendar',
  },
  toRoulette: {
    title: '메뉴 추천! 점심 룰렛 돌리기',
    subtitle: '메뉴 추천! 점심 룰렛',
    body: '오늘 뭐 먹지?',
    icon: 'Roulette',
    href: '/lunch/roulette',
  },
  bulletin: [
    { title: '공지', content: '엘리베이터 정기 점검 안내(10/10)' },
    { title: '이벤트', content: '테라타워 커피 무료 나눔 이벤트(10/6)' },
  ],
  cafeteria: {
    title: '구내식당',
    type: ['조식', '중식', '석식'],
    menu: [
      '현미밥, 부대찌개, 묵은지닭살볶음탕, 춘권튀김, 열무김치',
      '돈까스, 비빔막국수, 쌀밥, 깍둑단무지무침, 무알콜뱅쇼',
      '마라로제찜닭, 팽이장국, 납작만두, 해초샐러드, 쌀밥, 깍두기, 요구르트',
    ],
  },
  service: {
    title: '오피스너 서비스',
    menu: [
      {
        icon: 'serviceReception',
        title: '불편 접수',
        href: '',
      },
      {
        icon: 'serviceCalendar',
        title: '시설 예약',
        href: '',
      },
      {
        icon: 'serviceInvitation',
        title: '방문자 초대',
        href: '/invitation/create',
      },
      { icon: 'serviceTemp', title: '온도 조절', href: '' },
      { icon: 'serviceCafeteria', title: '구내 식당', href: '' },
      { icon: 'serviceParking', title: '주차 정산', href: '' },
    ],
  },
  reception: {
    title: '나의 불편 접수',
    progress: {
      state: ['접수중', '접수완료', '해결'],
      quantity: [1, 0, 3],
    },
  },
  servey: {
    title: '새로운 설문이 등록됐어요',
    body: '우리 빌딩 설문조사 참여하기',
  },
  banner: {},
};

export const DUMMY_RESPONSE = {
  buildingId: 1,
  buildingName: '테라타워',
  companyName: '식스센스',
  hasCafeteria: true,
};
