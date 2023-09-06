import theme from '@/styles/theme';
import { Global, css } from '@emotion/react';

function GlobalStyle() {
  return <Global styles={globals} />;
}

const globals = css`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  input {
    width: 100%;
    min-width: 280px;
    max-width: 1024px;
    height: 54px;
    padding-left: 16px;
    border: 1px solid ${theme.palette.greyscale.grey30};
    border-radius: 8px;
    color: ${theme.palette.greyscale.grey60};
    &::placeholder {
      color: ${theme.palette.greyscale.grey40};
    }
    &:focus {
      outline: none;
      color: ${theme.palette.greyscale.grey90};
    }
  }
`;

export default GlobalStyle;
