// 출입장 카드 정보
export interface GetAccessCardData {
  buildingName: string;
  companyName: string;
  employeeName: string;
  employeeNumber: string;
  floor: string;
  roomNumber: string;
}

// 홈 정보
export interface GetHomeData {
  buildingId: number;
  buildingName: string;
  hasCafeteria: boolean;
}

// 유저 데이터
export interface GetMyData {
  memberName: string;
  companyName: string;
  pointValance: number;
}
