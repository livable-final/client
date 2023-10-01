import { apiInstance } from '@/pages/api/axios';
import { Response } from '@/types/common/response';
import {
  GetInvitationCarouselData,
  GetVisitationInfoData,
} from '@/types/invitation/api';

// 초대장 근처 식당 정보
export const getInvitationCarousel = async (
  type?: number | string | Date,
): Promise<Response<GetInvitationCarouselData[]>> => {
  const response = await apiInstance.get(`restaurant?type=${type}`);
  return response.data;
};

// 방문증 기본 응답
export const getVisitationInfo = async (): Promise<
  Response<GetVisitationInfoData>
> => {
  const response = await apiInstance.get('visitation');
  return response.data;
};
