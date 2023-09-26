import { COMMON_ICON_NAMES } from '@/constants/common';

// 서버에서 건내주는 iconId에 해당하는 날씨 정보 반환
const getWeatherIcon = (iconId: string) => {
  const { home } = COMMON_ICON_NAMES;

  switch (iconId) {
    case '01d':
      return home.weather.clearDay;
    case '01n':
      return home.weather.clearNight;
    case '02n':
      return home.weather.fewClouds;
    case '03d':
      return home.weather.clouds;
    case '04d':
      return home.weather.brokenClouds;
    case '09d':
      return home.weather.showerRain;
    case '10d':
      return home.weather.rain;
    case '11d':
      return home.weather.thunderStorm;
    case '13d':
      return home.weather.snow;
    case '50d':
      return home.weather.mist;
    default:
      break;
  }
  return home.weather.clearDay;
};

export default getWeatherIcon;
