import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Add from '@/components/common/Add';
import AddressBook from '@/components/common/AddressBook';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useViewStore from '@/stores/usePagesStore';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { ChangeEvent, useState } from 'react';
import { InvitationCreateTexts } from '@/types/invitation/create';
import {
  checkValidationName,
  checkValidationContact,
} from '@/utils/checkValidation';

function InvitationVisitorsContainer() {
  const { setNextComponent } = useViewStore();
  const { title, button, placeholder }: InvitationCreateTexts = CREATE_TEXTS;

  const [visitorInfo, setVisitorInfo] = useState({ name: '', contact: '' });
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // API 연동 후 삭제
  const [visitorsList, setVisitorList] = useState<string[]>([]);

  // 이름/연락처 입력 받기
  const onChangeInfoHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const { name: inputName, value } = e.target;

    setVisitorInfo({
      ...visitorInfo,
      [inputName]: value,
    });
  };

  const onClickAddVisitorHandler = () => {
    // 눌렀을 때 추가 로직 필요
    setVisitorList([...visitorsList, visitorInfo.name]);
  };

  const onClickDeleteVisitorHandler = () => {
    // 눌렀을 때 삭제 로직 필요
    visitorsList.pop();
  };

  // input 활성화 시 버튼 숨김 처리
  const onFocusInputHandler = () => {
    setIsFocused(true);
  };

  const onBlurInputHandler = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  const onClickBtnHandler = () => {
    setNextComponent('InvitationInfoContainer');
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

          <AddressBook />
        </div>
        <div css={addBtnStyles}>
          <Add onClick={onClickAddVisitorHandler} />
        </div>
      </div>
      <div css={visitorsListWrapper(visitorsList)}>
        {visitorsList.length > 0 && (
          <InvitationVisitorsList
            visitorsList={visitorsList}
            onClick={onClickDeleteVisitorHandler}
          />
        )}
      </div>
      <div css={buttonWrapperStyles(isFocused)}>
        <Button
          content={button.next}
          variant="blue"
          onClick={onClickBtnHandler}
          isDisabled={visitorsList.length === 0}
        />
      </div>
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

const visitorsListWrapper = (visitorsList: string[]) => css`
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
