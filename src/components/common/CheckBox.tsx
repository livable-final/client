import { Check, UnCheck } from '@/assets/icons';
import theme from '@/styles/theme';
import { CheckBoxProps } from '@/types/common/checkBox';
import { css } from '@emotion/react';
import { useState } from 'react';

function CheckBox({ text }: CheckBoxProps) {
  const [isSelect, setIsSelect] = useState<boolean>(false);

  return (
    <div css={checkBoxContainerStyles(isSelect)}>
      <input
        id={text}
        type="checkbox"
        checked={isSelect}
        onChange={() => {
          setIsSelect(!isSelect);
        }}
      />
      <label htmlFor={text}>
        {isSelect === true ? (
          <Check css={btnImgStyles} />
        ) : (
          <UnCheck css={btnImgStyles} />
        )}
        <p>{text}</p>
      </label>
    </div>
  );
}

export default CheckBox;

const checkBoxContainerStyles = (isSelect: boolean) => css`
  input {
    display: none;

    &:checked + label {
      color: ${theme.palette.primary};
    }
  }

  label {
    display: flex;
    align-items: center;

    p {
      color: ${isSelect
        ? theme.palette.primary
        : theme.palette.greyscale.grey40};
    }
  }
`;

const btnImgStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  margin-right: 4px;
  flex-grow: 0;
`;
