import { OfficeData, CommonPlaceData } from '@/types/invitation/api';

export interface RadioBtnProps {
  list: (OfficeData | CommonPlaceData)[];
  name: string;
  placeholder: string;
}
