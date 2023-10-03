export interface InputProps {
  variant: string;
  value: string;
  placeholder?: string;
  inputIcon?: boolean;
  textarea?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  errorType?: string;
  row?: number;
  maxLength?: number;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  name?: string;
  type?: string;
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
  [key: string]: string;
}

export interface InputColorsProps {
  [key: string]: InputColorProps;
}
