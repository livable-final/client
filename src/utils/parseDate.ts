// 서버로부터 내려오는 Date Data type이 ISO 8601 Date 형식일 때 사용되는 유틸 함수입니다.
const parseDate = (dateProps: string) => {
  // split을 통해 T 이후의 문자열 추출 ('2023-09-08T09:00:00Z') => ('09:00:00Z')
  const [, time] = dateProps.split('T');

  // split을 통해 : 이전, 이후의 문자열 추출 ('09:00:00Z') => ('09', '00')
  const [hour, minute] = time.split(':');

  // '09:00'
  return `${hour}:${minute}`;
};

export default parseDate;
