import {
  apiInstance,
  weatherInstance,
  WEATHER_API_KEY,
} from '@/pages/api/axios';
import { Response } from '@/types/common/response';
import { GetAccessCardData, GetHomeData, GetMyData } from '@/types/home/api';

const API_KEY = WEATHER_API_KEY;

// * GET 서울의 날씨를 얻어오는 API 함수
export const getWeather = async () => {
  const response = await weatherInstance.get(
    `weather?q=seoul&appid=${API_KEY}`,
  );
  return response.data;
};

// * GET 회원 출입카드 정보 응답
export const getAccessCard = async (): Promise<Response<GetAccessCardData>> => {
  const response = await apiInstance.get('access-card');
  return response.data;
};

// * GET 홈 정보 응답
export const getHome = async (): Promise<Response<GetHomeData>> => {
  const response = await apiInstance.get('home');
  return response.data;
};

// * GET 마이페이지 데이터 응답
export const getMyData = async (): Promise<Response<GetMyData>> => {
  const response = await apiInstance.get('members');
  return response.data;
};
