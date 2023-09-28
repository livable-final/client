export interface AddVisitorName {
  visitorId: number;
  name: string;
  contact: string;
}
export interface NewVisitorsList {
  name: string;
  contact: string;
}
export interface InvitationAddVisitorListProps {
  visitorsList?: NewVisitorsList[];
}
