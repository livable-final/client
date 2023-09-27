import { css } from '@emotion/react';
import { ModalProps } from '@/types/common/modal';
import theme from '@/styles/theme';
import useModalStore from '@/stores/useModalStore';
import { COMMON_MODAL_BUTTONS } from '@/constants/common';

function Modal({ isAlert, content, onClick }: ModalProps) {
  const { modalState, closeModal } = useModalStore();
  const { confirm, cancel } = COMMON_MODAL_BUTTONS;

  return (
    <div css={backgroundStyles}>
      <div css={modalContainerStyles}>
        <div css={modalTitleStyles}>{modalState.title}</div>
        <div css={modalContentStyles}>{modalState.content}</div>
        <div css={btnWrapperStyles}>
          {isAlert ? (
            <button type="button" css={defaultBtnStyles} onClick={closeModal}>
              {confirm}
            </button>
          ) : (
            <>
              <button type="button" css={cancelBtnStyles} onClick={closeModal}>
                {cancel}
              </button>
              <button type="button" css={defaultBtnStyles} onClick={onClick}>
                {content}
              </button>
            </>
          )}
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 340px;
  height: 176px;
  border-radius: 16px;
  background-color: ${theme.palette.white};
  z-index: 2;
`;

const modalTitleStyles = css`
  padding: 20px 0 16px 20px;
  color: ${theme.palette.input.enabled};
  font: ${theme.font.subTitle.subTitle1_600};
  line-height: 18px;
`;

const modalContentStyles = css`
  height: 34px;
  padding: 0 20px 0 20px;
  white-space: pre-wrap;
  color: ${theme.palette.greyscale.grey60};
  font: ${theme.font.body.body1_400};
  line-height: 24px;
`;

const btnWrapperStyles = css`
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  width: 100%;
  height: 64px;
  padding-right: 30px;
  font: ${theme.font.body.body1_500};
  line-height: 24px;
`;

const defaultBtnStyles = css`
  color: ${theme.palette.primary};
  cursor: pointer;
`;

const cancelBtnStyles = css`
  color: ${theme.palette.greyscale.grey50};
  cursor: pointer;
`;

export default Modal;
