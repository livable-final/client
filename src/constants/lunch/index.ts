export const CALENDAR_CONTENT = {
  title: {
    main: '오늘 점심',
    review: '리뷰 작성',
    search: '식당 검색',
    photoReview: '리뷰 작성 완료',
    point: '내 포인트',
  },
  subTitle: {
    calendar: `님의 점심 달력이에요`,
    mealStyle: '오늘의 식사 스타일은 무엇인가요?',
    menu: '오늘 먹은 메뉴를 선택해주세요',
    todayLunch: '오늘 점심은 어떠셨나요?',
    recentSearches: '최근검색',
    searchResults: '검색결과',
    review: '후기 작성',
    bottomSheet: '사진을 등록하면 포인트를 받을 수 있어요',
    photoReview: '10포인트가 적립되었어요',
    point: '월에 받은 포인트',
  },
  category: {
    eatOut: {
      text: '외식',
      placeholder:
        '가격, 이동 시간, 분위기 등 공유하고 싶은 내용을 입력해주세요.',
      subCategory: {
        amount: '음식의 양',
        speed: '서빙속도',
        service: '서비스',
      },
    },
    cafeteria: {
      text: '구내식당',
      placeholder: '오늘 드신 점심 식단을 어떠셨나요?',
    },
    lunchBox: {
      text: '도시락',
      placeholder:
        '도시락 레시피, 도시락 싸는 꿀팁 등 공유하고 싶은 내용을 입력해주세요.',
    },
  },
  button: {
    button1: {
      text: `오늘 점심은 무엇을 드셨나요?
      메뉴를 등록해보세요`,
      icon: '',
    },
    button2: {
      text: '오늘 메뉴를 등록하였어요\n내가 받은 포인트를 확인할 수 있어요',
      icon: '',
    },
    button3: {
      text: '다음',
    },
    button4: {
      text1: '추가',
      text2: '작성완료',
      text3: '확인',
    },
    button5: {
      good: '맛있오',
      bad: '맛없오',
    },
    button6: {
      text: '만족',
    },
    button7: {
      text: '다음부터 이 메세지 보지 않기',
    },
    button8: {
      text1: '작성 완료하기',
      text2: '사진 등록하기',
    },
    button9: {
      text: '내 포인트 지도 보기',
    },
  },
};

export const CALENDAR_CASE = {
  subTitle: {
    type1: 'title',
    type2: 'subTitle',
  },
  listItem: {
    type1: 'searched',
    type2: 'searching',
    type3: 'menu',
  },
  review: {
    type1: 'recent',
    type2: 'more',
  },
  roulette: {
    type: 'roulette',
  },
};

export const LUNCH_MAIN_CONSTANTS = {
  main: {
    ranking: {
      title: '지난주 점심 메뉴 TOP 10',
      heights: [32, 47, 25],
    },
    reviews: {
      title: '최근 테라타워 입주자들의 리뷰',
    },
    detail: {
      title: '의 더 많은 리뷰',
    },
  },
  review: {
    title: '리뷰',
    photoWidth: 115,
    photoHeight: 90,
  },
  ranking: {
    title: '랭킹별 리뷰',
    rank: '위',
    count: '명이 선택했어요',
    palette: [
      '#FFC46D',
      '#B0B6EE',
      '#D58167',
      '#C3C6CC',
      '#C3C6CC',
      '#C3C6CC',
      '#C3C6CC',
      '#C3C6CC',
      '#C3C6CC',
      '#C3C6CC',
    ],
    photoWidth: 80,
    photoHeight: 80,
  },
};

// 오늘 점심 룰렛 상수
export const LUNCH_ROULETTE_CONSTANTS = {
  time: {
    interval: 100,
    duration: {
      category: 3500,
      menu: 500,
      fixed: 3000,
    },
  },
  title: { roulette: '점심룰렛', review: '맛집을 알려드릴게요!' },
  error: {
    response: { menuId: 0, name: '결과가 없습니다.' },
  },
};
