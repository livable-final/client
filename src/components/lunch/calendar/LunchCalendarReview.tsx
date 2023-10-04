import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { useRouter } from 'next/router';
import Header from '@/components/common/Header';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import usePagesStore from '@/stores/usePagesStore';
import LunchCalendarSelectBtn from '@/components/lunch/calendar/LunchCalendarSelectBtn';
import LunchCalendarSearch from '@/components/lunch/calendar/LunchCalendarSearch';
import LunchCalendarEatOut from '@/components/lunch/calendar/LunchCalendarEatOut';
import LunchCalendarLunchBox from '@/components/lunch/calendar/LunchCalendarLunchBox';
import LunchCalendarCafeteria from '@/components/lunch/calendar/LunchCalendarCafeteria';
import LunchCalendarPointInform from '@/components/lunch/calendar/LunchCalendarPointInform';
import COMPONENT_NAME from '@/constants/common/pages';
import LunchCalendarMenu from '@/components/lunch/calendar/LunchCalendarMenu';

function LunchCalendarReview() {
  const { nextComponent } = usePagesStore();
  const router = useRouter();
  const { title, subTitle, category } = CALENDAR_CONTENT;
  const { calendar } = COMPONENT_NAME.lunch;

  const onClickHeaderHandler = () => {
    router.back();
  };

  switch (nextComponent) {
    case calendar.search:
      return <LunchCalendarSearch />;
    case calendar.menu:
      return <LunchCalendarMenu />;
    case calendar.eatOut:
      return <LunchCalendarEatOut />;
    case calendar.cafeteria:
      return <LunchCalendarCafeteria />;
    case calendar.lunchBox:
      return <LunchCalendarLunchBox />;
    case calendar.Inform:
      return <LunchCalendarPointInform />;
    default:
      return (
        <section>
          <Header title={title.review} onClickBack={onClickHeaderHandler} />
          <LunchSubTitle
            title={subTitle.mealStyle}
            type="subTitle"
            margin="24px"
          />
          <div css={buttonListStyles}>
            <LunchCalendarSelectBtn text={category[0].category} />
            <LunchCalendarSelectBtn text={category[1].category} />
            <LunchCalendarSelectBtn text={category[2].category} />
          </div>
        </section>
      );
  }
}

const buttonListStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 22px 16px;
  margin-top: 32px;
  padding: 0 20px;

  @media (max-width: 479px) {
    display: flex;
    justify-content: space-between;
  }
`;

export default LunchCalendarReview;
