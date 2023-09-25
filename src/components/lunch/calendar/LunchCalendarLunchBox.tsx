import { useState } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarPhoto from '@/components/lunch/calendar/LunchCalendarPhoto';
import usePagesStore from '@/stores/usePagesStore';

function LunchCalendarLunchBox() {
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
      <div css={inputBoxStyles}>
        <Input
          variant="search"
          textarea
          placeholder={category.eatOut.placeholder}
          maxLength={299}
          value={searchText}
          setValue={setSearchText}
        />
      </div>
      <LunchCalendarPhoto />
      <Button variant="blue" content={button.button4.text2} />
    </section>
  );
}

const inputBoxStyles = css`
  margin: 20px 0 16px;
`;

export default LunchCalendarLunchBox;
