import { IconsProps } from '@/types/common/icon';
import { COMMON_ICON_NAMES } from '@/constants/common/constant';
import {
  Meeting,
  Interview,
  FixedtermWork,
  Seminar,
  As,
  Etc,
} from '@/assets/icons';

function Icons({ icon, color }: IconsProps) {
  const { invitation } = COMMON_ICON_NAMES;

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
  }
}

export default Icons;
