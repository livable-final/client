export interface InputProps {
  variant: string;
  placeholder?: string;
  inputIcon?: boolean;
  textarea?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  errorType?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface InputColorProps {
  border: string;
  backgroundColor: string;
  color: string;
  font: string;
  isDisabled?: string;
  isFocused?: string;
  isError?: string;
}

export interface ErrorTypeProps {
  test: string;
  test2: string;
}

export interface InputColorsProps {
  [key: string]: InputColorProps;
}
