import { Top } from '@/assets/icons';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function ToTop() {
  const onClickHandler = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div css={wrapperStyles}>
      <button
        type="button"
        aria-label="toTopButton"
        css={topButtonStyles}
        onClick={onClickHandler}
      >
        <Top />
      </button>
    </div>
  );
}

const wrapperStyles = css`
  display: flex;
  justify-content: end;
  position: sticky;
  width: 100%;
  bottom: 16px;
`;

const topButtonStyles = css`
  border: 16px;
  width: 44px;
  height: 44px;
  border-radius: 100px;
  background-color: ${theme.palette.white};
  box-shadow:
    0px 0px 4px 0px rgba(0, 0, 0, 0.05),
    0px 2px 10px 0px rgba(0, 0, 0, 0.05);
`;

export default ToTop;
