import { COMMON_TIME_SELECTOR } from '@/constants/common';
import {
  TimeSelectorProps,
  TimeSelectorColorProps,
} from '@/types/invitation/create';
import { css } from '@emotion/react';
import React, { useState } from 'react';
import useTimeSelectorStore from '@/stores/useTimeSelectorStore';
import theme from '@/styles/theme';

function TimeSelector({ content, status }: TimeSelectorProps) {
  // content "00:00" 문자열

  // 토글을 통해 가변할 수 있는 variant state 관리
  const [varientState, setVarientState] = useState(status);
  const [time] = useState(content);

  const variantData = COMMON_TIME_SELECTOR[varientState];

  const { setSelectTime } = useTimeSelectorStore();
  const { abled, enabled, disabled } = COMMON_TIME_SELECTOR;

  const onClickHandler = () => {
    // 선택시 버튼 상태 변경
    // abled 선택 가능 / enabled 선택 / disabled 선택 불가
    if (varientState === abled.status) {
      setVarientState(enabled.status);
    } else if (varientState === enabled.status) {
      setVarientState(abled.status);
    } else {
      setVarientState(status);
    }
    // 선택 시간 저장
    setSelectTime(time);
  };

  return (
    <button
      type="button"
      disabled={varientState === disabled.status}
      css={timeSelectorStyles(variantData)}
      onClick={onClickHandler}
    >
      {time}
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
  font: ${theme.font.body.body1_400};
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

export default React.memo(TimeSelector);
