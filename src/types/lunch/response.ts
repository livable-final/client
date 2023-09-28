export interface GetRankingProps {
  buildingId: number;
}

export interface GetMenuReviewsProps {
  menuId: number;
  page: number;
}

export interface GetMenusProps {
  categoryName: string;
  menus: GetMenuProps[];
}

interface GetMenuProps {
  menuId: number;
  name: string;
}
