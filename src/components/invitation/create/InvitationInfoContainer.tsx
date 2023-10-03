import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Alert from '@/components/common/Alert';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationInfo from '@/components/invitation/create/InvitationInfo';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
import useViewStore from '@/stores/usePagesStore';
import useModalStore from '@/stores/useModalStore';
import useSaveStore from '@/stores/useSaveStore';
import useAlertStore from '@/stores/useAlertStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationCreateStore, {
  initialCreateState,
} from '@/stores/useInvitationCreateStore';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { useEffect, useState, ChangeEvent } from 'react';
import { VisitorInfo } from '@/types/invitation/api';
import { postInvitation } from '@/pages/api/invitation/createRequests';
import { ErrorProps } from '@/types/common/response';

function InvitationInfoContainer() {
  const { setNextComponent } = useViewStore();
  const { modalState, openModal, closeModal } = useModalStore();
  const { alertState, openAlert } = useAlertStore();
  const { visit, setVisitMsgText, clearVisitMsg } = useSaveStore();
  const { bottomSheetState } = useBottomSheetStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();
  const { button, modal } = CREATE_TEXTS;

  const [visitorsList, setVisitorsList] = useState<VisitorInfo[]>([]);
  const [tip, setTip] = useState<string>(visit.visitMsgText);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);

  // 이전 컴포넌트에서 등록한 방문자 정보 가져오기
  useEffect(() => {
    const convertedVisitors: VisitorInfo[] = createContents.visitors.map(
      (visitor) => ({
        name: visitor.name,
        contact: visitor.contact,
      }),
    );

    setVisitorsList(convertedVisitors);
  }, [createContents]);

  // 모달에서 전송을 눌렀을 때 최종 초대장 데이터
  useEffect(() => {
    if (isConfirmed) {
      setCreateContents('description', tip);

      const postData = async () => {
        try {
          const response = await postInvitation(createContents);

          // 성공했을 때에만 다음 컴포넌트 연결
          if (response.status === 201) {
            setNextComponent('InvitationDoneContainer');
          }
        } catch (err: unknown) {
          const error = err as ErrorProps;
          openAlert('🚨', error.response?.error);
        }
      };
      postData();
    }
    if (visit.visitMsg) {
      setVisitMsgText(tip);
    } else {
      clearVisitMsg();
    }
  }, [isConfirmed]);

  // 방문자 삭제 버튼 핸들러
  const onClickDeleteVisitorHandler = (name: string) => {
    const deletedVisitors = visitorsList.filter(
      (visitor) => visitor.name !== name,
    );
    setCreateContents('visitors', deletedVisitors);
  };

  // 방문 팁 작성
  const onChangeTipHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTip(e.target.value);
  };

  // input 포커스될 때 버튼 숨김
  const onFocusInputHandler = () => {
    setIsFocused(true);
  };

  // input 블러될 때 버튼 활성
  const onBlurInputHandler = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  // 하단 버튼 핸들러 (초대장 보내기)
  const onClickBtnHandler = () => {
    openModal(modal.send.title, modal.send.content);
  };

  // 최종 전송 확인 핸들러 (모달)
  const onClickModalHandler = () => {
    if (initialCreateState !== createContents) {
      setIsConfirmed(!isConfirmed);
      closeModal();
    } else {
      openAlert('📢', '초대장 정보를 다시 확인해 주세요!');
      closeModal();
    }
  };

  return (
    <div css={containerStyles}>
      <InvitationInfo
        tip={tip}
        onChange={onChangeTipHandler}
        onFocus={onFocusInputHandler}
        onBlur={onBlurInputHandler}
      />
      <InvitationVisitorsList
        visitorsList={visitorsList}
        onClick={onClickDeleteVisitorHandler}
      />
      <div css={buttonWrapperStyles(isFocused)}>
        <Button
          content={button.send}
          variant="blue"
          onClick={onClickBtnHandler}
        />
      </div>
      {modalState.isOpen && (
        <Modal content={modal.btn} onClick={onClickModalHandler} />
      )}
      {alertState.isOpen && <Alert />}
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

const buttonWrapperStyles = (isFocused: boolean) => css`
  position: fixed;
  bottom: 0;
  display: ${isFocused ? 'none' : 'block'};
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
