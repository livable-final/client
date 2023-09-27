import { apiInstance } from '@/pages/api/axios';
import {
  GetMenuReviewsProps,
  GetRankingProps,
} from '@/types/lunch/lunchRequests';

// * GET 가장 많이 선택한 메뉴 10위까지의 응답
export const getRanking = async ({ buildingId }: GetRankingProps) => {
  const response = await apiInstance.get(`menus/buildings/${buildingId}`);
  return response.data;
};

// * GET 특정 메뉴에 대한 리뷰 리스트 응답
export const getMenuReviews = async ({ menuId, page }: GetMenuReviewsProps) => {
  const response = await apiInstance.get(
    `reviews/menus/${menuId}?page=${page}&size=10`,
  );
  return response.data;
};
