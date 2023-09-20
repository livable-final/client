export interface InvitationInfoCategoryProps {
  value: string;
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
