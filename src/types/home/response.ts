export interface GetBuildingProps {
  buildingName: string;
  companyName: string;
  employeeName: string;
  employeeNumber: string;
  floor: string;
  roomNumber: string;
}

export interface GetHomeProps {
  buildingId: number;
  buildingName: string;
  hasCafeteria: boolean;
}

export interface GetMyDataProps {
  memberName: string;
  companyName: string;
  pointValance: number;
}
