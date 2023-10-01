//  방문 목적 한/영 변환 유틸 함수
const changeVisitPurpose = (purpose: string) => {
  if (purpose === 'meeting') {
    return '회의';
  }
  if (purpose === 'interview') {
    return '면접';
  }
  if (purpose === 'fixedTermWork') {
    return '면접';
  }
  if (purpose === 'seminar') {
    return '세미나';
  }
  if (purpose === 'as') {
    return 'AS/점검';
  }
  if (purpose === 'etc') {
    return '기타';
  }
  return `${purpose}`;
};

export default changeVisitPurpose;
