import { css } from '@emotion/react';
import theme from '@/styles/theme';
import useAlertStore from '@/stores/useAlertStore';
import Icons from '@/components/common/Icons';

function Alert() {
  const { alertState, closeAlert } = useAlertStore();

  return (
    <div css={backgroundStyles}>
      <div css={alertContainerStyles}>
        <div css={titleContentWrapperStyles}>
          <div css={alertTitleStyles}>
            {alertState.title ? (
              alertState.title
            ) : (
              <Icons icon="error" size="72" />
            )}
          </div>
          <div css={alertContentStyles}>{alertState.content}</div>
        </div>
        <div css={btnWrapperStyles}>
          <button type="button" css={defaultBtnStyles} onClick={closeAlert}>
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
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  max-width: 500px;
  height: 96px;
  padding-left: 20px;
  border-radius: 16px;
  background-color: ${theme.palette.state.danger};
  z-index: 11;
`;

const titleContentWrapperStyles = css`
  display: flex;
  gap: 14px;
`;

const alertTitleStyles = css`
  color: ${theme.palette.input.enabled};
  font: ${theme.font.subTitle.subTitle1_600};
`;

const alertContentStyles = css`
  display: flex;
  align-items: center;
  color: ${theme.palette.white};
  font: ${theme.font.body.body2_400};
  white-space: pre-wrap;
`;

const btnWrapperStyles = css`
  position: absolute;
  right: 0;
`;

const defaultBtnStyles = css`
  color: ${theme.palette.white};
  cursor: pointer;
  font-size: 24px;
  padding: 0 16px 48px 0;
`;

export default Alert;
