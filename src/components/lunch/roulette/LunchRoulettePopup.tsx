import { Popup } from '@/assets/icons';
import Alert from '@/components/common/Alert';
import useAlertStore from '@/stores/useAlertStore';
import useRouletteStore from '@/stores/useRouletteStore';
import { css } from '@emotion/react';

function LunchRoulettePopup() {
  const { isOperated, isAgain } = useRouletteStore();
  const { setState } = useRouletteStore;
  const { alertState, openAlert } = useAlertStore();

  const onClickHandler = () => {
    setState({ isSelected: false });
    openAlert('타이틀', '내용');
  };

  return (
    <>
      <button type="button" onClick={onClickHandler} css={popupStyles}>
        {isOperated && isAgain && <Popup />}
      </button>
      {alertState.isOpen && <Alert />}
    </>
  );
}

const popupStyles = css`
  display: flex;
  justify-content: center;
`;

export default LunchRoulettePopup;
