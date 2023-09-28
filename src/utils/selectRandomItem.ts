import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import { GetMenusData } from '@/types/lunch/api';
import getRandomNumber from '@/utils/getRandomNumber';

const selectRandomCategory = (response: GetMenusData[]) => {
  const categoryIdx = getRandomNumber(response.length);
  return response[categoryIdx];
};

const selectRandomMenus = (category: GetMenusData) => {
  const randomIdx = getRandomNumber(category.menus.length);
  return category.menus[randomIdx];
};

const findRandomMenus = (categoryName: string, response?: GetMenusData[]) => {
  const result = response?.find((item) => item.categoryName === categoryName);
  if (result) {
    return selectRandomMenus(result);
  }
  return LUNCH_ROULETTE_CONSTANTS.error.response;
};

export { selectRandomCategory, selectRandomMenus, findRandomMenus };
