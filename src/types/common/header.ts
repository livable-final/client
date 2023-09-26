export interface HeaderProps {
  title: string;
  type?: string;
  text?: string;
  isBg?: boolean;
  isCloseOnly?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
