// 서버로부터 내려오는 Date Data type이 ISO 8601 Date 형식일 때 사용되는 유틸 함수입니다.

// 기존 함수
// const parseDate = (dateProps: string) => {
//   // split을 통해 T 이후의 문자열 추출 ('2023-09-08T09:00:00Z') => ('09:00:00Z')
//   const [, time] = dateProps.split('T');

//   // split을 통해 : 이전, 이후의 문자열 추출 ('09:00:00Z') => ('09', '00')
//   const [hour, minute] = time.split(':');

//   // '09:00'
//   return `${hour}:${minute}`;
// };

// 선택한 값에 30분을 더한 시간 출력
const parseDate = (startTime: string) => {
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
