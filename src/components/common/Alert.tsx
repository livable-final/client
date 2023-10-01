import { css } from '@emotion/react';
import theme from '@/styles/theme';
import useAlertStore from '@/stores/useAlertStore';
import Icons from '@/components/common/Icons';

function Alert() {
  const { alertState, closeAlert } = useAlertStore();

  return (
    <div css={backgroundStyles}>
      <div css={modalContainerStyles}>
        <div css={modalTitleStyles}>
          <Icons icon="error" size="72" />
        </div>
        <div css={modalContentStyles}>{alertState.content}</div>
        <div css={btnWrapperStyles}>
          <button type="button" css={defaultBtnStyles} onClick={closeAlert}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

const backgroundStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 1;
`;

const modalContainerStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 90%;
  height: 96px;
  border-radius: 16px;
  background-color: ${theme.palette.state.danger};
  z-index: 2;
  justify-content: space-between;
`;

const modalTitleStyles = css`
  padding: 20px 0 20px;
  color: ${theme.palette.input.enabled};
  font: ${theme.font.subTitle.subTitle1_600};
  justify-content: flex-start;

  > svg {
  }
`;

const modalContentStyles = css`
  height: 34px;
  white-space: pre-wrap;
  justify-content: center;
  align-items: center;
  display: flex;
  color: ${theme.palette.white};
  font: ${theme.font.body.body1_400};
  line-height: 24px;
  width: 280px;
`;

const btnWrapperStyles = css`
  display: flex;
  height: 64px;
  font: ${theme.font.body.body1_500};
  height: 100%;
  line-height: 24px;
  width: 112px;
  justify-content: flex-end;
`;

const defaultBtnStyles = css`
  color: ${theme.palette.white};
  cursor: pointer;
  font-size: 24px;
  padding: 0 16px 48px 0;
`;

export default Alert;
