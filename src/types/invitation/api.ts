// ********** 초대상 생성 ********** //

// 초대 가능한 장소 리스트
export interface GetInvitationPlaceData {
  offices: OfficeData[];
  commonPlaces: CommonPlaceData[];
}

export interface OfficeData {
  officeName: string;
}

export interface CommonPlaceData {
  commonPlaceId: number;
  commonPlaceName: string;
}

// 초대장 저장(생성)
export interface PostInvitationContents {
  purpose: string;
  commonPlaceId: number | null;
  officeName: string;
  description: string;
  startDate: string;
  endDate: string;
  visitors: VisitorInfo[];
}

export interface InvitationContents {
  [key: string]: string;
}

export interface VisitorInfo {
  name: string;
  contact: string;
}

export interface InvitationCreateStore {
  createContents: PostInvitationContents;
  setCreateContents: (
    key: string,
    content: string | number | null | undefined | VisitorInfo[],
  ) => void;
}

// ********** 초대상 뷰 ********** //
export interface GetVisitationInfoData {
  invitationStartDate: string;
  invitationStartTime: string;
  invitationEndDate: string;
  invitationEndTime: string;
  invitationBuildingName: string;
  invitationOfficeName: string;
  buildingRepresentativeImageUrl: string;
  buildingName: string;
  buildingAddress: string;
  buildingParkingCostInformation: string;
  buildingScale: string;
  invitationTip: string;
  hostName: string;
  hostCompanyName: string;
  hostContact: string;
  hostBusinessCardImageUrl: string;
}
export interface GetInvitationCarouselData {
  restaurantCategory: string;
  restaurantName: string;
  restaurantImageUrl: string;
  inBuilding: boolean;
  takenTime: number;
  floor: number;
  url: string;
}
