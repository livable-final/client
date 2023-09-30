import { useState } from 'react';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { postLunchBoxReview } from '@/pages/api/lunch/calendarRequests';
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
import useWriteStore from '@/stores/useWriteStore';

function LunchCalendarLunchBox() {
  const [searchText, setSearchText] = useState('');
  const { setNextComponent } = usePagesStore();
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { isSave } = useSaveStore();
  const { imageFiles } = useWriteStore();
  const { category, subTitle, button } = CALENDAR_CONTENT;

  const onClickHeaderHandler = () => {
    setNextComponent('LunchCalendarReview');
  };

  const onClickMsgBtnHandler = () => {
    openBottomSheet(<LunchCalendarBottomSheet />);
  };

  const onClickBtnHandler = async () => {
    try {
      const formData = new FormData();

      const userData = {
        description: searchText,
      };

      const blob = new Blob([JSON.stringify(userData)], {
        type: 'application/json',
      });
      formData.append('data', blob);
      for (let i = 0; i < imageFiles.length; i + 1) {
        formData.append('imageFiles', imageFiles[i]);
      }
      await postLunchBoxReview(formData);
      // router.replace('/lunch/calendar');
    } catch (err) {
      // router.replace('/lunch/calendar');
    }
  };

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setSearchText(e.target.value);
  };

  return (
    <section css={pageStyles}>
      <div>
        <Header title={category[2].category} onClick={onClickHeaderHandler} />
        <LunchSubTitle title={subTitle.todayLunch} type="title" margin="24px" />
        <div css={inputBoxStyles}>
          <Input
            variant="search"
            textarea
            placeholder={category[2].placeholder}
            maxLength={299}
            value={searchText}
            onChange={onChangeHandler}
          />
        </div>
        <LunchCalendarPhoto />
      </div>
      <div css={btnBoxStyles}>
        <Button
          variant="blue"
          content={button.button4.text2}
          onClick={!isSave.PhotoMsg ? onClickMsgBtnHandler : onClickBtnHandler}
        />
      </div>
      {bottomSheetState.isOpen && !isSave.PhotoMsg && <BottomSheet />}
    </section>
  );
}

const pageStyles = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const inputBoxStyles = css`
  margin: 20px 0 16px;
`;

const btnBoxStyles = css`
  margin-bottom: 20px;
`;

export default LunchCalendarLunchBox;
