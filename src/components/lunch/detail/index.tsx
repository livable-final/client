import Header from '@/components/common/Header';
import usePagesStore from '@/stores/usePagesStore';
import LunchDetailContents from '@/components/lunch/detail/LunchDetailContents';
import LunchReview from '@/components/lunch/review/LunchReview';
import useReviewStore from '@/stores/useReviewStore';
import { css } from '@emotion/react';
import theme from '@/styles/theme';

function LunchDetail() {
  const { setNextComponent } = usePagesStore();
  const { reviewList } = useReviewStore();
  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <section>
      <Header title="리뷰" onClick={onClickHandler} />
      <div css={wrapperStyles}>
        <LunchReview {...reviewList} />
      </div>
      <div css={dividerStyles} />
      <LunchDetailContents />
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
  padding-right: 16px;
`;

const dividerStyles = css`
  margin: 0 -16px;
  height: 12px;
  background: ${theme.palette.greyscale.grey5};
`;

export default LunchDetail;
