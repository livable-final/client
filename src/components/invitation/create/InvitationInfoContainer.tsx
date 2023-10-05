import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Alert from '@/components/common/Alert';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationInfo from '@/components/invitation/create/InvitationInfo';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import COMPONENT_NAME from '@/constants/common/pages';
import useViewStore from '@/stores/usePagesStore';
import useModalStore from '@/stores/useModalStore';
import useSaveStore from '@/stores/useSaveStore';
import useAlertStore from '@/stores/useAlertStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { postInvitation } from '@/pages/api/invitation/createRequests';
import { ComponentName } from '@/types/common/pages';
import { ErrorProps } from '@/types/common/response';
import { VisitorInfo } from '@/types/invitation/api';
import { InvitationCreateTexts } from '@/types/invitation/create';

function InvitationInfoContainer() {
  const { setNextComponent } = useViewStore();
  const { modalState, openModal, closeModal } = useModalStore();
  const { alertState, openAlert } = useAlertStore();
  const { visit, setVisitMsgText, clearVisitMsg } = useSaveStore();
  const { bottomSheetState } = useBottomSheetStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();

  const { button, modal }: InvitationCreateTexts = CREATE_TEXTS;
  const { invitation }: ComponentName = COMPONENT_NAME;

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
      // 모달에서 전송하기 버튼 눌렀을 때 스토어에 tip 저장
      setCreateContents('description', tip);

      const postData = async () => {
        try {
          // 스토어에 저장된 초대장 데이터로 초대장 API 호출
          const response = await postInvitation(createContents);

          // 초대장 생성 성공했을 때에만 다음 컴포넌트 연결
          // 다음 렌더링 컴포넌트: 초대 완료
          if (response.status === 201) {
            setNextComponent(invitation.create.done);
          }
        } catch (err: unknown) {
          const error = err as ErrorProps;
          openAlert('🚨', error.message);
        }
      };
      postData();
    }
    // '다음에도 이 메세지를 사용'을 선택했을 때 작성 tip 스토어 저장
    // 해제했을 때 스토어에 저장된 값 삭제
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

  // 방문 팁 작성 핸들러
  const onChangeTipHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTip(e.target.value);
  };

  // input 포커스될 때 '초대장 보내기' 버튼 숨김
  const onFocusInputHandler = () => {
    setIsFocused(true);
  };

  // input 블러될 때 '초대장 보내기' 버튼 활성
  const onBlurInputHandler = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  // 하단 버튼 '초대장 보내기' 핸들러
  const onClickBtnHandler = () => {
    openModal(modal.send.title, modal.send.content);
  };

  // 최종 전송 확인 핸들러 (모달)
  const onClickModalHandler = () => {
    setIsConfirmed(!isConfirmed);
    closeModal();
  };

  return (
    <div css={containerStyles}>
      {/* 초대 장소, 날짜, 시간 선택 */}
      <InvitationInfo
        tip={tip}
        onChange={onChangeTipHandler}
        onFocus={onFocusInputHandler}
        onBlur={onBlurInputHandler}
      />
      {/* 방문자 리스트 */}
      <InvitationVisitorsList
        visitorsList={visitorsList}
        onClick={onClickDeleteVisitorHandler}
      />
      <div css={buttonWrapperStyles(isFocused)}>
        <Button
          content={button.send}
          variant="blue"
          onClick={onClickBtnHandler}
          // 방문자 리스트가 없거나, 초대 날짜가 입력되지 않으면 버튼 비활성화
          isDisabled={
            createContents.visitors.length === 0 ||
            createContents.startDate === '' ||
            createContents.endDate === ''
          }
        />
      </div>
      {modalState.isOpen && (
        // btn : 전송하기
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
  max-width: 1024px;
`;

const buttonWrapperStyles = (isFocused: boolean) => css`
  position: fixed;
  bottom: 0;
  display: ${isFocused ? 'none' : 'block'};
  width: 100%;
  min-width: 280px;
  max-width: 1024px;
  padding: 0 16px 20px;
`;

export default InvitationInfoContainer;
