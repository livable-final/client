import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { CheckOn, UnCheck } from '@/assets/icons';
// import { RadioBtnProps } from '@/types/common/radioBtn';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

export interface RadioBtnProps {
  content?: string;
  select?: string;
  isEtc?: boolean;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

function RadioBtn({
  content,
  select,
  isEtc,
  placeholder,
  onChange,
}: RadioBtnProps) {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  // 선택한 값이 바뀔 때 마다 체크 상태 변경
  useEffect(() => {
    if (select === content) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [select]);

  return !isEtc ? (
    <label css={containerStyles}>
      <input
        type="radio"
        value={content}
        css={defaultRadioStyles}
        checked={select === content}
        readOnly
      />
      <div css={iconWrapper}>
        {isChecked ? (
          <div css={checkIcon}>
            <CheckOn />
          </div>
        ) : (
          <div css={uncheckIcon}>
            <UnCheck />
          </div>
        )}
      </div>
      <div css={contentStyles(isChecked)}>{content}</div>
    </label>
  ) : (
    <label css={containerStyles}>
      <input
        type="radio"
        value={content}
        css={defaultRadioStyles}
        checked={select === content}
        readOnly
      />
      <div css={iconWrapper}>
        {isChecked ? (
          <div css={checkIcon}>
            <CheckOn />
          </div>
        ) : (
          <div css={uncheckIcon}>
            <UnCheck />
          </div>
        )}
      </div>
      <div css={contentWrapperStyles}>
        <div css={contentStyles(isChecked)}>{content}</div>
        <input
          css={inputTextStyles}
          type="text"
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </label>
  );
}

const containerStyles = css`
  display: flex;
  gap: 8px;
  cursor: pointer;
`;

const defaultRadioStyles = css`
  display: none;
  max-width: 20px;
  max-height: 20px;

  /* 기본 라디오 스타일 제거 */
  vertical-align: middle;
  appearance: none;
  border: none;
`;

const iconWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
`;

const checkIcon = css`
  width: 100%;
  height: 100%;
  margin: -2px 0 2px -4px;
`;

const uncheckIcon = css`
  width: 100%;
  height: 100%;
`;

const contentStyles = (isChecked: boolean) => css`
  display: flex;
  font: ${theme.font.subTitle.subTitle1_400};
  color: ${isChecked ? theme.palette.primary : theme.palette.greyscale.grey90};
`;

const contentWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const inputTextStyles = css`
  width: 100%;
`;
export default RadioBtn;
