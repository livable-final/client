import { GetInvitationTimeListData } from '@/types/invitation/api';

// [{…}, {…}]
// { date: '2023-10-20', availableTimes: ['12:30:00', '15:00:00', '17:30:00'] }
const getCommonTimes = (timeList: GetInvitationTimeListData[]) => {
  const timeCounts: Record<string, number> = {};

  timeList.forEach((item: GetInvitationTimeListData) => {
    item.availableTimes.forEach((time: string) => {
      if (!timeCounts[time]) timeCounts[time] = 1;
      else timeCounts[time]++;
    });
  });

  const commonTimes = Object.keys(timeCounts).filter(
    (time) => timeCounts[time] === timeList.length,
  );

  return commonTimes.map((time) => time.slice(0, 5));
};

export default getCommonTimes;
