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
import { InvitationCreateTexts } from '@/types/invitation/create';

function InvitationVisitorsContainer() {
  const { setNextComponent } = useViewStore();
  const { title, button, placeholder }: InvitationCreateTexts = CREATE_TEXTS;
  const visitorsList = ['고애신', '유진초이', '쿠도히나', '구동매', '김희성'];

  const onClickHandler = () => {
    setNextComponent('InvitationInfoContainer');
  };

  return (
    <div css={containerStyles}>
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
      {visitorsList.length > 0 && (
        <InvitationVisitorsList visitorsList={visitorsList} />
      )}
      <div css={buttonWrapperStyles}>
        <Button content={button.next} variant="blue" onClick={onClickHandler} />
      </div>
    </div>
  );
}

const containerStyles = css`
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

export default InvitationVisitorsContainer;
