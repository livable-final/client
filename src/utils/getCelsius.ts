const getCelsius = (fahrenheit: number) => {
  // 주어진 화씨를 섭씨로 변환
  return `${(fahrenheit - 273.15).toFixed(1)}˚c`;
};

export default getCelsius;
