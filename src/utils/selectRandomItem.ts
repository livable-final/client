import { ROULETTE_CONSTANTS } from '@/constants/lunch';
import { GetMenusProps } from '@/types/lunch/response';
import getRandomNumber from '@/utils/getRandomNumber';

const selectRandomCategory = (response: GetMenusProps[]) => {
  const categoryIdx = getRandomNumber(response.length);
  return response[categoryIdx];
};

const selectRandomMenus = (category: GetMenusProps) => {
  const randomIdx = getRandomNumber(category.menus.length);
  return category.menus[randomIdx];
};

const findRandomMenus = (categoryName: string, response?: GetMenusProps[]) => {
  const result = response?.find((item) => item.categoryName === categoryName);
  if (result) {
    return selectRandomMenus(result);
  }
  return ROULETTE_CONSTANTS.error.response;
};

export { selectRandomCategory, selectRandomMenus, findRandomMenus };
