import { Error } from '@/assets/icons';
import Button from '@/components/common/Button';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';

function ErrorPage() {
  const router = useRouter();
  const { noPage, noServer, back } = COMMON_ERROR_MESSAGE;

  const onClickHandler = () => {
    router.back();
  };

  return (
    <>
      <div css={containerStyles}>
        <div css={wrapperStyles}>
          <Error />
          <div css={spanStyles}>
            <span>{noPage}</span>
            <span>{noServer}</span>
          </div>
        </div>
      </div>
      <div css={buttonStyles}>
        <Button content={back} variant="blue" onClick={onClickHandler} />
      </div>
    </>
  );
}

const containerStyles = css`
  display: flex;
  height: 80vh;
  min-width: 280px;
  max-width: 1024px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const spanStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  > span {
    text-align: center;
  }

  > span:first-of-type {
    font: ${theme.font.title.title2_600};
    color: ${theme.palette.greyscale.grey60};
    line-height: 29px;
  }

  > span:last-of-type {
    font: ${theme.font.body.body1_400};
    color: ${theme.palette.greyscale.grey50};
    line-height: 24px;
  }
`;

const buttonStyles = css`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  padding: 0 16px;
  left: 0;
  bottom: calc(20px + env(safe-area-inset-bottom));
`;

export default ErrorPage;
