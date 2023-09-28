import { apiInstance } from '@/pages/api/axios';
import { PostInvitationAPI } from '@/types/invitation/create';

// 초대 가능한 장소 리스트 응답
export const getInvitationPlaceList = async () => {
  const response = await apiInstance.get('/api/invitation/places/available');
  return response.data;
};

// 초대장 저장 (생성)
export const postInvitation = async (invitationData: PostInvitationAPI) => {
  const response = await apiInstance.post('/api/invitation', invitationData);
  return response.data;
};
