import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Alert from '@/components/common/Alert';
import Add from '@/components/common/Add';
import AddressBook from '@/components/common/AddressBook';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
import useAlertStore from '@/stores/common/useAlertStore';
import useViewStore from '@/stores/common/usePagesStore';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import COMPONENT_NAME from '@/constants/common/pages';
import useInvitationCreateStore from '@/stores/invitaion/useInvitationCreateStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState } from 'react';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { InvitationCreateTexts } from '@/types/invitation/create';
import { VisitorInfo } from '@/types/invitation/api';
import { ErrorMessageProps } from '@/types/common/errorMessage';
import { ComponentName } from '@/types/common/pages';
import {
  checkValidationName,
  checkValidationContact,
} from '@/utils/checkValidation';

function InvitationVisitorsContainer() {
  const { setNextComponent } = useViewStore();
  const { alertState, openAlert } = useAlertStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();

  const { invitation }: ComponentName = COMPONENT_NAME;
  const { title, button, placeholder }: InvitationCreateTexts = CREATE_TEXTS;
  const { noName, noContact, noNameContact }: ErrorMessageProps =
    COMMON_ERROR_MESSAGE;

  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo>({
    name: '',
    contact: '',
  });
  const [visitorsList, setVisitorsList] = useState<VisitorInfo[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 이름/전화번호 입력
  const onChangeInfoHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name: infoType, value } = e.target;

    setVisitorInfo({
      ...visitorInfo,
      [infoType]: value,
    });
  };

  // 방문자 추가 버튼 핸들러
  const onClickAddVisitorHandler = () => {
    // 사용자 입력값 유무에 따른 예외처리
    if (!visitorInfo.name && !visitorInfo.contact) {
      openAlert('📢', noNameContact);
      return;
    }
    if (visitorInfo.name && !visitorInfo.contact) {
      openAlert('📢', noContact);
      return;
    }
    if (!visitorInfo.name && visitorInfo.contact) {
      openAlert('📢', noName);
      return;
    }
    // 이름/전화번호 모두 유효할 경우
    setVisitorsList([...visitorsList, visitorInfo]);
    // input 초기화
    setVisitorInfo({
      name: '',
      contact: '',
    });
  };

  // 방문자 삭제 버튼 핸들러
  const onClickDeleteVisitorHandler = (name: string) => {
    setVisitorsList((visitorList) =>
      visitorList.filter((visitor) => visitor.name !== name),
    );
  };

  // input 포커스될 때 버튼 숨김
  const onFocusInputHandler = () => {
    setIsFocused(true);
  };

  // input 블러될 때 버튼 활성
  const onBlurInputHandler = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  // 하단 '다음' 버튼 클릭 핸들러
  const onClickBtnHandler = () => {
    // 다음 렌더링 컴포넌트: 초대 정보
    // 초대장 생성 스토어에 방문자 정보 저장
    setNextComponent(invitation.create.info);
    setCreateContents('visitors', visitorsList);
  };

  return (
    <div css={containerStyles}>
      <div css={inputContainerStyles}>
        <div css={titleStyles}>
          <div>{title.invitation}</div>
        </div>
        <div css={inputWrapperStyles}>
          <div onFocus={onFocusInputHandler} onBlur={onBlurInputHandler}>
            <Input
              name="name"
              value={visitorInfo.name}
              onChange={onChangeInfoHandler}
              variant="default"
              placeholder={placeholder.name}
              // 유효성 검사 통과하지 않을 경우 ErrorMessage 출력
              isError={!checkValidationName(visitorInfo.name)}
              errorType="name"
            />
          </div>
          <div onFocus={onFocusInputHandler} onBlur={onBlurInputHandler}>
            <Input
              name="contact"
              value={visitorInfo.contact}
              onChange={onChangeInfoHandler}
              variant="default"
              placeholder={placeholder.contact}
              maxLength={11}
              // 유효성 검사 통과하지 않을 경우 ErrorMessage 출력
              isError={!checkValidationContact(visitorInfo.contact)}
              errorType="contact"
            />
          </div>
          <div css={addressBookWrapperStyles}>
            <AddressBook />
          </div>
        </div>
        <div css={addBtnStyles}>
          {/* 초대 목적이 면접이고, 등록한 방문자가 1명이면 '추가' 버튼 비활성화 */}
          {createContents.purpose === 'interview' &&
          visitorsList.length === 1 ? null : (
            <Add onClick={onClickAddVisitorHandler} />
          )}
        </div>
      </div>
      <div css={visitorsListWrapper(visitorsList)}>
        <InvitationVisitorsList
          visitorsList={visitorsList}
          onClick={onClickDeleteVisitorHandler}
        />
      </div>
      <div css={buttonWrapperStyles(isFocused)}>
        <Button
          content={button.next}
          variant="blue"
          onClick={onClickBtnHandler}
          isDisabled={visitorsList.length === 0} // 방문자 정보 입력값이 없을 경우 버튼 비활성화
        />
      </div>
      {alertState.isOpen && <Alert />}
    </div>
  );
}

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  min-width: 280px;
  max-width: 640px;
  overflow: scroll;
`;

const titleStyles = css`
  display: flex;
  width: 100%;
  max-width: 280px;
  height: 28px;
  padding-left: 4px;
  margin-bottom: 32px;
  text-align: left;
  white-space: pre-line;

  div {
    width: 100%;
    font: ${theme.font.title.title2_500};
    line-height: 28px;
    text-align: left;
  }
`;

const inputContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
`;

const addressBookWrapperStyles = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const addBtnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const inputWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const visitorsListWrapper = (visitorsList: VisitorInfo[]) => css`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  margin-bottom: ${visitorsList.length > 3 ? '100px;' : '0'};
`;

const buttonWrapperStyles = (isFocused: boolean) => css`
  position: fixed;
  bottom: 0;
  display: ${isFocused ? 'none' : 'block'};
  width: 100%;
  min-width: 280px;
  max-width: 1024px;
  padding: 0 16px 20px;
  background-image: linear-gradient(
    to top,
    ${theme.palette.white} 70%,
    transparent 30%
  );
`;

export default InvitationVisitorsContainer;
