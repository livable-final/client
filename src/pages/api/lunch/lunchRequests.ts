import { Response } from '@/types/common/response';
import { apiInstance } from '@/pages/api/axios';
import {
  GetMenuReviewsProps,
  GetMenusProps,
  GetRankingProps,
} from '@/types/lunch/response';

export const getMenus = async (): Promise<Response<GetMenusProps[]>> => {
  const response = await apiInstance.get('menus');
  return response.data;
};

// 아직 데이터 없음. 사용 불가
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
