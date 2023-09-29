// 컴포넌트
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationInfo from '@/components/invitation/create/InvitationInfo';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
// 스토어
import useViewStore from '@/stores/usePagesStore';
import useModalStore from '@/stores/useModalStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { VisitorInfo } from '@/types/invitation/api';

function InvitationInfoContainer() {
  const { setNextComponent } = useViewStore();
  const { modalState, openModal, closeModal } = useModalStore();
  const { bottomSheetState } = useBottomSheetStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();
  const { button, modal } = CREATE_TEXTS;

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [visitorsList, setVisitorsList] = useState<VisitorInfo[]>([]);

  // 이전 컴포넌트에서 등록한 방문자 정보 가져오기
  useEffect(() => {
    console.log(createContents.description);
    setVisitorsList(createContents.visitors);
  }, [createContents]);

  // 모달에서 전송을 눌렀을 때 다음 컴포넌트 렌더링
  useEffect(() => {
    if (isConfirmed) {
      setNextComponent('InvitationDoneContainer');
    }
  }, [isConfirmed, setNextComponent]);

  // 최종 전송 확인 모달 핸들러
  const onClickModalHandler = () => {
    setIsConfirmed(!isConfirmed);
    closeModal();
  };

  // 초대 목록에서 특정 방문자 삭제
  const onClickDeleteHandler = () => {
    openModal('테스트', '삭제 기능이 구현될 예정이에요!');
  };

  // 하단 버튼 핸들러
  const onClickBtnHandler = () => {
    openModal(modal.send.title, modal.send.content);
  };

  return (
    <div css={containerStyles}>
      <InvitationInfo />

      {visitorsList.length > 0 && (
        <InvitationVisitorsList
          visitorsList={visitorsList}
          onClick={onClickDeleteHandler}
        />
      )}

      <div css={buttonWrapperStyles}>
        <Button
          content={button.send}
          variant="blue"
          onClick={onClickBtnHandler}
        />
      </div>

      {modalState.isOpen && (
        <Modal content={modal.btn} onClick={onClickModalHandler} />
      )}
      {bottomSheetState.isOpen && <BottomSheet />}
    </div>
  );
}

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
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
  width: 100%;
  min-width: 280px;
  max-width: 360px;
  padding: 0 16px 20px;

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
    max-width: 1024px;
  }
`;

export default InvitationInfoContainer;
