import { IconsProps } from '@/types/common/icon';
import { COMMON_ICON_NAMES } from '@/constants/common';

import {
  Meeting,
  Interview,
  FixedtermWork,
  Seminar,
  As,
  Etc,
  Info,
  Direction,
  CopyBlue,
  Home,
  Back,
  Coin,
  Down,
  PlusSmall,
  ClearDay,
  ClearNight,
  FewClouds,
  Clouds,
  BrokenClouds,
  ShowerRain,
  Rain,
  ThunderStorm,
  Snow,
  Mist,
  Lunch,
  Smile,
  ThumbsUp,
  Confused,
  Close,
  Check,
  ServiceCafeteria,
  ServiceCalendar,
  ServiceInvitation,
  ServiceParking,
  ServiceReception,
  ServiceTemp,
  My,
  Error,
  ExitSmall,
  ExitMedium,
  InfoBuilding,
  InfoPlace,
  InfoHost,
  InfoParking,
  HomeActive,
  LunchActive,
  MyActive,
  Popup,
  Reviewer,
} from '@/assets/icons';

function Icons({ icon, color, size }: IconsProps) {
  const { invitation, home, user, lunch, common } = COMMON_ICON_NAMES;

  switch (icon) {
    case invitation.meeting:
      return <Meeting color={color} />;
    case invitation.interview:
      return <Interview color={color} />;
    case invitation.fixedTermWork:
      return <FixedtermWork color={color} />;
    case invitation.seminar:
      return <Seminar color={color} />;
    case invitation.as:
      return <As color={color} />;
    case invitation.etc:
      return <Etc color={color} />;
    case invitation.info:
      return <Info color={color} />;
    case invitation.direction:
      return <Direction color={color} />;
    case invitation.copy:
      return <CopyBlue color={color} />;
    case invitation.list:
      return <Back color={color} />;
    case invitation.plusSmall:
      return <PlusSmall color={color} />;
    case invitation.building:
      return <InfoBuilding color={color} />;
    case invitation.place:
      return <InfoPlace color={color} />;
    case invitation.host:
      return <InfoHost color={color} />;
    case invitation.parking:
      return <InfoParking color={color} />;
    case home.home:
      return <Home />;
    case home.homeActive:
      return <HomeActive />;
    case user.coin:
      return <Coin width={size} height={size} />;
    case home.down:
      return <Down color={color} />;
    case home.weather.clearDay:
      return <ClearDay />;
    case home.weather.clearNight:
      return <ClearNight />;
    case home.weather.fewClouds:
      return <FewClouds />;
    case home.weather.clouds:
      return <Clouds />;
    case home.weather.brokenClouds:
      return <BrokenClouds />;
    case home.weather.showerRain:
      return <ShowerRain />;
    case home.weather.rain:
      return <Rain />;
    case home.weather.thunderStorm:
      return <ThunderStorm />;
    case home.weather.snow:
      return <Snow />;
    case home.weather.mist:
      return <Mist />;
    case home.service.serviceCafeteria:
      return <ServiceCafeteria />;
    case home.service.serviceCalendar:
      return <ServiceCalendar />;
    case home.service.serviceInvitation:
      return <ServiceInvitation />;
    case home.service.serviceParking:
      return <ServiceParking />;
    case home.service.serviceReception:
      return <ServiceReception />;
    case home.service.serviceTemp:
      return <ServiceTemp />;
    case home.lunch:
      return <Lunch />;
    case home.lunchActive:
      return <LunchActive />;
    case home.check:
      return <Check width={size} height={size} color={color} />;
    case home.my:
      return <My />;
    case home.myActive:
      return <MyActive />;
    case lunch.smile:
      return <Smile width={size} height={size} />;
    case lunch.confused:
      return <Confused width={size} height={size} />;
    case lunch.thumbsUp:
      return <ThumbsUp color={color} width={size} height={size} />;
    case lunch.popup:
      return <Popup color={color} size={size} />;
    case common.close:
      return <Close />;
    case common.error:
      return <Error width={size} height={size} />;
    case common.exitSmall:
      return <ExitSmall />;
    case common.exitMedium:
      return <ExitMedium color={color} />;
    case common.reviewer:
      return <Reviewer width={size} height={size} />;
    default:
      break;
  }
}

export default Icons;
