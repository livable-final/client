import { Popup } from '@/assets/icons';
import { postMenu } from '@/pages/api/lunch/lunchRequests';
import useBuildingStore from '@/stores/useBuildingStore';
import useRouletteStore from '@/stores/useRouletteStore';
import { css } from '@emotion/react';
import { useCallback } from 'react';

function LunchRoulettePopup() {
  const { isOperated, isAgain } = useRouletteStore();
  const { setState } = useRouletteStore;
  const { menuIdState } = useRouletteStore();
  const { buildingId } = useBuildingStore();

  const onClickHandler = useCallback(async () => {
    const content = { buildingId, menuId: menuIdState, date: '2023-10-01' };
    setState({ isSelected: true });
    await postMenu(content);
  }, [buildingId, menuIdState, setState]);

  return (
    <button type="button" onClick={onClickHandler} css={popupStyles}>
      {isOperated && isAgain && <Popup />}
    </button>
  );
}

const popupStyles = css`
  display: flex;
  justify-content: center;
`;

export default LunchRoulettePopup;
