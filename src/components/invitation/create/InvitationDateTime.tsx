import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function InvitationDateTime() {
  const { title } = CREATE_TEXTS;

  return (
    <div css={containerStyles}>
      <div css={dateContainerStyles}>
        <div css={titleStyles}>{title.invitationDate}</div>
        <div>
          <DatePicker />
        </div>
      </div>
      <div css={timeContainerStyles}>
        <div css={titleStyles}>{title.invitationTime}</div>
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
`;

const dateContainerStyles = css``;

const timeContainerStyles = css``;

const titleStyles = css`
  color: ${theme.palette.title};
  font: ${theme.font.subTitle.subTitle1_600};
  line-height: 25px;
`;

export default InvitationDateTime;
