export interface InputProps {
  variant: string;
  placeholder?: string;
  isDisabled?: boolean;
  inputIcon?: boolean;
  isError?: boolean;
  errorType?: string | undefined;
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

export interface ErrorMessageProps {
  test: string;
  test2: string;
}

export interface InputColorsProps {
  [key: string]: InputColorProps;
}
