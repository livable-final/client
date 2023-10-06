import theme from '@/styles/theme';
import useToggleStore from '@/stores/common/useToggleStore';
import { COMMON_TOGGLE_TITLE } from '@/constants/common';
import { css } from '@emotion/react';

function Toggle() {
  const { isOn, onToggle, offToggle } = useToggleStore();

  // Toggle On
  const onClickOnToggle = () => {
    onToggle();
  };

  // Toggle Off
  const onClickOffToggle = () => {
    offToggle();
  };

  return (
    <label css={toggleSwitchStyles(isOn)}>
      <input
        type="checkbox"
        onClick={isOn ? onClickOffToggle : onClickOnToggle}
        css={checkboxStyles}
      />
      <span css={toggleButtonStyles(isOn)} />
      <span css={contentStyles(isOn)}>{COMMON_TOGGLE_TITLE}</span>
    </label>
  );
}

const toggleSwitchStyles = (isOn: boolean) => css`
  width: 72px;
  padding: 3px;
  height: 32px;
  display: flex;
  position: relative;
  border-radius: 30px;
  border: 1px solid ${theme.palette.white};
  background-color: ${isOn
    ? `${theme.palette.bluescale.blue10}`
    : ` ${theme.palette.greyscale.grey10}`};
  cursor: pointer;
`;

const checkboxStyles = css`
  display: none;
`;

const contentStyles = (isOn: boolean) => css`
  display: flex;
  position: relative;
  right: ${isOn ? 'calc(100% - 44px)' : '-6px'};
  top: 4px;
  font: ${theme.font.body.body3_400};
  color: ${isOn ? theme.palette.primary : theme.palette.greyscale.grey50};
  transition: right 0.4s;
`;

const toggleButtonStyles = (isOn: boolean) => css`
  display: flex;
  width: 26px;
  height: 26px;
  padding: 4px 8px;
  position: relative;
  left: ${isOn ? 'calc(100% - 28px)' : '0px'};
  bottom: 1px;
  border-radius: 100%;
  background: ${theme.palette.white};
  transition: left 0.6s;
`;

export default Toggle;
