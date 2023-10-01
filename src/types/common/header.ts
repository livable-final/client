export interface HeaderProps {
  title: string;
  type?: string;
  text?: string;
  isBg?: boolean;
  isCloseOnly?: boolean;
  isSticky?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  onClickBack?: () => void;
}
