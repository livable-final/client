import dayjs from 'dayjs';
import { DateDish } from '@/assets/icons';
import useCalendarStore from '@/stores/useCalendarStore';
import LunchCalendarDateContent from '@/components/lunch/calendar/LunchCalendarDateContent';

function CalendarTileContent({ date, view }: { date: Date; view: string }) {
  const { reviewDetails } = useCalendarStore();

  if (
    view === 'month' &&
    reviewDetails?.find(
      (value) => value.reviewCreatedAt === dayjs(date).format('YYYY-MM-DD'),
    )
  ) {
    const filteredDate = dayjs(date).format('YYYY-MM-DD');
    const dayReviewData = reviewDetails.filter(
      (value) => value.reviewCreatedAt === filteredDate,
    );
    return <LunchCalendarDateContent dayReviewData={dayReviewData} />;
  }
  return <DateDish />;
}

export default CalendarTileContent;
