export interface HeaderProps {
  title: string;
  type?: string;
  text?: string;
  isBg?: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
