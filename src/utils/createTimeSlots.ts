import CREATE_TEXTS from '@/constants/invitation/createTexts';
import createTimeSlot from '@/utils/createTimeSlot';
import parseDate from './parseDate';

// 09:00 ~ 18:00의 건물 운영 시간 타임 슬롯을 담는 유틸 함수 (우선 모두 disabled)
const createTimeSlots = (start: string, end: string) => {
  const { timeSelector } = CREATE_TEXTS;

  const timeSlots = [];
  const amTimeSlots = [];
  const pmTimeSlots = [];
  const openTime = new Date();
  const closeTime = new Date();
  const startTime = new Date();
  const endTime = new Date();

  // 09:00
  openTime.setHours(timeSelector.startHour, 0, 0, 0);
  // 18:00
  closeTime.setHours(timeSelector.endHour, 0, 0, 0);
  // 예약 가능한 첫 시간
  startTime.setHours(parseInt(parseDate(start), 10), 0, 0, 0);
  // 예약 가능한 마지막 시간
  endTime.setHours(parseInt(parseDate(end), 10), 0, 0, 0);

  while (openTime <= closeTime) {
    // 오전 슬롯 [{09:00, 'disabled'}, ... {11:30, 'abled'}]
    if (openTime.getHours() < 12) {
      const status =
        startTime <= openTime && openTime <= endTime ? 'abled' : 'disabled';
      amTimeSlots.push(createTimeSlot(openTime, status));
    } else {
      // 오후 슬롯 [{12:00, 'disabled'}, ... {17:30, 'abled'}]
      const status =
        startTime <= openTime && openTime <= endTime ? 'abled' : 'disabled';
      pmTimeSlots.push(createTimeSlot(openTime, status));
    }

    // 30분씩 증가
    openTime.setMinutes(openTime.getMinutes() + timeSelector.interval);
  }

  // [ [amTimeSlots], [pmTimeSlots] ]
  timeSlots.push(amTimeSlots, pmTimeSlots.slice(0, pmTimeSlots.length - 1));

  return timeSlots;
};

export default createTimeSlots;
