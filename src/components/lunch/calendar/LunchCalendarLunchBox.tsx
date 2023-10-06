import { useState } from 'react';
import { useRouter } from 'next/router';
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
import usePagesStore from '@/stores/common/usePagesStore';
import useBottomSheetStore from '@/stores/common/useBottomSheetStore';
import useSaveStore from '@/stores/common/useSaveStore';
import useLunchWriteStore from '@/stores/lunch/useLunchWriteStore';
import COMPONENT_NAME from '@/constants/common/pages';
import useAlertStore from '@/stores/common/useAlertStore';
import { ErrorProps } from '@/types/common/response';
import Alert from '@/components/common/Alert';

function LunchCalendarLunchBox() {
  const [searchText, setSearchText] = useState('');
  const { setNextComponent, reset } = usePagesStore();
  const { bottomSheetState, openBottomSheet, closeBottomSheet } =
    useBottomSheetStore();
  const { isSave } = useSaveStore();
  const { imageFiles } = useLunchWriteStore();
  const { category, subTitle, button } = CALENDAR_CONTENT;
  const { calendar } = COMPONENT_NAME.lunch;
  const { alertState, openAlert } = useAlertStore();

  const router = useRouter();

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
      for (let i = 0; i < imageFiles.length; i += 1) {
        formData.append('imageFiles', imageFiles[i]);
      }
      await postLunchBoxReview(formData);

      if (imageFiles.length === 0) {
        router.replace('/lunch/calendar');
        reset();
      } else {
        setNextComponent(calendar.Inform);
      }
    } catch (err) {
      const error = err as ErrorProps;
      openAlert('📢', error.message || '리뷰 등록 오류');
    } finally {
      if (!isSave.PhotoMsg) {
        closeBottomSheet();
      }
    }
  };

  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setSearchText(e.target.value);
  };

  const onClickMsgBtnHandler = () => {
    openBottomSheet(
      <LunchCalendarBottomSheet onClickSubmit={onClickBtnHandler} />,
    );
  };

  return (
    <section css={pageStyles}>
      {alertState.isOpen && <Alert />}
      <div>
        <Header title={category[2].category} />
        <LunchSubTitle title={subTitle.todayLunch} type="title" margin="24px" />
        <div css={inputBoxStyles}>
          <Input
            type="review"
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
          isDisabled={searchText === ''}
          onClick={
            isSave.PhotoMsg || imageFiles.length > 0
              ? onClickBtnHandler
              : onClickMsgBtnHandler
          }
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
