import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { UserInvitationListItemProps } from '@/types/user/invitationList';

function UserInvitationListItem({ data }: UserInvitationListItemProps) {
  const visitorCount = data.visitorCount - 1;
  const startTime = data.startTime.substring(0, 5);
  const endTime = data.endTime.substring(0, 5);

  const visitPurpose = (purpose: string) => {
    if (purpose === 'meeting') {
      return '회의';
    }
    if (purpose === 'interview') {
      return '면접';
    }
    if (purpose === 'fixedTermWork') {
      return '면접';
    }
    if (purpose === 'seminar') {
      return '세미나';
    }
    if (purpose === 'as') {
      return 'AS/점검';
    }
    if (purpose === 'etc') {
      return '기타';
    }
    return `${purpose}`;
  };
  const purposes = visitPurpose(data.purpose);

  return (
    <div css={itemConstainerStyles}>
      <div css={textInfoStyles}>
        <div css={firstLineStyles}>
          <div css={visitorInfoStyles}>
            {data.visitorName}
            {visitorCount >= 1 ? ` 외 ${visitorCount}명` : ''}
          </div>
          <div css={purposeStyles}>{purposes}</div>
        </div>
        <div css={placeStyles}>{data.officeName}</div>
      </div>
      <div css={timeStyles}>
        {startTime}~{endTime}
      </div>
    </div>
  );
}
const itemConstainerStyles = css`
  display: flex;
  flex-direction: row;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 16px;
  border: 1px solid ${theme.palette.greyscale.grey10};
  background: ${theme.palette.white};
  line-height: 24px;
`;
const textInfoStyles = css`
  display: flex;
  flex-direction: column;
`;
const firstLineStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const visitorInfoStyles = css`
  font: ${theme.font.subTitle.subTitle1_400};
  color: ${theme.palette.title};
  margin-right: 8px;
`;
const purposeStyles = css`
  font: ${theme.font.body.body2_500};
  color: ${theme.palette.bluescale.blue50};
`;
const placeStyles = css`
  font: ${theme.font.body.body2_400};
  color: ${theme.palette.greyscale.grey40};
`;
const timeStyles = css`
  font: ${theme.font.body.body1_400};
  color: ${theme.palette.primary};
`;
export default UserInvitationListItem;
