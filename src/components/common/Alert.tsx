import { css } from '@emotion/react';
import theme from '@/styles/theme';
import useAlertStore from '@/stores/useAlertStore';
import Icons from '@/components/common/Icons';

function Alert() {
  const { alertState, closeAlert } = useAlertStore();

  return (
    <div css={backgroundStyles}>
      <div css={alertContainerStyles}>
        <div css={contentsWrapperStyles}>
          <div css={alertTitleStyles}>
            {alertState.title ? (
              alertState.title
            ) : (
              <Icons icon="error" size="72" />
            )}
          </div>
          <div css={alertContentStyles}>{alertState.content}</div>
          <button
            type="button"
            css={defaultBtnStyles}
            onClick={() => closeAlert(alertState.onClick)}
          >
            <Icons icon="exitSmall" />
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
  z-index: 10;
`;

const alertContainerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  max-width: 500px;
  height: 96px;
  border-radius: 16px;
  background-color: ${theme.palette.state.danger};
  z-index: 11;
  padding: 0 16px;
  gap: 8px;
`;

const contentsWrapperStyles = css`
  display: flex;
  gap: 10px;
  width: 100%;
  height: 100%;
`;

const alertTitleStyles = css`
  width: 20px;
  display: flex;
  align-items: center;
  color: ${theme.palette.input.enabled};
  font: ${theme.font.alert.pretendard};
`;

const alertContentStyles = css`
  display: flex;
  align-items: center;
  width: 100%;
  color: ${theme.palette.greyscale.grey10};
  font: ${theme.font.alert.pretendard};
  white-space: pre-wrap;
`;

const defaultBtnStyles = css`
  top: 12px;
  right: 12px;
  display: flex;
  align-items: flex-start;
  color: ${theme.palette.white};
  cursor: pointer;
  padding-top: 16px;
`;

export default Alert;
