import { css } from '@emotion/react';
import { CameraFlash } from '@/assets/icons';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useSaveStore from '@/stores/useSaveStore';
import { useState } from 'react';

function LunchCalendarBottomSheet() {
  const [isChecked, setIsChecked] = useState(false);
  const { setIsSavePhotoMsg } = useSaveStore();
  const { closeBottomSheet } = useBottomSheetStore();

  const { subTitle, button } = CALENDAR_CONTENT;
  const { home } = COMMON_ICON_NAMES;

  const onClicBtnHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    type: string,
  ) => {
    e.preventDefault();
    e.stopPropagation();

    if (type === 'message') {
      setIsChecked(!isChecked);
    } else if (type === 'photo') {
      if (isChecked) {
        setIsSavePhotoMsg();
      }
      closeBottomSheet();
    } else {
      // 작성완료 로직 추가
    }
  };

  return (
    <section css={SheetStyles}>
      <div css={textStyles}>
        <strong>{subTitle.bottomSheet}</strong>
        <button
          type="button"
          onClick={(e) => onClicBtnHandler(e, 'message')}
          css={textBtnStyles(isChecked)}
        >
          <span>{button.button7.text}</span>
          <Icons
            icon={home.check}
            size="16.67px"
            color={
              !isChecked
                ? `${theme.palette.greyscale.grey20}`
                : `${theme.palette.bluescale.blue50}`
            }
          />
        </button>
      </div>
      <CameraFlash />
      <div css={btnBoxStyles}>
        <button
          type="button"
          onClick={(e) => onClicBtnHandler(e, 'submit')}
          css={btnStyles}
        >
          <span>{button.button8.text1}</span>
        </button>
        <button
          type="button"
          onClick={(e) => onClicBtnHandler(e, 'photo')}
          css={btnStyles}
        >
          <span>{button.button8.text2}</span>
        </button>
      </div>
    </section>
  );
}

const SheetStyles = css`
  display: flex;
  flex-direction: column;
  gap: 36px;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const textStyles = css`
  display: flex;
  flex-direction: column;
  align-self: start;
`;

const textBtnStyles = (isChecked: boolean) => css`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-top: 7px;
  text-align: start;
  cursor: pointer;
  font: ${theme.font.body.body2_400};
  color: ${!isChecked
    ? `${theme.palette.greyscale.grey40}`
    : `${theme.palette.bluescale.blue50}`};
`;

const btnBoxStyles = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  cursor: pointer;
`;

const btnStyles = css`
  padding: 16px 0;
  &:active {
    color: ${theme.palette.primary};
  }
`;

export default LunchCalendarBottomSheet;
