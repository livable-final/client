// 선택한 값에 30분을 더한 시간 출력 함수
const parseDate = (startTime: string) => {
  // startTime: "00:00"

  // 시간 데이터가 안 들어올 경우
  if (!startTime) {
    return '';
  }

  const [hour, minute] = startTime.split(':');

  const hourInt = parseInt(hour, 10);
  const minuteInt = parseInt(minute, 10);

  const newMinute = (minuteInt + 30) % 60;
  const newHour = (hourInt + Math.floor((minuteInt + 30) / 60)) % 24;

  const endTime = `${newHour.toString().padStart(2, '0')}:${newMinute
    .toString()
    .padStart(2, '0')}`;

  return endTime;
};

export default parseDate;
