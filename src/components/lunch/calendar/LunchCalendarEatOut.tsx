import { Fragment, useState } from 'react';
import { useRouter } from 'next/router';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import {
  postRestaurantReview,
  postPoint,
} from '@/pages/api/lunch/calendarRequests';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import Input from '@/components/common/Input';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import BottomSheet from '@/components/common/BottomSheet';
import LunchCalendarReviewCategory from '@/components/lunch/calendar/LunchCalendarReviewCategory';
import LunchCalendarPhoto from '@/components/lunch/calendar/LunchCalendarPhoto';
import LunchCalendarRatingBtn from '@/components/lunch/calendar/LunchCalendarRatingBtn';
import LunchCalendarBottomSheet from '@/components/lunch/calendar/LunchCalendarBottomSheet';
import usePagesStore from '@/stores/usePagesStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useSaveStore from '@/stores/useSaveStore';
import useWriteStore from '@/stores/useWriteStore';

function LunchCalenderEatOut() {
  const [searchText, setSearchText] = useState('');
  const { goBack } = usePagesStore();
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const {
    restaurant,
    selectedMenu,
    resetSelectedMenu,
    ratingState,
    imageFiles,
  } = useWriteStore();
  const { isSave } = useSaveStore();
  const { subTitle, category, subCategory, button } = CALENDAR_CONTENT;

  const router = useRouter();

  const onClickHeaderHandler = () => {
    goBack();
    resetSelectedMenu();
  };
  const onChangeHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setSearchText(e.target.value);
  };

  const onClickMsgBtnHandler = () => {
    openBottomSheet(<LunchCalendarBottomSheet />);
  };

  const onClickBtnHandler = async () => {
    try {
      const formData = new FormData();

      const userData = {
        restaurantId: restaurant.restaurantId,
        taste: ratingState.taste,
        amount: ratingState.amount,
        speed: ratingState.speed,
        service: ratingState.service,
        description: searchText,
        menus: selectedMenu,
      };

      const blob = new Blob([JSON.stringify(userData)], {
        type: 'application/json',
      });
      formData.append('data', blob);
      for (let i = 0; i < imageFiles.length; i + 1) {
        formData.append('imageFiles', imageFiles[i]);
      }
      await postRestaurantReview(formData);
      if (imageFiles.length === 0) {
        router.replace('/lunch/calendar');
      }
      router.replace('/lunch/point');
    } catch (err) {
      router.replace('/lunch/calendar');
    }
  };

  return (
    <section css={pageStyles}>
      <div>
        <Header title={category[0].category} onClick={onClickHeaderHandler} />
        <LunchSubTitle title={subTitle.todayLunch} type="title" margin="24px" />
        <div css={reviewStyles}>
          <div css={textStyles}>
            <strong>{restaurant.restaurantName}</strong>
            <div>
              {selectedMenu.map((value, i) => (
                <>
                  <span key={`메뉴${i * 12}`}>{value.menuName}</span>
                  {i !== selectedMenu.length - 1 && <span>, </span>}
                </>
              ))}
            </div>
          </div>
          <div css={ratingStyles}>
            {button.button5.map((value) => (
              <Fragment key={value}>
                <LunchCalendarRatingBtn title={value} />
                <input type="radio" name="rating" value={value} hidden />
              </Fragment>
            ))}
          </div>
          <div>
            {subCategory.map((item) => {
              if (item.type === 'taste') {
                return null;
              }
              return (
                <LunchCalendarReviewCategory
                  key={item.type}
                  type={item.type}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
        <div css={textReviewStyles}>
          <p>{subTitle.review}</p>
          <Input
            variant="search"
            textarea
            placeholder={category[0].placeholder}
            maxLength={299}
            value={searchText}
            onChange={onChangeHandler}
          />
        </div>
        <LunchCalendarPhoto />
      </div>
      <div css={btnBoxStyles}>
        <Button
          content={button.button4.text2}
          variant="blue"
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

const btnBoxStyles = css`
  margin-bottom: 20px;
`;

export default LunchCalenderEatOut;
