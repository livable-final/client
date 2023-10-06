import useRouletteStore from '@/stores/useRouletteStore';
import useFetch from '@/hooks/useFetch';
import { getRestList } from '@/pages/api/lunch/lunchRequests';
import LunchRest from '@/components/lunch/LunchRest';
import { css } from '@emotion/react';
import { LunchRestListProps } from '@/types/lunch/reviewList';

function LunchReviewRestList({ onClick }: LunchRestListProps) {
  const { menuIdState } = useRouletteStore();
  const { setState } = useRouletteStore;
  const onClickHandler = () => {
    setState({ isDecided: false });
  };
  const { response } = useFetch({
    fetchFn: () => getRestList(menuIdState),
    onClick: onClickHandler,
  });

  return (
    <div css={wrapperStyles}>
      {response?.data.map((item) => (
        <button
          type="button"
          key={item.restaurantId}
          onClick={() => onClick(item)}
        >
          <LunchRest key={item.restaurantId} {...item} />
        </button>
      ))}
    </div>
  );
}

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default LunchReviewRestList;
