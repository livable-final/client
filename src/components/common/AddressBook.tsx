import Alert from '@/components/common/Alert';
import useAlertStore from '@/stores/common/useAlertStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { RightSmall } from '@/assets/icons';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { ErrorMessageProps } from '@/types/common/errorMessage';

function AddressBook() {
  const { alertState, openAlert } = useAlertStore();
  const { prepare }: ErrorMessageProps = COMMON_ERROR_MESSAGE;

  const onClick = () => {
    openAlert('🔧', prepare);
  };

  return (
    <button type="button" css={addressTextStyles} onClick={onClick}>
      <div>주소록에서 찾기</div>
      <div css={iconStyles}>
        <RightSmall />
      </div>
      {alertState.isOpen && <Alert />}
    </button>
  );
}

const addressTextStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 110px;
  cursor: pointer;

  div {
    font: ${theme.font.body.body3_500};
    color: ${theme.palette.input.unabled};
    line-height: 21px;
  }
`;

const iconStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

export default AddressBook;
