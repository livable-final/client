import { css } from '@emotion/react';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
// import { InfoCategory } from '@/assets/icons';
import { InvitationInfoCategoryProps } from '@/types/invitation/view';
import usePagesStore from '@/stores/usePagesStore';

function InvitationInfoCategory({ value }: InvitationInfoCategoryProps) {
  const { setNextComponent } = usePagesStore();

  const onClickHandler = (event: React.MouseEvent) => {
    setNextComponent((event.target as HTMLButtonElement).id);
  };

  return (
    <div css={InvitationInfoCategoryStyles}>
      <button type="button" id={value} onClick={onClickHandler}>
        <div id={value} css={CategoryContainerStyles}>
          {/* <InfoCategory id={value} /> */}
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
  button: {
    height: 100%;
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
  width: 55px;
  height: 55px;
  border-radius: 100%;
  box-shadow: 2px 5px 20px #92afff56;
  margin: 0 auto 16px;
`;

export default InvitationInfoCategory;
