import { css } from '@emotion/react';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { InfoCategory } from '@/assets/icons';
import { InvitationInfoCategoryProps } from '@/types/invitation/view';

function InvitationInfoCategory({ infoLabel }: InvitationInfoCategoryProps) {
  return (
    <div css={InvitationInfoCategoryStyles}>
      <div css={CategoryContainerStyles}>
        <InfoCategory />
      </div>
      <div>{infoLabel}</div>
    </div>
  );
}
const InvitationInfoCategoryStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: ${theme.palette.greyscale.grey50};
  font: ${theme.font.body.body3_500};

  ${mq.md} {
    border: 1px soid rightbrown;
  }
  ${mq.lg} {
  }
  ${mq.tab} {
  }
`;

const CategoryContainerStyles = css`
  width: 55px;
  height: 55px;
  border-radius: 100%;
  box-shadow: 2px 5px 20px #7d92cd57;
  margin-bottom: 16px;
`;

export default InvitationInfoCategory;
