import Icons from '@/components/common/Icons';
import Button from '@/components/common/Button';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { InvitationCreateTexts } from '@/types/invitation/create';

function InvitationDoneBtn() {
  const { button }: InvitationCreateTexts = CREATE_TEXTS;
  const { invitation } = COMMON_ICON_NAMES;

  const router = useRouter();

  // 마이 페이지 이동
  const onClickToMypageHandler = () => {
    router.push(`/user/invitation-list`);
  };

  // 메인 홈 이동
  const onClickToHomeHandler = () => {
    router.push(`/`);
  };

  return (
    <div css={btnContainerStyles}>
      <button
        type="button"
        css={textWrapperStyles}
        onClick={onClickToMypageHandler}
      >
        <div>
          <span>초대 목록</span>에서
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
  padding-bottom: 20px;
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
