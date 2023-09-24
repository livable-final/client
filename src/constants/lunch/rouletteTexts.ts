export const ROULETTE_CONSTANTS = {
  time: {
    interval: 100,
    duration: {
      category: 3500,
      menu: 500,
      fixed: 3000,
    },
  },
  content: {
    button: '돌려돌려 돌림판',
  },
  error: {
    response: { menuId: 0, name: '결과가 없습니다.' },
  },
};

export const DUMMY_RESPONSE = [
  {
    categoryName: '한식',
    menus: [
      { menuId: 1, name: '국밥' },
      { menuId: 2, name: '뚝배기 불고기' },
      { menuId: 3, name: '제육볶음' },
      { menuId: 4, name: '백반' },
      { menuId: 5, name: '짜글이' },
    ],
  },
  {
    categoryName: '중식',
    menus: [
      { menuId: 6, name: '짜장면' },
      { menuId: 7, name: '짬뽕' },
      { menuId: 8, name: '마라탕' },
      { menuId: 9, name: '도삭면' },
      { menuId: 10, name: '울면' },
      { menuId: 24, name: '베이징덕' },
      { menuId: 25, name: '마라샹궈' },
    ],
  },
  {
    categoryName: '일식',
    menus: [
      { menuId: 11, name: '돈까스' },
      { menuId: 12, name: '텐동' },
      { menuId: 13, name: '초밥' },
      { menuId: 14, name: '라멘' },
      { menuId: 15, name: '규동' },
    ],
  },
  {
    categoryName: '분식',
    menus: [
      { menuId: 16, name: '떡볶이' },
      { menuId: 17, name: '김밥' },
      { menuId: 18, name: '쫄면' },
      { menuId: 19, name: '땡초우동' },
      { menuId: 20, name: '비빔당면' },
    ],
  },
  {
    categoryName: '아시안',
    menus: [
      { menuId: 21, name: '쌀국수' },
      { menuId: 22, name: '분짜' },
      { menuId: 23, name: '팟타이' },
      { menuId: 24, name: '나시고렝' },
      { menuId: 23, name: '딤섬' },
      { menuId: 26, name: '케밥' },
    ],
  },
];
