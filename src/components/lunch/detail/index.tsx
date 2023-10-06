import theme from '@/styles/theme';
import { css } from '@emotion/react';
import Header from '@/components/common/Header';
import ToWrite from '@/components/common/ToWrite';
import usePagesStore from '@/stores/common/usePagesStore';
import useLunchReviewStore from '@/stores/lunch/useLunchReviewStore';
import { LUNCH_MAIN_CONSTANTS } from '@/constants/lunch';
import LunchReview from '@/components/lunch/review/LunchReview';
import LunchDetailContents from '@/components/lunch/detail/LunchDetailContents';

//  리뷰 상세 컴포넌트
function LunchDetail() {
  const { title } = LUNCH_MAIN_CONSTANTS.review; // '리뷰'
  const { reviewList } = useLunchReviewStore(); // ReviewStore에 저장된 리뷰 리스트
  const { setNextComponent } = usePagesStore(); //
  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <section>
      <Header title={title} onClick={onClickHandler} />
      {reviewList.hasReview && (
        <div css={wrapperStyles}>
          <LunchReview {...reviewList} />
        </div>
      )}
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
