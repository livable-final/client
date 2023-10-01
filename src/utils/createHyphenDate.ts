// YY-MM-DD 형식으로 변환하는 유틸 함수
const createHyphenDate = (currentDate: Date) => {
  const year = currentDate.getFullYear();
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');

  return `${year}-${month}-${day}`;
};

export default createHyphenDate;
