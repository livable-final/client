import Header from '@/components/common/Header';
import usePagesStore from '@/stores/usePagesStore';
import LunchDetailContents from '@/components/lunch/detail/LunchDetailContents';
import LunchReview from '@/components/lunch/review/LunchReview';
import useReviewStore from '@/stores/useReviewStore';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import ToWrite from '@/components/common/ToWrite';

function LunchDetail() {
  const { title } = LUNCH_MAIN_CONSTANTS.review;
  const { setNextComponent } = usePagesStore();
  const { reviewList } = useReviewStore();
  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <section>
      <Header title={title} onClick={onClickHandler} />
      <div css={wrapperStyles}>
        <LunchReview {...reviewList} />
      </div>
      <div css={dividerStyles} />
      <LunchDetailContents />
      <ToWrite />
    </section>
  );
}

const wrapperStyles = css`
  margin: 0 -16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-self: stretch;
  background: ${theme.palette.white};
`;

const dividerStyles = css`
  margin: 0 -16px;
  height: 12px;
  background: ${theme.palette.greyscale.grey5};
`;

export default LunchDetail;
