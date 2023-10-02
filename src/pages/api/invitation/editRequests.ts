import { apiInstance } from '@/pages/api/axios';
import { Response } from '@/types/common/response';
import {
  GetInvitationListData,
  GetInvitationListItemData,
  PatchInvitationContents,
} from '@/types/invitation/api';

// 초대 목록
export const getInvitationList = async (): Promise<
  Response<GetInvitationListData>
> => {
  const response = await apiInstance.get(`invitation`);
  return response.data;
};

// 초대장 상세
export const getInvitationListItem = async (
  id?: string | string[] | undefined,
): Promise<Response<GetInvitationListItemData>> => {
  const response = await apiInstance.get(`invitation/${id}`);
  return response.data;
};

// 초대 목록 삭제
export const getInvitationDeleteList = async (id?: number | string | Date) => {
  const response = await apiInstance.delete(`invitation/${id}`);
  return response;
};
// 초대장 수정
export const getInvitationEditList = async (
  invitationEditContents: PatchInvitationContents,
  id?: number | string | Date,
) => {
  const response = await apiInstance.patch(
    `invitation/${id}`,
    invitationEditContents,
  );
  return response;
};
