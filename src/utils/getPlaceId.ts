// arr : value가 포함된 객체로 이루어진 배열
// value : 찾으려는 ID를 가지고 있는 값

interface PlaceList {
  officeName?: string;
  commonPlaceName?: string;
  commonPlaceId?: number;
}

const getPlaceId = (arr: PlaceList[], value: string) => {
  const found = arr.find((obj) => obj.commonPlaceName === value);

  if (found) {
    return found.commonPlaceId;
  }

  return null;
};

export default getPlaceId;
