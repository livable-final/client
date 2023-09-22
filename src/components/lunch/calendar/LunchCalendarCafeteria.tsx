import { useState } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchPhoto from '@/components/lunch/LunchPhoto';
import LunchRatingButton from '@/components/lunch/LunchRatingButton';
import usePagesStore from '@/stores/usePagesStore';

function LunchCalendarCafeteria() {
  const [searchText, setSearchText] = useState('');
  const { setNextComponent } = usePagesStore();
  const { category, subTitle, button } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {
    setNextComponent('LunchCalendarReview');
  };

  return (
    <section>
      <Header title={category.cafeteria.text} onClick={onClickHeaderHandler} />
      <LunchSubTitle title={subTitle.todayLunch} type="title" />
      <div css={titleStyles}>
        <p>테라타워</p>
      </div>
      <div css={buttonStyles}>
        <LunchRatingButton title={button.button5.good} />
        <LunchRatingButton title={button.button5.bad} />
      </div>
      <div css={inputBoxStyles}>
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
      <Button variant="blue" content={button.button4.text2} />
    </section>
  );
}
const titleStyles = css`
  display: flex;
  justify-content: center;
  margin: 16px 0 12px;
  font: ${theme.font.subTitle.subTitle1_600};
  color: ${theme.palette.title};
`;

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 12px 20px;
`;

const inputBoxStyles = css`
  margin-bottom: 16px;
  p {
    margin-top: 12px;
    font: ${theme.font.subTitle.subTitle2_500};
    color: ${theme.palette.greyscale.grey90};
  }
`;

export default LunchCalendarCafeteria;
