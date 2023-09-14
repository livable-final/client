import InvitationPurposeContainer from '@/components/invitation/create/InvitationPurposeContainer';
import InvitationInfoContainer from '@/components/invitation/create/InvitationInfoContainer';
import InvitationDateContainer from '@/components/invitation/create/InvitationDateContainer';
import Header from '@/components/common/Header';
import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import Button from '@/components/common/Button';
import { useState } from 'react';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import { InvitationCreateTexts } from '@/types/invitation/create';

function Create() {
  const [btnDisplay, setBtnDisplay] = useState<string>('block');

  const { button }: InvitationCreateTexts = CREATE_TEXTS;

  const onFocusHandler = () => {
    setBtnDisplay('none');
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      setBtnDisplay('block');
    }, 250);
  };

  return (
    <div css={createContainerStyles}>
      <div css={headerContainerStyles}>
        <Header
          title="테스트"
          type="text"
          text="예시"
          onClick={() => alert('미리보기 테스트')}
        />
      </div>
      <InvitationDateContainer />
      <div
        css={buttonWrapperStyles(btnDisplay)}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        <Button content={button.next} variant="blue" />
      </div>
    </div>
  );
}

const createContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
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

const headerContainerStyles = css`
  min-width: 280px;
  max-width: 360px;

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

const buttonWrapperStyles = (btnDisplay: string) => css`
  display: ${btnDisplay};
  position: fixed;
  bottom: 0;
  min-width: 280px;
  max-width: 360px;
  margin-bottom: 20px;

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

export default Create;
