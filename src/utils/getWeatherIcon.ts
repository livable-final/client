import { COMMON_ICON_NAMES } from '@/constants/common';

// 서버에서 건내주는 iconId에 해당하는 날씨 정보 반환
const getWeatherIcon = (iconId: string) => {
  const { home } = COMMON_ICON_NAMES;

  switch (iconId) {
    case '01d': // 맑은 낮
      return home.weather.clearDay;
    case '01n': // 맑은 밤
      return home.weather.clearNight;
    case '02d':
    case '02n': // 조금 흐림
      return home.weather.fewClouds;
    case '03d':
    case '03n': // 흐림
      return home.weather.clouds;
    case '04d':
    case '04n': // 매우 흐림
      return home.weather.brokenClouds;
    case '09d':
    case '09n': // 소나기
      return home.weather.showerRain;
    case '10d':
    case '10n': // 비
      return home.weather.rain;
    case '11d':
    case '11n': // 뇌우
      return home.weather.thunderStorm;
    case '13d':
    case '13n': // 눈
      return home.weather.snow;
    case '50d':
    case '50n': // 안개
      return home.weather.mist;
    default:
      break;
  }
  return home.weather.clearDay;
};

export default getWeatherIcon;
