export interface InvitationInfoCategoryProps {
  value: string;
}

export interface InvitationCarouselProps {
  datas: {
    restaurantCategory: string;
    restaurantName: string;
    restaurantImageUrl: string;
    inBuilding: boolean;
    takenTime: number;
    floor: number;
    url: string;
  }[];
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
