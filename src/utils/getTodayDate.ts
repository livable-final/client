import { COMMON_DATES } from '@/constants/common';

const getTodayDate = (today: Date) => {
  const { daysOfWeek, months } = COMMON_DATES;

  const dayOfMonth = today.getDate(); // 20 (20일)
  const dayOfWeek = daysOfWeek[today.getDay()]; // 일요일 ~ 토요일 배열 인덱싱 (수요일)
  const month = months[today.getMonth()]; // 9 (9월)

  // 9월 20일 수요일
  return `${month} ${dayOfMonth}일 ${dayOfWeek}`;
};

export default getTodayDate;
