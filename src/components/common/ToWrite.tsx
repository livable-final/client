import { Write } from '@/assets/icons';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

function ToWrite({ hasBnb }: { hasBnb?: boolean }) {
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/lunch/write');
  };
  return (
    <div css={wrapperStyles(hasBnb)}>
      <button
        type="button"
        aria-label="toWriteButton"
        css={topButtonStyles}
        onClick={onClickHandler}
      >
        <Write />
      </button>
    </div>
  );
}

const wrapperStyles = (hasBnb?: boolean) => css`
  display: flex;
  justify-content: end;
  position: sticky;
  width: 100%;
  bottom: ${hasBnb ? 'calc(64px + env(safe-area-inset-bottom))' : '16px'};
`;

const topButtonStyles = css`
  padding: 15px;
  width: 54px;
  height: 54px;
  border-radius: 100px;
  background-color: ${theme.palette.white};
  box-shadow:
    0px 0px 4px 0px rgba(0, 0, 0, 0.05),
    0px 2px 10px 0px rgba(0, 0, 0, 0.05);
`;

export default ToWrite;
