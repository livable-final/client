import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import InvitationInfo from '@/components/invitation/create/InvitationInfo';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useViewStore from '@/stores/usePagesStore';
import useModalStore from '@/stores/useModalStore';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';

function InvitationInfoContainer() {
  const { setNextComponent } = useViewStore();
  const { modalState, openModal } = useModalStore();
  const { button, modal } = CREATE_TEXTS;
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  const onClickBtnHandler = () => {
    openModal(modal.send.title, modal.send.content);
  };

  const onClickModalHandler = () => {
    setIsConfirmed(!isConfirmed);
  };

  useEffect(() => {
    if (isConfirmed) {
      setNextComponent('InvitationDoneContainer');
    }
  }, [isConfirmed, setNextComponent]);

  const visitorsList = [
    '고애신',
    '유진초이',
    '김희성',
    '쿠도히나',
    '구동매',
    '임관수',
    '카일',
    '도미',
  ];

  return (
    <div css={containerStyles}>
      <InvitationInfo />
      {visitorsList.length > 0 && (
        <InvitationVisitorsList visitorsList={visitorsList} />
      )}
      {modalState.isOpen && <Modal onClick={onClickModalHandler} />}
      <div css={buttonWrapperStyles}>
        <Button
          content={button.send}
          variant="blue"
          onClick={onClickBtnHandler}
        />
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  min-width: 280px;
  max-width: 360px;

  ${mq.md} {
    max-width: 480px;
  }
  ${mq.lg} {
    max-width: 640px;
  }
  ${mq.tab} {
    max-width: 1024px;
  }
`;

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 0;
  min-width: 280px;
  max-width: 360px;
  height: 100px;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 800px;
  }
`;

export default InvitationInfoContainer;
