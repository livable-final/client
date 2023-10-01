import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { getWeather } from '@/pages/api/home/homeRequests';
import Icons from '@/components/common/Icons';
import getWeatherIcon from '@/utils/getWeatherIcon';
import { useQuery } from '@tanstack/react-query';
import getCelsius from '@/utils/getCelsius';
import { BeatLoader } from 'react-spinners';

function HomeBulletinWeather() {
  const { data, isError, error, isLoading } = useQuery(
    ['weather'],
    () => getWeather(),
    {
      refetchInterval: 1800000, // 30분마다 자동 리프레시
      staleTime: 1800000, // 1시간 동안 데이터가 fresh 상태로 유지됨
    },
  );

  // TOFIXED: 에러용 단순 모달 필요
  if (isError) return <div>{error?.toString()}</div>;
  if (isLoading) return <BeatLoader color={theme.palette.primary} />;

  const weatherId = data?.weather[0].icon;
  const weatherTemp = data?.main.temp;

  const icon = getWeatherIcon(weatherId);
  const temp = getCelsius(weatherTemp);

  return (
    <div css={containerStyles}>
      <p css={celsiusStyles}>{temp}</p>
      <Icons icon={icon} />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const celsiusStyles = css`
  display: flex;
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey50};
`;
export default HomeBulletinWeather;
