import theme from '@/styles/theme';
import changeVisitPurpose from '@/utils/changeVisitPurpose';
import { css } from '@emotion/react';
import { UserInvitationListItemProps } from '@/types/user/invitationList';
import mq from '@/utils/mediaquery';

function UserInvitationListItem({ data }: UserInvitationListItemProps) {
  const visitorCount = data.visitorCount - 1;
  const startTime = data.startTime.substring(0, 5);
  const endTime = data.endTime.substring(0, 5);
  const purposes = changeVisitPurpose(data.purpose);

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
        <div>{startTime}~</div>
        <div>{endTime}</div>
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
  margin-bottom: 2px;
`;
const visitorInfoStyles = css`
  font: ${theme.font.subTitle.subTitle2_400};
  color: ${theme.palette.title};
  margin-right: 8px;
`;
const purposeStyles = css`
  font: ${theme.font.body.body2_500};
  color: ${theme.palette.bluescale.blue50};
`;
const placeStyles = css`
  font: ${theme.font.body.body2_400};
  color: ${theme.palette.greyscale.grey50};
  text-align: left;
`;
const timeStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: right;
  font: ${theme.font.body.body1_400};
  color: ${theme.palette.primary};
  ${mq.md} {
    display: flex;
    flex-direction: row;
  }
  ${mq.tab} {
  }
`;
export default UserInvitationListItem;
