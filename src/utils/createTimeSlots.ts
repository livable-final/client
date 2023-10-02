import CREATE_TEXTS from '@/constants/invitation/createTexts';
// import createTimeSlot from './createTimeSlot';

// 09:00 ~ 18:00의 건물 운영 시간 타임 슬롯을 담는 유틸 함수 (우선 모두 disabled)
const createTimeSlots = (commonTimes: string[]) => {
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
    if (openTime.getHours() < 12) {
      // Mon Oct 02 2023 15:18:25 GMT+0900 (한국 표준시)
      const time = String(openTime).split(' ')[4].slice(0, 5);
      // console.log(time);
      const status = commonTimes.includes(time) ? 'abled' : 'disabled';
      amTimeSlots.push({ time, status });
    } else {
      const time = String(openTime).split(' ')[4].slice(0, 5);
      // console.log(time);
      const status = commonTimes.includes(time) ? 'abled' : 'disabled';
      pmTimeSlots.push({ time, status });
    }

    // 30분씩 증가
    openTime.setMinutes(openTime.getMinutes() + timeSelector.interval);
  }

  // [ [amTimeSlots], [pmTimeSlots] ]
  timeSlots.push(amTimeSlots, pmTimeSlots.slice(0, pmTimeSlots.length - 1));

  return timeSlots;
};

export default createTimeSlots;
