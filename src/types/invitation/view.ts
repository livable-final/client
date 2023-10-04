import { GetVisitationInfoData } from '@/types/invitation/api';

export interface ThemelStoreTypes {
  themeState: ThemeStateTypes;
  setThemeState: (key: string, content: string | number) => void;
}

export interface ThemeStateTypes {
  clickCount: number;
  theme: string;
}

export interface InvitationInfoCategoryProps {
  value: string;
  icon: string;
}
export interface InvitationInfoProps {
  value: string;
  data: GetVisitationInfoData;
}
export interface InvitationInfoThemesProps {
  [key: string]: InvitationInfoThemeProps;
}
export interface InvitationInfoThemeProps {
  backgroundImage: string;
  backgroundImageBig: string;
  shadow: string;
  boxShadow: string;
  side: string;
  sideRight: string;
  icon: string;
}

export interface InvitationBuildingInfoProps {
  data: GetVisitationInfoData;
}

export interface InvitationOfficeInfoProps {
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
  data: GetVisitationInfoData;
}

export interface InvitationVisitTipProps {
  invitationTip: string;
}

export interface InvitationOfficeMapProps {
  placeType: string;
}

export interface InvitationOfficeLocationProps {
  invitationOfficeName: string;
  hostCompanyName: string;
}
