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
