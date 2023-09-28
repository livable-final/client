import { COMMON_TIME_SELECTOR } from '@/constants/common';
import {
  TimeSelectorProps,
  TimeSelectorColorProps,
} from '@/types/invitation/create';
import { css } from '@emotion/react';
import { useState } from 'react';

function TimeSelector({ content, status }: TimeSelectorProps) {
  // 토글을 통해 가변할 수 있는 variant state 관리
  const [varientState, setVarientState] = useState(status);
  const variantData = COMMON_TIME_SELECTOR[varientState];
  const { abled, enabled, disabled } = COMMON_TIME_SELECTOR;

  const onClickHandler = () => {
    if (varientState === abled.status) {
      setVarientState(enabled.status);
    } else if (varientState === enabled.status) {
      setVarientState(abled.status);
    } else {
      setVarientState(status);
    }
  };

  return (
    <button
      type="button"
      disabled={status === disabled.status}
      css={timeSelectorStyles(variantData)}
      onClick={onClickHandler}
    >
      {content}
    </button>
  );
}

const timeSelectorStyles = (variantData: TimeSelectorColorProps) => css`
  display: flex;
  cursor: pointer;
  font-family: inherit;
  justify-content: center;
  align-items: center;
  width: 84px;
  height: 48px;
  border-radius: 12px;
  padding: 12px 18px;
  font-size: 16px;
  line-height: 24px;
  background: ${variantData.background};
  color: ${variantData.color};
  border: ${variantData.border ? `1px solid ${variantData.border}` : 'none'};

  &:disabled {
    pointer-events: none;
    background: ${variantData.background};
    color: ${variantData.color};
  }
  &:active {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.95);
  }
`;
export default TimeSelector;
