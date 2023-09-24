import { apiInstance } from '@/pages/api/axios';

// * GET 가장 많이 선택한 메뉴 10위까지의 응답
const getRanking = async (buildingId: number) => {
  const response = await apiInstance.get(`menus/buildings/${buildingId}`);
  return response.data;
};

export default getRanking;
