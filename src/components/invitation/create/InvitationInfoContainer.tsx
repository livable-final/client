import Input from '@/components/common/Input';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import Add from '@/components/common/Add';
import { css } from '@emotion/react';
import InvitationNameList from '@/components/invitation/create/InvitationNameList';
import { InvitationCreateTexts } from '@/types/invitation/create';
import AddressBook from '@/components/common/AddressBook';

function InvitationInfoContainer() {
  const { title, placeholder }: InvitationCreateTexts = CREATE_TEXTS;
  const nameList = ['고애신', '유진초이', '쿠도히나', '구동매', '김희성'];

  return (
    <div css={infoContainerStyles}>
      <div css={invitationTextStyles}>
        <div>{title.invitation}</div>
      </div>
      <div css={inputContainerStyles}>
        <div>
          <Input variant="default" placeholder={placeholder.name} />
          <Input variant="default" placeholder={placeholder.phone} />
          <AddressBook />
        </div>
        <div css={addBtnStyles}>
          <Add onClick={() => alert('추가 버튼 테스트')} />
        </div>
      </div>
      {nameList.length > 0 && <InvitationNameList nameList={nameList} />}
    </div>
  );
}

const infoContainerStyles = css`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
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

const invitationTextStyles = css`
  display: flex;
  width: 100%;
  max-width: 280px;
  height: 28px;
  padding-left: 4px;
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

export default InvitationInfoContainer;
