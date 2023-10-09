import CREATE_TEXTS from '@/constants/invitation/createTexts';

// 09:00 ~ 18:00의 건물 운영 시간 타임 슬롯을 담는 유틸 함수 (우선 모두 disabled)
const createTimeSlots = (
  commonTimes: string[],
  commonPlaceId: number | null,
) => {
  // commonTimes
  // ['12:30:00', '15:00:00', '17:30:00']

  const { timeSelector } = CREATE_TEXTS;

  const timeSlots = [];
  const amTimeSlots = [];
  const pmTimeSlots = [];

  const openTime = new Date();
  const closeTime = new Date();

  // 09:00
  openTime.setHours(timeSelector.startHour, 0, 0, 0);
  // 18:00
  closeTime.setHours(timeSelector.endHour, 0, 0, 0);

  while (openTime <= closeTime) {
    // 오전일 경우
    if (openTime.getHours() < 12) {
      // 재직 중인 사무실을 선택하고, 공통 시간이 없을 경우에는 모든 타임 셀렉터 활성화
      if (commonPlaceId === null && commonTimes.length === 0) {
        const time = String(openTime).split(' ')[4].slice(0, 5);
        amTimeSlots.push({ time, status: 'abled' });
      } else {
        const time = String(openTime).split(' ')[4].slice(0, 5);
        const status = commonTimes.includes(time) ? 'abled' : 'disabled';
        amTimeSlots.push({ time, status });
      }
      // 오후일 경우
    } else if (openTime.getHours() >= 12) {
      if (commonPlaceId === null && commonTimes.length === 0) {
        // Mon Oct 02 2023 15:18:25 GMT+0900 (한국 표준시)
        const time = String(openTime).split(' ')[4].slice(0, 5);
        pmTimeSlots.push({ time, status: 'abled' });
      } else {
        const time = String(openTime).split(' ')[4].slice(0, 5);
        const status = commonTimes.includes(time) ? 'abled' : 'disabled';
        pmTimeSlots.push({ time, status });
      }
    }

    // openTime을 30분씩 증가
    openTime.setMinutes(openTime.getMinutes() + timeSelector.interval);
  }

  // [ [amTimeSlots], [pmTimeSlots] ]
  timeSlots.push(amTimeSlots, pmTimeSlots.slice(0, pmTimeSlots.length - 1));

  return timeSlots;
};

export default createTimeSlots;
