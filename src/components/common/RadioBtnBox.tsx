import theme from '@/styles/theme';
import { RadioBtnBoxProps } from '@/types/common/radioBtn';
import { css } from '@emotion/react';
import { useState } from 'react';
import { CheckOn, UnCheck } from '@/assets/icons';

function RadioBtnBox({ list, name, placeholder }: RadioBtnBoxProps) {
  const [selectData, setSelectData] = useState(list[0]);
  const [etcValue, setEtcValue] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const onChangeRadioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectData(event.target.value);
  };

  const onFocusHandler = () => {
    setIsCheck(true);
    setSelectData(etcValue);
  };

  const onBlurHandler = () => setIsCheck(false);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEtcValue(event.target.value);
    setSelectData(event.target.value);
  };

  return (
    <div css={radioContainerStyles}>
      {list.map((item) => {
        // console.log(selectData === item);
        return (
          <div key={item} css={itemStyles}>
            <label css={labelStyles}>
              <input
                type="radio"
                name={name}
                value={item}
                onChange={onChangeRadioHandler}
                css={radioInputStyles}
              />
              <div css={btnImgStyles}>
                {selectData === item ? <CheckOn /> : <UnCheck />}
              </div>
              <div>
                <p>{item}</p>
              </div>
            </label>
          </div>
        );
      })}
      {/* 직접 입력 */}
      <div
        role="presentation"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        css={itemStyles}
      >
        <label css={labelStyles}>
          <input
            type="radio"
            name={name}
            value={etcValue}
            checked={isCheck}
            readOnly
            css={radioInputStyles}
          />
          <div css={btnImgStyles}>
            {isCheck ? (
              <div css={icon}>
                <CheckOn />
              </div>
            ) : (
              <div css={icon}>
                <UnCheck />
              </div>
            )}
          </div>
          <div css={inputWrapper}>
            <p>기타 (직접입력)</p>
            <input
              type="text"
              placeholder={placeholder}
              onChange={onChangeInputHandler}
              css={etcInputStyles}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

export default RadioBtnBox;

const radioContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;

  span {
    color: ${theme.palette.greyscale.grey40};
  }
  p {
    line-height: 1.4em;
  }
`;

const itemStyles = css`
  width: 100%;
`;

const radioInputStyles = css`
  display: none;

  &:checked + label {
    color: ${theme.palette.primary};

    p {
      color: ${theme.palette.primary};
    }
  }
`;

const btnImgStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  flex-grow: 0;
`;

const icon = css`
  width: 24px;
  height: 24px;
`;

const labelStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const inputWrapper = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const etcInputStyles = css`
  width: 100%;
`;
