import { COMMON_TOGGLE_TITLE } from '@/constants/common';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState } from 'react';

function Toggle() {
  const [isActive, setIsActive] = useState(false);

  return (
    <label
      htmlFor="toggle"
      className={`toggleSwitch ${isActive && 'active'}`}
      css={toggleSwitchStyles}
    >
      <span css={contentStyles(isActive)}>{COMMON_TOGGLE_TITLE}</span>
      <input
        type="checkbox"
        id="toggle"
        onClick={() => setIsActive(!isActive)}
        css={checkboxStyles}
      />
      <span css={toggleButtonStyles(isActive)} />
    </label>
  );
}

const toggleSwitchStyles = css`
  width: 72px;
  padding: 3px;
  height: 32px;
  display: block;
  position: relative;
  border-radius: 30px;
  border: 1px solid ${theme.palette.white};
  background-color: ${theme.palette.greyscale.grey10};
  cursor: pointer;

  &.active {
    background: ${theme.palette.bluescale.blue10};

    .toggleButton {
      left: calc(100% - 40px);
    }
  }
  .toggleButton {
    background: #fff;
  }
`;

const checkboxStyles = css`
  display: none;
`;

const contentStyles = (isActive: boolean) => css`
  position: absolute;
  top: 25%;
  right: ${isActive ? 'calc(100% - 36px)' : '12px'};
  font: ${theme.font.body.body3_400};
  color: ${isActive ? theme.palette.primary : theme.palette.greyscale.grey50};
  transition: right 0.4s;
`;

const toggleButtonStyles = (isActive: boolean) => css`
  width: 26px;
  height: 26px;
  padding: 4px 8px;
  position: absolute;
  top: 50%;
  left: ${isActive ? 'calc(100% - 28px)' : '2px'};
  transform: translateY(-50%);
  border-radius: 50%;
  background: ${theme.palette.white};
  transition: left 0.6s;
`;

export default Toggle;
