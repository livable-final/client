import { GetVisitationInfoData } from '@/types/invitation/api';

export interface InvitationInfoCategoryProps {
  value: string;
}
export interface InvitationInfoProps {
  value: string;
  data: GetVisitationInfoData;
}
export interface InvitationHostInfoProps {
  data: GetVisitationInfoData;
}
export interface InvitationInfoContainerProps {
  data: GetVisitationInfoData;
}

export interface InvitationCarouselProps {
  type: string;
}

export interface InvitationHostInfoItemProps {
  label: string;
  content: string;
  isContact?: boolean;
}

export interface InvitationBuildingInfoItemProps {
  item: string;
  content: string;
}

export interface InvitationBuildingTitleProps {
  title: string;
  address: string;
}

export interface InvitationBuildingPublicTransportItemProps {
  platform: string;
  location: string;
}

export interface InvitationQrInfoTextProps {
  textInfo: { place: string; date: string; time: string };
}
