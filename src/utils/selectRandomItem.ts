import { ROULETTE_CONSTANTS } from '@/constants/lunch/rouletteTexts';
import { LunchCategories } from '@/types/lunch/menus';
import getRandomNumber from '@/utils/getRandomNumber';

const selectRandomCategory = (response: LunchCategories[]) => {
  const categoryIdx = getRandomNumber(response.length);
  return response[categoryIdx];
};

const selectRandomMenus = (category: LunchCategories) => {
  const randomIdx = getRandomNumber(category.menus.length);
  return category.menus[randomIdx];
};

const findRandomMenus = (response: LunchCategories[], categoryName: string) => {
  const result = response.find((item) => item.categoryName === categoryName);
  if (result) {
    return selectRandomMenus(result);
  }
  return ROULETTE_CONSTANTS.error.response;
};

export { selectRandomCategory, selectRandomMenus, findRandomMenus };
