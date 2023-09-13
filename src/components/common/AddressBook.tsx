import { css } from '@emotion/react';
import { RightSmall } from '@/assets/icons';
import theme from '@/styles/theme';

function AddressBook() {
  return (
    <div css={addressTextStyles}>
      <div>주소록에서 찾기</div>
      <button
        type="button"
        css={iconStyles}
        onClick={() => alert('주소록 찾기 테스트')}
      >
        <RightSmall />
      </button>
    </div>
  );
}

const addressTextStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
