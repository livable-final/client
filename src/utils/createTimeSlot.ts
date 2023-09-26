// [10:00, 'disabled'] 와 같은 타임슬롯을 만드는 유틸 함수
const createTimeSlot = (time: Date, status: string) => {
  return {
    time: time.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
    }),
    status,
  };
};

export default createTimeSlot;
