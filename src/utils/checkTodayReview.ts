import { ReviewData } from '@/types/lunch/calendar';
import dayjs from 'dayjs';

const checkTodayReview = (data: ReviewData[]) => {
  const today = dayjs(new Date()).format('YYYY-MM-DD');
  const foundData = data.find((item) => item.reviewCreatedAt === today);
  const isTodayData = !!foundData;

  return isTodayData;
};

export default checkTodayReview;
