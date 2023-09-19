import { css } from '@emotion/react';
import { COMMON_ICON_NAMES } from '@/constants/common';
import Button from '@/components/common/Button';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';

function InvitationDoneBtn() {
  const { button } = CREATE_TEXTS;
  const { invitation } = COMMON_ICON_NAMES;

  const onClickToMypageHandler = () => {
    alert('마이페이지 방문자 목록으로 연결됩니다.');
  };

  const onClickToHomeHandler = () => {
    alert('홈 화면으로 연결됩니다.');
  };

  return (
    <div css={btnContainerStyles}>
      <button
        type="button"
        css={textWrapperStyles}
        onClick={onClickToMypageHandler}
      >
        <div>
          <span>방문자 목록</span>에서
          <br />
          초대 내역을 확인할 수 있어요
        </div>
        <div css={iconStyles}>
          <Icons
            icon={invitation.list}
            color={theme.palette.greyscale.grey50}
          />
        </div>
      </button>
      <Button
        content={button.confirm}
        variant="blue"
        onClick={onClickToHomeHandler}
      />
    </div>
  );
}

const btnContainerStyles = css`
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  width: 100%;
  padding: 0 16px 20px;
`;

const textWrapperStyles = css`
  display: flex;
  align-items: flex-end;
  gap: 6px;
  font: ${theme.font.body.body2_500};
  text-align: center;
  color: ${theme.palette.greyscale.grey50};
  cursor: pointer;

  span {
    font: ${theme.font.body.body2_600};
    color: ${theme.palette.primary};
  }
`;

const iconStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 20px;
  line-height: 24px;
  transform: rotate(-180deg) scale(0.7);
`;

export default InvitationDoneBtn;
