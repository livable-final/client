export interface AddVisitorName {
  visitorId: number;
  name: string;
  contact: string;
}
export interface NewVisitorsList {
  name: string;
  contact: string;
}
export interface UserInvitationListEditProps {
  id: string | null;
}
export interface InvitationEditProps {
  id: string | string[] | undefined;
}
export interface InvitationAddVisitorListProps {
  // 초대장 수정페이지에서 초대자 추가 바텀시트에 접근할때 필요
  isEdit?: boolean;
  // 초대장 생성에서 기존 등록해서 state에 담았던 값들 가져오는 props  추후 api 연동 후 수정요망
  visitorsList?: NewVisitorsList[];
  setVisitorList?: React.Dispatch<React.SetStateAction<NewVisitorsList[]>>;
}
