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
} from '@/assets/icons';

function Icons({ icon, color, size }: IconsProps) {
  const { invitation, home, user } = COMMON_ICON_NAMES;

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
    case home.home:
      return <Home color={color} />;
    case invitation.list:
      return <Back color={color} />;
    case user.coin:
      return <Coin width={size} height={size} />;
    case home.down:
      return <Down color={color} />;
    default:
      break;
  }
}

export default Icons;
