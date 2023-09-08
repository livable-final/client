export interface HeaderProps {
  title: string;
  type?: string;
  text?: string;
  onClickHandler: (event: React.MouseEvent<HTMLDivElement>) => void;
}
