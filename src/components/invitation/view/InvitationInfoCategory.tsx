import { css } from '@emotion/react';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { InvitationInfoCategoryProps } from '@/types/invitation/view';
import usePagesStore from '@/stores/usePagesStore';
import Icons from '@/components/common/Icons';
import useThemeStore from '@/stores/useThemeStore';
import { INVITATION_VIEW_TICKET_THEME } from '@/constants/invitation/viewTexts';

function InvitationInfoCategory({ value, icon }: InvitationInfoCategoryProps) {
  const { setNextComponent } = usePagesStore();
  const { themeState } = useThemeStore();

  const variantData = INVITATION_VIEW_TICKET_THEME[themeState.theme];

  const onClickHandler = (event: React.MouseEvent) => {
    setNextComponent((event.target as HTMLButtonElement).id);
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
  font: ${theme.font.body.body3_500};
  button {
    height: 100%;
  }
  span {
    color: ${theme.palette.greyscale.grey50};
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

const CategoryContainerStyles = css`
  margin: 0 auto;
`;

export default InvitationInfoCategory;
