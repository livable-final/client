import theme from '@/styles/theme';
import { RadioBtnProps } from '@/types/common/radioBtn';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Check, UnCheck } from '@/assets/icons';

function RadioBtn({ list, name, placeholder }: RadioBtnProps) {
  const [selectData, setSelectData] = useState(list[0]);
  const [etcValue, setEtcValue] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  const onChangeRadioHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setSelectData(event.target.value);
  };

  const onFocusHandler = () => {
    setIsCheck(true);
    setSelectData(etcValue);
  };

  const onBlurHandler = () => setIsCheck(false);

  const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setEtcValue(event.target.value);
    setSelectData(event.target.value);
  };
  return (
    <div css={radioContainerStyles}>
      {list.map((item) => (
        <div key={item} css={itemStyles}>
          <input
            id={item}
            type="radio"
            name={name}
            value={item}
            checked={selectData === item}
            onChange={onChangeRadioHandler}
            readOnly
            css={radioInputStyles}
          />
          <label htmlFor={item} key={item} css={labelStyles}>
            <div css={btnImgStyles}>
              {selectData === item ? <Check /> : <UnCheck />}
            </div>
            <div>
              <p>{item}</p>
            </div>
          </label>
        </div>
      ))}
      {/* 직접 입력 */}
      <div
        role="presentation"
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
        css={itemStyles}
      >
        <input
          id={etcValue}
          type="radio"
          name={name}
          value={etcValue}
          checked={isCheck}
          readOnly
          css={radioInputStyles}
        />
        <label htmlFor={etcValue} css={labelStyles}>
          <div css={btnImgStyles}>
            {isCheck ? (
              <div css={icon}>
                <Check />
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

export default RadioBtn;

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
  width: 20px;
  height: 20px;
  flex-grow: 0;
`;

const icon = css`
  width: 100%;
  height: 100%;
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
