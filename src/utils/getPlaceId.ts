// obj : value가 포함된 객체
// value : 찾으려는 ID를 가지고 있는 값

const getPlaceId = (arr, value) => {
  const found = arr.find((obj) => obj.commonPlaceName === value);

  if (found) {
    return found.commonPlaceId;
  } else {
    return '찾으려는 ID가 없습니다.';
  }
};

export default getPlaceId;
