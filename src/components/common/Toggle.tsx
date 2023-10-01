import { COMMON_TOGGLE_TITLE } from '@/constants/common';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState } from 'react';

function Toggle() {
  const [isActive, setIsActive] = useState(false);
  const onClick = () => {
    setIsActive((prev) => !prev);
  };
  return (
    <label css={toggleSwitchStyles(isActive)}>
      <input type="checkbox" onClick={onClick} css={checkboxStyles} />
      <span css={toggleButtonStyles(isActive)} />
      <span css={contentStyles(isActive)}>{COMMON_TOGGLE_TITLE}</span>
    </label>
  );
}

const toggleSwitchStyles = (isActive: boolean) => css`
  width: 72px;
  padding: 3px;
  height: 32px;
  display: flex;
  position: relative;
  border-radius: 30px;
  border: 1px solid ${theme.palette.white};
  background-color: ${isActive
    ? `${theme.palette.bluescale.blue10}`
    : ` ${theme.palette.greyscale.grey10}`};
  cursor: pointer;
`;

const checkboxStyles = css`
  display: none;
`;

const contentStyles = (isActive: boolean) => css`
  display: flex;
  position: relative;
  right: ${isActive ? 'calc(100% - 44px)' : '-6px'};
  top: 4px;
  font: ${theme.font.body.body3_400};
  color: ${isActive ? theme.palette.primary : theme.palette.greyscale.grey50};
  transition: right 0.4s;
`;

const toggleButtonStyles = (isActive: boolean) => css`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 4px 8px;
  position: relative;
  left: ${isActive ? 'calc(100% - 28px)' : '0px'};
  bottom: 1px;
  border-radius: 100%;
  background: ${theme.palette.white};
  transition: left 0.6s;
`;

export default Toggle;
