import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import Add from '@/components/common/Add';
import AddressBook from '@/components/common/AddressBook';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useModalStore from '@/stores/useModalStore';
import useViewStore from '@/stores/usePagesStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { InvitationCreateTexts } from '@/types/invitation/create';
import { VisitorInfo } from '@/types/invitation/api';
import { ErrorMessageProps } from '@/types/common/errorMessage';
import {
  checkValidationName,
  checkValidationContact,
} from '@/utils/checkValidation';

function InvitationVisitorsContainer() {
  const { setNextComponent } = useViewStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();
  const { modalState, openModal } = useModalStore();
  const { title, button, placeholder }: InvitationCreateTexts = CREATE_TEXTS;
  const { noName, noContact, noNameContact }: ErrorMessageProps =
    COMMON_ERROR_MESSAGE;

  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [visitorInfo, setVisitorInfo] = useState<VisitorInfo>({
    name: '',
    contact: '',
  });
  // 흐름 확인을 위한 예비 데이터 (최종 배포시 삭제)
  const [visitorsList, setVisitorsList] = useState<VisitorInfo[]>([
    {
      name: '김방문',
      contact: '01012345678',
    },
  ]);

  // 이름/연락처 입력
  const onChangeInfoHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
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
      openModal('📢', noNameContact);
      return;
    }
    if (visitorInfo.name && !visitorInfo.contact) {
      openModal('📢', noContact);
      return;
    }
    if (!visitorInfo.name && visitorInfo.contact) {
      openModal('📢', noName);
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

  // 하단 버튼 클릭 핸들러
  const onClickBtnHandler = () => {
    setNextComponent('InvitationInfoContainer');
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
              value={visitorInfo.name}
              onChange={onChangeInfoHandler}
              variant="default"
              placeholder={placeholder.name}
              isError={!checkValidationName(visitorInfo.name)}
              errorType="name"
              name="name"
            />
          </div>
          <div onFocus={onFocusInputHandler} onBlur={onBlurInputHandler}>
            <Input
              value={visitorInfo.contact}
              onChange={onChangeInfoHandler}
              variant="default"
              placeholder={placeholder.contact}
              maxLength={11}
              isError={!checkValidationContact(visitorInfo.contact)}
              errorType="contact"
              name="contact"
            />
          </div>
          <div css={addressBookWrapperStyles}>
            <AddressBook />
          </div>
        </div>
        <div css={addBtnStyles}>
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
          isDisabled={visitorsList.length === 0}
        />
      </div>
      {modalState.isOpen && <Modal isAlert />}
    </div>
  );
}

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  min-width: 280px;
  max-width: 360px;
  overflow: scroll;

  ${mq.md} {
    min-width: 361px;
  }
  ${mq.lg} {
    min-width: 481px;
  }
  ${mq.tab} {
    min-width: 641px;
  }
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

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
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
  max-width: 360px;
  padding: 0 16px 20px;
  background-image: linear-gradient(
    to top,
    ${theme.palette.white} 70%,
    transparent 30%
  );

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

export default InvitationVisitorsContainer;
