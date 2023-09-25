import { useState } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import BottomSheet from '@/components/common/BottomSheet';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarPhoto from '@/components/lunch/calendar/LunchCalendarPhoto';
import LunchCalendarBottomSheet from '@/components/lunch/calendar/LunchCalendarBottomSheet';
import usePagesStore from '@/stores/usePagesStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useSaveStore from '@/stores/useSaveStore';

function LunchCalendarLunchBox() {
  const [searchText, setSearchText] = useState('');
  const { setNextComponent } = usePagesStore();
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { isSave } = useSaveStore();
  const { category, subTitle, button } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {
    setNextComponent('LunchCalendarReview');
  };

  const onClickBtnHandler = () => {
    if (!isSave.PhotoMsg) {
      openBottomSheet(<LunchCalendarBottomSheet />);
    } else {
      // isSave.PhotoMsg가 참일 때
    }
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
      <Button
        variant="blue"
        content={button.button4.text2}
        onClick={onClickBtnHandler}
      />
      {bottomSheetState.isOpen && !isSave.PhotoMsg && <BottomSheet />}
    </section>
  );
}

const inputBoxStyles = css`
  margin: 20px 0 16px;
`;

export default LunchCalendarLunchBox;
