import InvitationDate from '@/components/invitation/create/InvitationDate';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import InvitationNameList from './InvitationNameList';

function InvitationDateContainer() {
  const nameList = [
    '고애신',
    '유진초이',
    '김희성',
    '쿠도히나',
    '구동매',
    '임관수',
    '카일',
    '도미',
  ];

  return (
    <div css={dateContainerStyles}>
      <InvitationDate />
      {nameList.length > 0 && <InvitationNameList nameList={nameList} />}
    </div>
  );
}

const dateContainerStyles = css`
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

export default InvitationDateContainer;
