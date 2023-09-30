import theme from '@/styles/theme';
import useSaveStore from '@/stores/useSaveStore';
import { Check, UnCheck } from '@/assets/icons';
import { CheckBoxProps } from '@/types/common/checkBox';
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';

function CheckBox({ text }: CheckBoxProps) {
  const { visit, setIsSaveVisitMsg } = useSaveStore();
  const [isSelect, setIsSelect] = useState<boolean>(visit.visitMsg);

  // 체크 상태 변경
  const onChange = () => {
    setIsSelect(!isSelect);
  };

  // 체크 상태에 따른 스토어 변경
  useEffect(() => {
    if (isSelect) {
      setIsSaveVisitMsg(true);
    } else {
      setIsSaveVisitMsg(false);
    }
  }, [isSelect, setIsSaveVisitMsg]);

  return (
    <div css={checkBoxContainerStyles(isSelect)}>
      <input id={text} type="checkbox" checked={isSelect} onChange={onChange} />
      <label htmlFor={text}>
        {isSelect ? (
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
