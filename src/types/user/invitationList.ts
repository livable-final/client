export interface UserInvitationListItemProps {
  data: {
    invitationId: number;
    visitorName: string;
    visitorCount: number;
    purpose: string;
    officeName: string;
    startDate: string;
    startTime: string;
    endTime: string;
  };
}
export interface UserInvitationList {
  invitationId: number;
  visitorName: string;
  visitorCount: number;
  purpose: string;
  officeName: string;
  startDate: string;
  startTime: string;
  endTime: string;
}

export interface InvitationListStore {
  invitationList: UserInvitationList;
  setInvitationListeState: (item: UserInvitationList) => void;
}
