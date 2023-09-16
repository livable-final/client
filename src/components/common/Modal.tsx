import { css } from '@emotion/react';
import { ModalProps } from '@/types/common/modal';
import theme from '@/styles/theme';
import useModalStore from '@/stores/useModalStore';
import CREATE_TEXTS from '@/constants/invitation/createTexts';

function Modal({ onClick }: ModalProps) {
  const { modalState, closeModal } = useModalStore();
  const { modal } = CREATE_TEXTS;

  return (
    <div css={backgroundStyles}>
      <div css={modalContainerStyles}>
        <div className="title">{modalState.title}</div>
        <div className="content">{modalState.content}</div>
        <div css={btnWrapperStyles}>
          <button type="button" className="send" onClick={onClick}>
            {modal.button.send}
          </button>
          <button type="button" className="cancel" onClick={closeModal}>
            {modal.button.cancel}
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  width: 340px;
  height: 176px;
  border-radius: 16px;
  background-color: ${theme.palette.white};
  z-index: 1;

  .title {
    color: ${theme.palette.input.enabled};
    font: ${theme.font.subTitle.subTitle1_600};
    line-height: 18px;
    padding: 20px 0 16px 20px;
  }
  .content {
    height: 34px;
    color: ${theme.palette.greyscale.grey60};
    font: ${theme.font.body.body1_400};
    line-height: 24px;
    padding: 0 20px 0 20px;
  }
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

  .send {
    color: ${theme.palette.primary};
    cursor: pointer;
  }
  .cancel {
    color: ${theme.palette.greyscale.grey50};
    cursor: pointer;
  }
`;

export default Modal;
