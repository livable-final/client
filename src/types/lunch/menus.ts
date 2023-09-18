export interface LunchCategories {
  categoryName: string;
  menus: LunchMenus[];
}

export interface LunchMenus {
  menuId: number;
  name: string;
}
