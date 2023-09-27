import Button from '@/components/common/Button';
import RadioBtn from '@/components/common/RadioBtn';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';

function InvitationPlace() {
  const { title, button, placeholder } = CREATE_TEXTS;

  const test2 = [
    '식스센스 사무실 (10층 1004호)',
    '공용라운지 (A동 1001호)',
    '10층 회의실 A',
    '10층 회의실 B',
  ];

  return (
    <div css={containerStyles}>
      <div css={titleStyles}>{title.invitationPlace}</div>
      <div css={radioBtnWrapperStyles}>
        <RadioBtn
          list={test2}
          name="초대 장소"
          placeholder={placeholder.placeEtc}
        />
      </div>
      <div css={buttonWrapperStyles}>
        <Button variant="blue" content={button.save} />
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  padding: 0 6px 0;
`;

const radioBtnWrapperStyles = css`
  overflow: scroll;
`;

const titleStyles = css`
  width: 100%;
  color: ${theme.palette.title};
  font: ${theme.font.title.title2_600};
  line-height: 29px;
  text-align: left;
`;

const buttonWrapperStyles = css`
  min-width: 280px;
  max-width: 360px;
  padding-bottom: 20px;
  margin: 0 -6px 0;

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

export default InvitationPlace;
