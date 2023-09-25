// 화씨를 섭씨로 변환하는 함수
const getCelsius = (fahrenheit: number) => {
  return `${(fahrenheit - 273.15).toFixed(1)}˚c`;
};

export default getCelsius;
