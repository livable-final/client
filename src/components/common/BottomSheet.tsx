import { css } from '@emotion/react';
import { BottomSheetProps } from '@/types/common/bottomSheet';
import theme from '@/styles/theme';
import Button from '@/components/common/Button';
import useBottomSheetStore from '@/stores/useBottomSheetStore';

function BottomSheet({ onClick }: BottomSheetProps) {
  const { bottomSheetState, closeBottomSheet } = useBottomSheetStore();
  const { isOpen } = bottomSheetState;

  // 바텀시트 바깥쪽 누를 때 닫기
  const onClickBackgroundHandler = (
    e: React.MouseEvent<HTMLDivElement> | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (e.target === e.currentTarget) {
      closeBottomSheet();
    }
  };

  return (
    <div
      css={backgroundStyles(isOpen)}
      onClick={onClickBackgroundHandler}
      onKeyDown={onClickBackgroundHandler}
      role="button"
      tabIndex={0}
    >
      <div css={containerStyles(isOpen)}>
        {bottomSheetState.content}
        <div css={buttonWrapperStyles}>
          <Button content="저장" variant="blue" onClick={onClick} />
        </div>
      </div>
    </div>
  );
}

const backgroundStyles = (isOpen: boolean) => css`
  display: ${isOpen ? 'block' : 'none'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background-color: ${isOpen ? `rgba(0, 0, 0, 0.3)` : `none`};
`;

const containerStyles = (isOpen: boolean) => css`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 28px;
  border: 1px solid ${theme.palette.greyscale.grey20};
  border-radius: 20px 20px 0 0;
  width: 100%;
  min-height: 400px;
  height: auto;
  background-color: ${theme.palette.white};
  animation: ${isOpen
    ? `bottomSheetUp 800ms ease-out`
    : `bottomSheetDown 800ms ease-out`};
  z-index: 1;

  @keyframes bottomSheetUp {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(0);
    }
  }

  @keyframes bottomSheetDown {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(100%);
    }
  }
`;

const buttonWrapperStyles = css`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 0 16px;
  margin-bottom: 30px;
`;
export default BottomSheet;
