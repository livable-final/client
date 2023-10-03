import { css } from '@emotion/react';
import theme from '@/styles/theme';
import useAlertStore from '@/stores/useAlertStore';
import Icons from '@/components/common/Icons';

function Alert() {
  const { alertState, closeAlert } = useAlertStore();

  return (
    <div css={backgroundStyles}>
      <div css={alertContainerStyles}>
        <div css={alertTitleStyles}>
          {alertState.title ? (
            alertState.title
          ) : (
            <Icons icon="error" size="72" />
          )}
        </div>
        <div css={alertContentStyles}>{alertState.content}</div>
        <button type="button" css={defaultBtnStyles} onClick={closeAlert}>
          <Icons icon="exitSmall" />
        </button>
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
  justify-content: space-between;
  width: 90%;
  max-width: 500px;
  height: 96px;
  border-radius: 16px;
  background-color: ${theme.palette.state.danger};
  z-index: 11;
  padding: 0 8px;
  gap: 8px;
`;

const alertTitleStyles = css`
  width: 20px;
  display: flex;
  align-items: center;
  color: ${theme.palette.input.enabled};
  font: ${theme.font.etc.rankingNumber};
  font-size: 16px;
`;

const alertContentStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.palette.greyscale.grey10};
  font: ${theme.font.etc.alert};
  white-space: pre-wrap;
  width: 100%;
`;

const defaultBtnStyles = css`
  display: flex;
  align-items: flex-start;
  color: ${theme.palette.white};
  font: ${theme.font.body.body2_400};
  cursor: pointer;
  padding-top: 8px;
`;

export default Alert;
