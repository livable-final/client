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

// 예약 가능한 시간 리스트
export interface GetInvitationTimeListContents {
  commonPlaceId: number | null;
  startDate: string;
  endDate: string;
}

export interface GetInvitationTimeListData {
  date: string;
  availableTimes: string[];
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
  clearCreateContents: () => void;
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
  placeType: string;
}
// 주변 식당 응답 데이터
export interface GetInvitationCarouselData {
  restaurantCategory: string;
  restaurantName: string;
  restaurantImageUrl: string;
  inBuilding: boolean;
  takenTime: number;
  floor: number;
  url: string;
}
// 큐알 발급 응답 데이터
export interface GetVisitationQrData {
  qr: string;
}

// ********** 초대상 수정 ********** //

// 초대 목록 조회
export interface InvitationListItem {
  invitationId: number;
  visitorName: string;
  visitorCount: number;
  purpose: string;
  officeName: string;
  startDate: string;
  startTime: string;
  endTime: string;
}

export interface GetInvitationListData {
  [date: string]: [
    {
      invitationId: number;
      visitorName: string;
      visitorCount: number;
      purpose: string;
      officeName: string;
      startDate: string;
      startTime: string;
      endTime: string;
    },
  ];
}

// 초대장 상세 조회
export interface GetInvitationListItemData {
  commonPlaceId: null;
  description: string;
  endDate: string;
  endTime: string;
  officeName: string;
  purpose: string;
  startDate: string;
  startTime: string;
  visitors: [InvitationListItemVisitor];
}

// 초대잘 상세 방문객 정보
export interface InvitationListItemVisitor {
  visitorId: number;
  name: string;
  contact: string;
}

// 초대장 수정 폼 스토어
export interface PatchInvitationContents {
  commonPlaceId?: number | null;
  description?: string;
  startDate?: Date | string;
  endDate?: Date | string;
  visitors?: VisitorInfo[];
}
