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
      <button type="button" css={topButtonStyles} onClick={onClickHandler}>
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
  bottom: ${hasBnb ? '64px' : '16px'};
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

export default ToWrite;
