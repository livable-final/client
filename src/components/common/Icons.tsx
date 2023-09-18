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
  Home,
} from '@/assets/icons';

function Icons({ icon, color }: IconsProps) {
  const { invitation, home } = COMMON_ICON_NAMES;

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
    case home.home:
      return <Home color={color} />;
    default:
      break;
  }
}

export default Icons;
