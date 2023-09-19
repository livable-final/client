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
import { useState } from 'react';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { InvitationCreateTexts } from '@/types/invitation/create';
import { ErrorTypeProps } from '@/types/common/input';

function InvitationVisitorsContainer() {
  const { setNextComponent } = useViewStore();
  const { title, button, placeholder }: InvitationCreateTexts = CREATE_TEXTS;
  const { name, contact }: ErrorTypeProps = COMMON_ERROR_MESSAGE;
  const [visitorName, setVisitorName] = useState<string>('');
  const [visitorContact, setVisitorContact] = useState<string>('');
  const [visitorsList] = useState<string[]>([]);

  const onClickBtnHandler = () => {
    setNextComponent('InvitationInfoContainer');
  };

  const onClickAddVisitorHandler = () => {
    visitorsList.push(visitorName);
  };

  const onClickDeleteVisitorHandler = () => {
    visitorsList.pop();
  };

  return (
    <div css={containerStyles}>
      <div css={inputContainerStyles}>
        <div css={titleStyles}>
          <div>{title.invitation}</div>
        </div>
        <div css={inputWrapperStyles}>
          <Input
            value={visitorName}
            setValue={setVisitorName}
            variant="default"
            placeholder={placeholder.name}
            isError={visitorName.length !== 0 && visitorName.length < 2}
            errorType={name}
          />
          <Input
            value={visitorContact}
            setValue={setVisitorContact}
            variant="default"
            placeholder={placeholder.contact}
            isError={visitorContact.length !== 0 && visitorContact.length < 9}
            errorType={contact}
          />
          <AddressBook />
        </div>
        <div css={addBtnStyles}>
          <Add onClick={onClickAddVisitorHandler} />
        </div>
      </div>
      {visitorsList.length > 0 && (
        <InvitationVisitorsList
          visitorsList={visitorsList}
          onClick={onClickDeleteVisitorHandler}
        />
      )}
      <div css={buttonWrapperStyles}>
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
  border: 3px solid aqua;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 80px;
  min-width: 280px;
  max-width: 360px;

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
  border: 3px solid red;
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
