export interface MenuTopTen {
  date: string;
  count: number;
  rank: number;
  menuId: number;
  menuName: string;
  menuImage: string;
  color?: string;
}

export interface MenuTopTenProps {
  data: MenuTopTen[];
}
