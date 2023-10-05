import { GetInvitationTimeListData } from '@/types/invitation/api';

// 공통으로 예약 가능한 시간을 리턴하는 함수
// timeList: [{…}, {…}]
// { date: '2023-10-20', availableTimes: ['12:30:00', '15:00:00', '17:30:00'] }
const getCommonTimes = (
  startDate: Date,
  endDate: Date,
  timeList: GetInvitationTimeListData[],
) => {
  // 두 날짜 사이의 밀리초 수 계산
  const countTimes = Math.abs(endDate.getTime() - startDate.getTime());
  // 밀리초를 일로 변환 (두 날짜를 포함하는 총 일수)
  const countDays = Math.ceil(countTimes / (1000 * 60 * 60 * 24)) + 1;

  // 예약 가능한 API 응답값의 길이가 startDate ~ endDate 기간과 동일하지 않을 경우
  // 모든 날짜에 동일한 시간이 있다고 보기 어려우므로 빈 배열 리턴
  if (countDays !== timeList.length) {
    return [];
  }

  // startDate ~ endDate 기간만큼 데이터가 응답됐을 경우
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
