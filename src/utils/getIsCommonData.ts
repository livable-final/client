import { PlaceList } from '@/types/invitation/create';

// 초대 장소에서 해당 값이 공용 공간인지 체크하는 유틸 함수
const getIsCommonData = (item: PlaceList) => {
  const key = Object.keys(item);

  if (key[0].includes('common')) {
    return true;
  }
  return false;
};
export default getIsCommonData;
