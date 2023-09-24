function getTimeDiff(time: string) {
  const currentTime = new Date().getTime(); // 현재 시각
  const publishedTime = new Date(time).getTime(); // 글 게시 시각
  const diffInMilliseconds = currentTime - publishedTime; // 밀리초 단위의 차이

  // 밀리초를 분, 시간, 일로 변환
  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(diffInDays / 30);
  const diffInYears = Math.floor(diffInDays / 365);

  switch (true) {
    case diffInMinutes < 1:
      return '방금';
    case diffInMinutes < 60:
      return `${diffInMinutes}분 전`;
    case diffInHours < 24:
      return `${diffInHours}시간 전`;
    case diffInDays < 30:
      return `${diffInDays}일 전`;
    case diffInDays < 365:
      return `${diffInMonths}개월 전`;
    default:
      return `${diffInYears}년 전`;
  }
}

export default getTimeDiff;
