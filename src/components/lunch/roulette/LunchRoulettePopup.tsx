import { useCallback } from 'react';
import { css } from '@emotion/react';
import useRouletteStore from '@/stores/useRouletteStore';
import { postMenu } from '@/pages/api/lunch/lunchRequests';
import createHyphenDate from '@/utils/createHyphenDate';
import { ErrorProps } from '@/types/common/response';
import useAlertStore from '@/stores/useAlertStore';
import Alert from '@/components/common/Alert';
import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { LUNCH_ROULETTE_CONSTANTS } from '@/constants/lunch';

// 룰렛 팝업 렌딩 컴포넌트
function LunchRoulettePopup() {
  const { popup } = LUNCH_ROULETTE_CONSTANTS;
  const { isOperated, isAgain } = useRouletteStore();
  const { setState } = useRouletteStore;
  const { menuIdState } = useRouletteStore();
  const { alertState, openAlert } = useAlertStore();

  // 클릭 시 POST API CALL
  const onClickHandler = useCallback(async () => {
    const content = { menuId: menuIdState, date: createHyphenDate(new Date()) };
    setState({ isSelected: true });

    try {
      await postMenu(content);
    } catch (err: unknown) {
      const error = err as ErrorProps;
      openAlert('📣', error.message);
    }
  }, [menuIdState, openAlert, setState]);

  return (
    <section css={containerStyles}>
      <button type="button" onClick={onClickHandler} css={popupStyles}>
        {alertState.isOpen && <Alert />}
        {isOperated && isAgain && (
          <div css={wrapperStyles}>
            <span css={spanStyles}>{popup}</span>
          </div>
        )}
      </button>
      <div css={iconStyles}>
        <Icons icon="popup" color="#FFAC6F" />
      </div>
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
  justify-content: center;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
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
