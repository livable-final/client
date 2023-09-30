import { apiInstance } from '@/pages/api/axios';
import { Response } from '@/types/common/response';
import {
  PostInvitationContents,
  GetInvitationPlaceData,
} from '@/types/invitation/api';

// 초대 가능한 장소 리스트 응답
export const getInvitationPlaceList = async (): Promise<
  Response<GetInvitationPlaceData>
> => {
  const response = await apiInstance.get('invitation/places/available');
  return response.data;
};

// 예약 가능한 시간 리스트 응답
export const getInvitationTimeList = async (
  commonPlaceId: number,
  date: string, // yyyy-MM-dd
) => {
  const response = await apiInstance.get(
    `reservation/places/${commonPlaceId}?date=${date}`,
  );
  return response.data;
};

// 초대장 저장 (생성)
export const postInvitation = async (
  invitationContents: PostInvitationContents,
) => {
  const response = await apiInstance.post('invitation', invitationContents);
  return response.data;
};
