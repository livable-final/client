import theme from '@/styles/theme';
import { RadioBtnProps } from '@/types/common/RadioBtn';
import { css } from '@emotion/react';
import { useState } from 'react';
import RadioCheck from '@/assets/radioBtn/radioCheck.svg';
import RadioUnCheck from '@/assets/radioBtn/radioUnCheck.svg';

function RadioBtn({ list, name }: RadioBtnProps) {
  const [selectData, setSelectData] = useState(list[0]);
  const [etcValue, setEtcValue] = useState('');
  const [isCheck, setIsCheck] = useState(false);

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
            onChange={(e) => {
              setSelectData(e.target.value);
            }}
            readOnly
            css={radioInputStyles}
          />
          <label htmlFor={item} key={item} css={labelStyles}>
            {selectData === item ? (
              <RadioCheck css={btnImgStyles} />
            ) : (
              <RadioUnCheck css={btnImgStyles} />
            )}
            <div>
              <p>{item}</p>
              <p>
                <span>{item}</span>
              </p>
            </div>
          </label>
        </div>
      ))}

      {/* 직접 입력 */}
      <div
        role="presentation"
        onFocus={() => {
          setIsCheck(true);
          setSelectData('');
        }}
        onBlur={() => setIsCheck(false)}
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
            <RadioCheck css={btnImgStyles} />
          ) : (
            <RadioUnCheck css={btnImgStyles} />
          )}
          <div>
            <p>기타 (직접입력)</p>
            <input
              type="text"
              placeholder="입력"
              onChange={(e) => {
                setEtcValue(e.target.value);
              }}
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

  /* 표시용 border, 여백 */
  border: 1px solid;
  margin: 30px 0;

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
