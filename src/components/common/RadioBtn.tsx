import theme from '@/styles/theme';
import { RadioBtnProps } from '@/types/common/radioBtn';
import { css } from '@emotion/react';
import { useState } from 'react';
import { Check, UnCheck } from '@/assets/icons';

function RadioBtn({ list, name, placeholder }: RadioBtnProps) {
  const [selectData, setSelectData] = useState(list[0]);
  const [etcValue, setEtcValue] = useState('');
  const [isCheck, setIsCheck] = useState(false);

  // selectData 값이 변경되는 것을 확인하는 콘솔로그

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
            {selectData === item ? (
              <Check css={btnImgStyles} />
            ) : (
              <UnCheck css={btnImgStyles} />
            )}
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
          {isCheck ? (
            <Check css={btnImgStyles} />
          ) : (
            <UnCheck css={btnImgStyles} />
          )}
          <div>
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
  width: 100%;

  span {
    color: ${theme.palette.greyscale.grey40};
  }

  p {
    line-height: 1.4em;
  }
`;

const itemStyles = css`
  margin: 10px;
`;

const radioInputStyles = css`
  display: none;

  &:checked + label {
    color: ${theme.palette.primary};
    span {
      color: ${theme.palette.primary};
    }
  }
`;

const btnImgStyles = css`
  width: 20px;
  height: 20px;
  margin: 2px;
  margin-right: 10px;
  flex-grow: 0;
`;

const labelStyles = css`
  display: flex;
  flex-wrap: wrap;

  div {
    flex-grow: 1;
  }
`;

const etcInputStyles = css`
  margin-top: 10px;
  max-width: 100%;
`;
