import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';
import useSaveStore from '@/stores/useSaveStore';
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
        <div css={iconWrapper}>
          {isSelect ? (
            <Icons icon="check" color={theme.palette.primary} />
          ) : (
            <Icons icon="check" color={theme.palette.greyscale.grey20} />
          )}
        </div>
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
      font: ${theme.font.body.body1_400};
      color: ${isSelect
        ? theme.palette.primary
        : theme.palette.greyscale.grey40};
    }
  }
`;

const iconWrapper = css`
  width: 20px;
  height: 20px;
  margin-right: 4px;
`;
