import { useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { postCafeteriaReview } from '@/pages/api/lunch/calendarRequests';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import BottomSheet from '@/components/common/BottomSheet';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import LunchCalendarPhoto from '@/components/lunch/calendar/LunchCalendarPhoto';
import LunchCalendarRatingBtn from '@/components/lunch/calendar/LunchCalendarRatingBtn';
import LunchCalendarBottomSheet from '@/components/lunch/calendar/LunchCalendarBottomSheet';
import usePagesStore from '@/stores/usePagesStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useSaveStore from '@/stores/useSaveStore';
import useWriteStore from '@/stores/useWriteStore';
import useUserStore from '@/stores/useUserStore';
import COMPONENT_NAME from '@/constants/common/pages';
import useAlertStore from '@/stores/useAlertStore';
import { ErrorProps } from '@/types/common/response';
import Alert from '@/components/common/Alert';

function LunchCalendarCafeteria() {
  const [searchText, setSearchText] = useState('');
  const { setNextComponent, reset } = usePagesStore();
  const { bottomSheetState, openBottomSheet, closeBottomSheet } =
    useBottomSheetStore();
  const { isSave } = useSaveStore();
  const { ratingState, imageFiles } = useWriteStore();
  const { buildingName } = useUserStore();
  const { category, subTitle, button } = CALENDAR_CONTENT;
  const { calendar } = COMPONENT_NAME.lunch;
  const { alertState, openAlert } = useAlertStore();

  const router = useRouter();

  const onClickBtnHandler = async () => {
    try {
      const formData = new FormData();

      const userData = {
        taste: ratingState.taste,
        description: searchText,
      };

      const blob = new Blob([JSON.stringify(userData)], {
        type: 'application/json',
      });
      formData.append('data', blob);
      for (let i = 0; i < imageFiles.length; i += 1) {
        formData.append('imageFiles', imageFiles[i]);
      }
      await postCafeteriaReview(formData);

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
        <Header title={category[1].category} />
        <LunchSubTitle title={subTitle.todayLunch} type="title" margin="24px" />
        <div css={titleStyles}>
          <p>{buildingName}</p>
        </div>
        <div css={buttonStyles}>
          {button.button5.map((value) => (
            <LunchCalendarRatingBtn key={value} title={value} />
          ))}
        </div>
        <div css={inputBoxStyles}>
          <p>{subTitle.review}</p>
          <Input
            variant="search"
            textarea
            placeholder={category[1].placeholder}
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
const titleStyles = css`
  display: flex;
  justify-content: center;
  margin: 32px 0 12px;
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
  margin: 36px 0 16px;
  p {
    margin-bottom: 12px;
    font: ${theme.font.subTitle.subTitle2_500};
    color: ${theme.palette.greyscale.grey90};
  }
`;

const btnBoxStyles = css`
  margin-bottom: 20px;
`;

export default LunchCalendarCafeteria;
