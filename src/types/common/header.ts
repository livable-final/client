export interface HeaderProps {
  title: string;
  type?: string;
  text?: string;
  onClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}
