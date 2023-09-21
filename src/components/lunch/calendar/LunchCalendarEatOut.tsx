import { useState } from 'react';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchRatingButton from '@/components/lunch/LunchRatingButton';
import LunchReviewCategory from '@/components/lunch/LunchReviewCategory';
import LunchPhoto from '@/components/lunch/LunchPhoto';
import usePagesStore from '@/stores/usePagesStore';

function LunchCalenderEatOut() {
  const [searchText, setSearchText] = useState('');
  const { setNextComponent } = usePagesStore();
  const { subTitle, category, button } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {
    setNextComponent('LunchCalendarReview');
  };

  return (
    <section>
      <Header title={category.eatOut.text} onClick={onClickHeaderHandler} />
      <LunchSubTitle title={subTitle.todayLunch} type="title" />
      <div css={reviewStyles}>
        <div css={textStyles}>
          <strong>식당 이름</strong>
          <p>식당 메뉴</p>
        </div>
        <div css={ratingStyles}>
          <LunchRatingButton title={button.button5.good} />
          <LunchRatingButton title={button.button5.bad} />
        </div>
        <div>
          <LunchReviewCategory title={category.eatOut.subCategory.amount} />
          <LunchReviewCategory title={category.eatOut.subCategory.speed} />
          <LunchReviewCategory title={category.eatOut.subCategory.service} />
        </div>
      </div>
      <div css={textReviewStyles}>
        <p>{subTitle.review}</p>
        <Input
          variant="search"
          textarea
          placeholder={category.eatOut.placeholder}
          maxLength={299}
          value={searchText}
          setValue={setSearchText}
        />
      </div>
      <LunchPhoto />
      <Button content={button.button4.text2} variant="blue" />
    </section>
  );
}

const reviewStyles = css`
  margin: 16px 0 20px;
  padding: 16px 20px;
`;

const textStyles = css`
  text-align: center;

  strong {
    font: ${theme.font.subTitle.subTitle1_600};
    color: ${theme.palette.greyscale.grey90};
  }

  p {
    font: ${theme.font.body.body2_400};
    color: ${theme.palette.greyscale.grey60};
  }
`;

const ratingStyles = css`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 12px 0;
  padding: 12px 0;
`;

const textReviewStyles = css`
  margin: 20px 0 16px;
  p {
    margin-bottom: 12px;
    font: ${theme.font.subTitle.subTitle2_500};
    color: ${theme.palette.greyscale.grey90};
  }
`;

export default LunchCalenderEatOut;
