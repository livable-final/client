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
  visitors: InvitationContents[];
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
    content: string | number | VisitorInfo[],
  ) => void;
}

// ********** 초대상 뷰 ********** //
