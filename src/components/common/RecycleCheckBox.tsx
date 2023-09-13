import { Check, UnCheck } from '@/assets/icons';
import theme from '@/styles/theme';
import { RecycleCheckBoxProps } from '@/types/common/recycleCheckBox';
import { css } from '@emotion/react';
import { useState } from 'react';

function RecycleCheckBox({ text }: RecycleCheckBoxProps) {
  const [selectData, setSelectData] = useState(false);
  return (
    <div css={checkBoxContainerStyles}>
      <input
        id={text}
        type="checkbox"
        checked={selectData}
        onChange={() => {
          setSelectData(!selectData);
        }}
      />
      <label htmlFor={text}>
        {selectData === true ? (
          <Check css={btnImgStyles} />
        ) : (
          <UnCheck css={btnImgStyles} />
        )}
        <p>{text}</p>
      </label>
    </div>
  );
}

export default RecycleCheckBox;

const checkBoxContainerStyles = css`
  input {
    display: none;

    &:checked + label {
      color: ${theme.palette.primary};
    }
  }

  label {
    display: flex;
    align-items: center;
  }
`;

const btnImgStyles = css`
  width: 20px;
  height: 20px;
  margin: 2px;
  margin-right: 10px;
  flex-grow: 0;
`;
