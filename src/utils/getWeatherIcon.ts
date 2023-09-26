import { COMMON_ICON_NAMES } from '@/constants/common';

// 서버에서 건내주는 iconId에 해당하는 날씨 정보 반환
const getWeatherIcon = (iconId: string) => {
  console.log(iconId);
  const { home } = COMMON_ICON_NAMES;

  switch (iconId) {
    case '01d':
      return home.weather.clearDay;
    case '01n':
      return home.weather.clearNight;
    case '02d':
    case '02n':
      return home.weather.fewClouds;
    case '03d':
    case '03n':
      return home.weather.clouds;
    case '04d':
    case '04n':
      return home.weather.brokenClouds;
    case '09d':
    case '09n':
      return home.weather.showerRain;
    case '10d':
    case '10n':
      return home.weather.rain;
    case '11d':
    case '11n':
      return home.weather.thunderStorm;
    case '13d':
    case '13n':
      return home.weather.snow;
    case '50d':
    case '50n':
      return home.weather.mist;
    default:
      break;
  }
  return home.weather.clearDay;
};

export default getWeatherIcon;
