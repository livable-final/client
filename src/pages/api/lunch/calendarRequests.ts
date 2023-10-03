import { apiInstance } from '@/pages/api/axios';

// 달력

export const getReviewDetailsData = async (year: number, month: number) => {
  const res = await apiInstance.get(
    `/reviews/detail/members?year=${year}&month=${month}`,
  );
  return res.data;
};

// 리뷰 작성 - 외식
export const getRestaurants = async (keyword: string) => {
  const res = await apiInstance.get(`/restaurants/search?query=${keyword}`);
  return res.data;
};

export const getRestaurantMenu = async (restaurantId: number) => {
  const res = await apiInstance.get(`/restaurant/${restaurantId}/menus`);
  return res.data;
};

export const postRestaurantReview = async (body: FormData) => {
  const res = await apiInstance.post(`/reviews/restaurant`, body);
  return res;
};

// 리뷰작성 - 구내식당
export const postCafeteriaReview = async (body: FormData) => {
  const res = await apiInstance.post(`/reviews/cafeteria`, body);
  return res;
};

// 리뷰작성 - 도시락
export const postLunchBoxReview = async (body: FormData) => {
  const res = await apiInstance.post(`/reviews/lunch-box`, body);
  return res;
};

// 포인트
export const getPointLogs = async () => {
  const res = await apiInstance.get(`/points/logs/members`);
  return res.data;
};

export const postPoint = async () => {
  const res = await apiInstance.post(`/points/logs/members`);
  return res;
};
