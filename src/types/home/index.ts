export interface HomeHasCafeteriaProps {
  hasCafeteria?: boolean;
}

export interface HomeBulletinNoticeProps {
  title?: string;
  content?: string;
}

export interface HomeServiceProps {
  icon: string;
  title: string;
  href: string;
}

export interface HomeReceptionProps {
  state: string;
  quantity: number;
  idx: number;
}

export interface HomeCafeteriaToggleProps {
  type: string;
  isActive: boolean;
  onToggle: (type: number) => void;
}
