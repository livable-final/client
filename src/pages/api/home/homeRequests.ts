import { weatherInstance, WEATHER_API_KEY } from '@/pages/api/axios';

const API_KEY = WEATHER_API_KEY;

// * GET 서울의 날씨를 얻어오는 API 함수
const getWeather = async () => {
  const response = await weatherInstance.get(
    `weather?q=seoul&appid=${API_KEY}`,
  );
  return response.data;
};

export default getWeather;
