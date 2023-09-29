import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import {
  USER_INVITATIONLIST_TEXT,
  USER_INVITATIONLIST_BUTTON_TEXT,
} from '@/constants/user/userInvitationTexts';
import theme from '@/styles/theme';
import Modal from '@/components/common/Modal';
import useModalStore from '@/stores/useModalStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

function UserInvitationListEdit() {
  const { title, confirm } = USER_INVITATIONLIST_BUTTON_TEXT;
  const { modalState, openModal } = useModalStore();
  const { closeBottomSheet } = useBottomSheetStore();
  const router = useRouter();

  const onclickdeleteHandler = () => {
    openModal(`${confirm.title}`, `${confirm.message}`);
  };

  const onCliskEditHandler = () => {
    router.push('/invitation/edit');
    closeBottomSheet();
  };

  return (
    <div css={userInvitationListEditStyles}>
      <div css={titleStyles}>{USER_INVITATIONLIST_TEXT.edit}</div>
      <div css={editSheetStyles}>
        <button
          type="button"
          css={editButtonStyles}
          onClick={onCliskEditHandler}
        >
          {title.edit}
        </button>
        <button
          type="button"
          css={deleteButtonStyles}
          onClick={onclickdeleteHandler}
        >
          {title.delete}
        </button>
      </div>
      {modalState.isOpen && (
        <Modal content={USER_INVITATIONLIST_BUTTON_TEXT.title.delete} />
      )}
    </div>
  );
}
const userInvitationListEditStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const titleStyles = css`
  margin-bottom: 20px;
  font: ${theme.font.subTitle.subTitle2_600};
  color: ${theme.palette.title};
`;
const editSheetStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;
const editButtonStyles = css`
  display: flex;
  padding: 16px 24px;
  color: ${theme.palette.greyscale.grey60};
  font: ${theme.font.subTitle.subTitle2_500};
  line-height: 24px;
`;
const deleteButtonStyles = css`
  display: flex;
  padding: 16px 24px;
  color: ${theme.palette.state.danger};
  font: ${theme.font.subTitle.subTitle2_500};
  line-height: 24px;
`;
export default UserInvitationListEdit;
