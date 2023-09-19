import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchPhoto from '@/components/lunch/LunchPhoto';

function LunchCalendarLunchBox() {
  const { category, subTitle } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {};

  return (
    <section>
      <Header title={category.cafeteria.text} onClick={onClickHeaderHandler} />
      <LunchSubTitle title={subTitle.todayLunch} type="title" />
      <div css={inputBoxStyles}>
        <Input
          variant="search"
          textarea
          placeholder={category.eatOut.placeholder}
          maxLength={299}
        />
      </div>
      <LunchPhoto />
    </section>
  );
}

const inputBoxStyles = css`
  margin: 20px 0 16px;
`;

export default LunchCalendarLunchBox;
