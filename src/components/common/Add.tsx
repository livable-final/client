import theme from '@/styles/theme';
import PlusBig from '@/assets/icons/Plus=big.svg';
import PlusSmall from '@/assets/icons/Plus=small.svg';
import { css } from '@emotion/react';
import { AddBtnProps } from '@/types/common/add';

function Add({ isBlue = false, onClick }: AddBtnProps) {
  return (
    <button
      type="button"
      css={isBlue ? addBtnBlueStyles : addBtnGreyStyles}
      onClick={onClick}
    >
      {isBlue ? (
        <div css={textWrapperStyles}>
          <div>추가</div>
          <div css={iconStyles}>
            <PlusSmall />
          </div>
        </div>
      ) : (
        <PlusBig />
      )}
    </button>
  );
}

const addBtnGreyStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 92px;
  height: 52px;
  border: 1px solid ${theme.palette.greyscale.grey10};
  border-radius: 100px;
  background-color: transparent;
  cursor: pointer;
`;

const addBtnBlueStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 103px;
  height: 42px;
  border: 1px solid ${theme.palette.primary};
  border-radius: 100px;
  font: ${theme.font.body.body2_400};
  color: ${theme.palette.primary};
  line-height: 22px;
  cursor: pointer;
`;

const textWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const iconStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18px;
  height: 18px;
  margin-bottom: 2px;
`;

export default Add;
