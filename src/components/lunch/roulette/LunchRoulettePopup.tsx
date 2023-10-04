import { useCallback, useState } from 'react';
import { css } from '@emotion/react';
import useRouletteStore from '@/stores/useRouletteStore';
import { postMenu } from '@/pages/api/lunch/lunchRequests';
import createHyphenDate from '@/utils/createHyphenDate';
import { ErrorProps } from '@/types/common/response';
import useAlertStore from '@/stores/useAlertStore';
import Alert from '@/components/common/Alert';
import theme from '@/styles/theme';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';
import { Popup, PopupActive } from '@/assets/icons';

// 룰렛 팝업 렌딩 컴포넌트
function LunchRoulettePopup() {
  const { popup } = LUNCH_ROULETTE_CONSTANTS;
  const { isOperated, isAgain, isDecided } = useRouletteStore();
  const { setState } = useRouletteStore;
  const { menuIdState } = useRouletteStore();
  const { alertState, openAlert } = useAlertStore();
  const [isActive, setIsActive] = useState(false);

  // 클릭 시 POST API CALL
  const onClickHandler = useCallback(async () => {
    const content = { menuId: menuIdState, date: createHyphenDate(new Date()) };
    setState({ isSelected: true });

    try {
      await postMenu(content);
    } catch (err: unknown) {
      const error = err as ErrorProps;
      openAlert('📣', error.message);
    } finally {
      setState({ isDecided: true }); // 메뉴 결정 완료
    }
  }, [menuIdState, openAlert, setState]);

  // 마우스 클릭 버튼을 누를 때 이벤트 핸들러
  const onPressHandler = () => {
    setIsActive((prev) => !prev);
  };

  // 마우스 클릭 버튼을 뗄 때 이벤트 핸들러
  const onReleaseHandler = () => {
    setIsActive((prev) => !prev);
  };

  return (
    <section css={containerStyles}>
      <button
        type="button"
        onMouseDown={onPressHandler}
        onMouseUpCapture={onReleaseHandler}
        onClick={onClickHandler}
        css={popupStyles}
        disabled={isDecided}
      >
        {alertState.isOpen && <Alert />}
        {isOperated && isAgain && (
          <>
            <div css={wrapperStyles}>
              <span css={spanStyles}>{popup}</span>
            </div>
            <div css={iconStyles}>{isActive ? <PopupActive /> : <Popup />}</div>
          </>
        )}
      </button>
    </section>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const popupStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  border: 2px solid ${theme.palette.orange};
  background: ${theme.palette.white};
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);

  &:active {
    background: ${theme.palette.popup.orange};
  }
`;

const spanStyles = css`
  padding: 12px 24px;
  font: ${theme.font.etc.roulettePopup};
  background: ${theme.palette.popup.orange};
  line-height: 30px;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  white-space: pre-line;

  &:active {
    background-clip: text;
    background: ${theme.palette.white};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const iconStyles = css`
  display: flex;
  justify-content: center;
`;
export default LunchRoulettePopup;
