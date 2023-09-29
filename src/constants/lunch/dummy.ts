// 임시용
export const DUMMY_DATA = [
  {
    restaurantName: '새마을식당',
    restaurantId: '1',
    memberName: '백종원',
    profileImageUrl: '/defaultImage.jpg',
    reviewId: 1,
    reviewTaste: 'GOOD',
    reviewAmount: 'GOOD',
    reviewService: 'GOOD',
    reviewSpeed: 'GOOD',
    reviewCreatedAt: '2023-09-23T09:20:00',
    reviewImageUrl: [
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
    ],
    reviewDescription: `매일 가는 단골 식당이에요 부대찌개 말고도 다른 메뉴들도 맛있어요! 사장님도 친절하십니다 ㅎㅎ`,
  },
  {
    restaurantName: '노브랜드 버거',
    restaurantId: '2',
    memberName: '정용진',
    profileImageUrl: '/defaultImage.jpg',
    reviewId: 2,
    reviewTaste: 'BAD',
    reviewAmount: 'BAD',
    reviewService: 'GOOD',
    reviewSpeed: 'BAD',
    reviewCreatedAt: '2023-09-22T08:12:00',
    reviewImageUrl: [
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
    ],
    reviewDescription:
      '평소랑 오늘은 다른맛이긴 했어요. 버거 패티가 바뀌었나..그 전이 더 맛있었는데 다음에도 오늘과 같으면 안갈 것 같아요.',
  },
  {
    restaurantName: '집게리아',
    restaurantId: '3',
    memberName: '집게사장',
    profileImageUrl: '/defaultImage.jpg',
    reviewId: 3,
    reviewTaste: 'BAD',
    reviewAmount: 'BAD',
    reviewService: 'GOOD',
    reviewSpeed: 'BAD',
    reviewCreatedAt: '2023-09-13T10:21:00',
    reviewImageUrl: [
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
    ],
    reviewDescription:
      '카운터에 있는 직원이 너무 불친절했어요. 특히 사장님은 직원을 이봐 징징이라고 부르시는 모습에 버거맛이 뚝 떨어졌어요.',
  },
  {
    restaurantName: '플랑크톤 상점',
    restaurantId: '4',
    memberName: '플랑크톤',
    profileImageUrl: '/defaultImage.jpg',
    reviewId: 4,
    reviewTaste: 'GOOD',
    reviewAmount: 'GOOD',
    reviewService: 'BAD',
    reviewSpeed: 'GOOD',
    reviewCreatedAt: '2023-09-12T09:10:00',
    reviewImageUrl: [
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
    ],
    reviewDescription:
      '여기 집게리아 게살버거보다 맛있네요. 광고같아 보이지만 광고 맞습니다.',
  },
];

export const DUMMMY_MENU_TOP_TEN = [
  {
    date: '2023-09-11',
    count: 194,
    rank: 1,
    menuId: 36,
    menuName: '부대찌개',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 152,
    rank: 2,
    menuId: 12,
    menuName: '제육볶음',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 121,
    rank: 3,
    menuId: 74,
    menuName: '돈까스',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 95,
    rank: 4,
    menuId: 14,
    menuName: '메밀국수',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 95,
    rank: 5,
    menuId: 14,
    menuName: '치킨',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 95,
    rank: 6,
    menuId: 14,
    menuName: '피자',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 95,
    rank: 7,
    menuId: 14,
    menuName: '햄버거',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 95,
    rank: 8,
    menuId: 14,
    menuName: '양갈비',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 95,
    rank: 9,
    menuId: 14,
    menuName: '소갈비',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
  {
    date: '2023-09-11',
    count: 95,
    rank: 10,
    menuId: 14,
    menuName: '돼지갈비',
    menuImage:
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
  },
];

export const DUMMY_RESPONSE = {
  data: [
    {
      restaurantId: 1,
      name: '현수네 기사식당',
      tastePercentage: 34,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '테라타워 11층',
      floor: 11,
      isBuilding: true,
      estimatedTime: 0,
      review: '맛나용!',
    },
    {
      restaurantId: 2,
      name: '현수네 백반집',
      tastePercentage: 55,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '테라타워 10층',
      floor: 10,
      isBuilding: true,
      estimatedTime: 0,
      review: '맛나용!',
    },
    {
      restaurantId: 3,
      name: '현수네 한식왕',
      tastePercentage: 77,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '마미상가 3층',
      floor: 0,
      isBuilding: false,
      estimatedTime: 3,
      review: '맛나용!',
    },
    {
      restaurantId: 4,
      name: '현수네 기사식당',
      tastePercentage: 34,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '테라타워 11층',
      floor: 11,
      isBuilding: true,
      estimatedTime: 0,
      review: '맛나용!',
    },
    {
      restaurantId: 5,
      name: '현수네 백반집',
      tastePercentage: 55,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '테라타워 10층',
      floor: 10,
      isBuilding: true,
      estimatedTime: 0,
      review: '맛나용!',
    },
    {
      restaurantId: 6,
      name: '현수네 한식왕',
      tastePercentage: 77,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '마미상가 지하 1층',
      floor: 0,
      isBuilding: false,
      estimatedTime: 3,
      review: '맛나용!',
    },
    {
      restaurantId: 7,
      name: '현수네 기사식당',
      tastePercentage: 34,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '테라타워 11층',
      floor: 11,
      isBuilding: true,
      estimatedTime: 0,
      review: '맛나용!',
    },
    {
      restaurantId: 8,
      name: '현수네 백반집',
      tastePercentage: 55,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '테라타워 10층',
      floor: 10,
      isBuilding: true,
      estimatedTime: 0,
      review: '맛나용!',
    },
    {
      restaurantId: 9,
      name: '현수네 한식왕',
      tastePercentage: 77,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '마미상가 3층',
      floor: 0,
      isBuilding: false,
      estimatedTime: 3,
      review: '맛나용!',
    },
    {
      restaurantId: 10,
      name: '현수네 한식왕',
      tastePercentage: 77,
      representativeImageUrl:
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
      address: '마미상가 3층',
      floor: 0,
      isBuilding: false,
      estimatedTime: 3,
      review: '맛나용!',
    },
  ],
};
