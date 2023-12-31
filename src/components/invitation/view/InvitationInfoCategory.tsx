import { css } from '@emotion/react';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { InvitationInfoCategoryProps } from '@/types/invitation/view';
import usePagesStore from '@/stores/common/usePagesStore';
import Icons from '@/components/common/Icons';
import useInvitationThemeStore from '@/stores/invitaion/useInvitationThemeStore';
import { INVITATION_VIEW_TICKET_THEME } from '@/constants/invitation/viewTexts';

function InvitationInfoCategory({ value, icon }: InvitationInfoCategoryProps) {
  const { setNextComponent } = usePagesStore();
  const { themeState } = useInvitationThemeStore();

  const variantData = INVITATION_VIEW_TICKET_THEME[themeState.theme];

  const onClickHandler = () => {
    setNextComponent(value);
  };

  return (
    <div css={InvitationInfoCategoryStyles}>
      <button type="button" id={value} onClick={onClickHandler}>
        <div id={value} css={CategoryContainerStyles}>
          <Icons icon={icon} color={`${variantData.icon}`} />
        </div>
        <span id={value}>{value}</span>
      </button>
    </div>
  );
}

const InvitationInfoCategoryStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 14px 0;
  width: 75px;
  height: 100%;
  color: ${theme.palette.greyscale.grey50};
  span {
    color: ${theme.palette.greyscale.grey50};
    font: ${theme.font.body.body3_500};
  }

  ${mq.md} {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 75px;
  }
  ${mq.tab} {
  }
`;

const CategoryContainerStyles = css``;

export default InvitationInfoCategory;
