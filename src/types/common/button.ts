export interface ButtonProps {
  content: string | JSX.Element;
  variant: string;
  onClick?: () => void;
  isDisabled?: boolean;
}

export interface ButtonColorProps {
  background: string;
  color: string;
  isDisabled?: string;
}

export interface ButtonColorsProps {
  [key: string]: ButtonColorProps;
}
