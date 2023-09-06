export interface CategoryProps {
  icon: string;
  title: string;
  variant: string;
}

export interface CategoryColorProps {
  border: string;
  backgroundColor: string;
  color: string;
}

export interface CategoryColorsProps {
  [key: string]: CategoryColorProps;
}
