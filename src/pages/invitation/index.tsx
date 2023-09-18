import Add from '@/components/common/Add';
import Input from '@/components/common/Input';
import NameTag from '@/components/common/NameTag';
import { css } from '@emotion/react';
import useModalStore from '@/stores/useModalStore';
import Modal from '@/components/common/Modal';
import CREATE_TEXTS from '@/constants/invitation/createTexts';

function Index() {
  const { modalState, openModal } = useModalStore();
  const { modal } = CREATE_TEXTS;

  const onClickSendHandler = () => {
    openModal(modal.send.title, modal.send.content);
  };

  const onClickResendHandler = () => {
    openModal(modal.resend.title, modal.resend.content);
  };

  return (
    <>
      <button
        type="button"
        onClick={onClickSendHandler}
        css={css`
          width: 100px;
          border: 1px solid pink;
          border-radius: 10px;
          background-color: pink;
        `}
      >
        모달 테스트
      </button>
      <button
        type="button"
        onClick={onClickResendHandler}
        css={css`
          width: 140px;
          border: 1px solid pink;
          border-radius: 10px;
          background-color: pink;
        `}
      >
        모달 재전송 테스트
      </button>
      {modalState.isOpen && <Modal onClick={() => alert('전송예정!')} />}

      <input type="text" placeholder="test" />
      {/* input default */}
      <Input variant="default" placeholder="inputText" />
      <Input variant="disabled" placeholder="inputText" isDisabled />
      <Input variant="default" placeholder="inputText" isError />
      {/* input icon box */}
      <Input inputIcon variant="default" placeholder="inputText" />
      <Input inputIcon variant="disabled" placeholder="inputText" isDisabled />
      <Input
        inputIcon
        variant="default"
        placeholder="inputText"
        isError
        errorType="test"
      />
      {/* input textarea */}
      <Input textarea variant="default" placeholder="방문목적을 입력해주세요" />
      <Input
        textarea
        variant="disabled"
        placeholder="방문목적을 입력해주세요"
        isDisabled
      />
      <Add onClick={() => alert('클릭 테스트!')} />
      <Add isBlue onClick={() => alert('추가버튼 테스트')} />
      <NameTag name="히나" onClick={() => alert('삭제 테스트')} />
      <NameTag name="고애신" onClick={() => alert('삭제 테스트')} />
      <NameTag name="유진초이" onClick={() => alert('삭제 테스트')} />
    </>
  );
}

export default Index;
