// 서버에서 받아온 주소 데이터를 축약 가공하는 함수
const processAddress = (address: string) => {
  return address.split(' ').slice(2).join(' ');
};

export default processAddress;
