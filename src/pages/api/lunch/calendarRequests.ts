import { apiInstance } from '@/pages/api/axios';

// 달력
export const getReviewData = async (year: string, month: string) => {
  const res = await apiInstance.get(
    `/api/reviews/members?year=${year}&month=${month}`,
  );
  return res.data;
};

// 리뷰 작성 - 외식
export const getRestaurants = async (keyword: string) => {
  const res = await apiInstance.get(`/api/restaurants/search?query=${keyword}`);
  return res.data;
};

export const getRestaurantMenu = async (restaurantId: number) => {
  const res = await apiInstance.get(`/api/restaurant/${restaurantId}/menus`);
  return res.data;
};

export const postRestaurantReview = async (body: FormData) => {
  const res = await apiInstance.post(`/api/reviews/restaurant`, body);
  return res;
};

// 리뷰작성 - 구내식당
export const postCafeteriaReview = async (body: FormData) => {
  const res = await apiInstance.post(`/api/reviews/cafeteria`, body);
  return res;
};

// 리뷰작성 - 도시락
export const postLunchBoxReview = async (body: FormData) => {
  const res = await apiInstance.post(`/api/reviews/lunch-box`, body);
  return res;
};

// 포인트
export const getPointLogs = async () => {
  const res = await apiInstance.get(`/api/points/logs/members`);
  return res.data;
};

export const postPoint = async () => {
  const res = await apiInstance.post(`/api/points/logs/members`);
  return res;
};
