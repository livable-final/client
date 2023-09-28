import { VisitorInfo } from '@/types/invitation/api';

// 텍스트 상수
export interface InvitationCreateTexts {
  header: {
    [key: string]: string;
  };
  title: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  button: {
    [key: string]: string;
  };
  placeholder: {
    [key: string]: string;
  };
  modal: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | string;
  };
  checkbox: string;
  timeSelector: {
    [key: string]: number;
  };
}

// 초대 목적 선택
export interface CategoryInvitation {
  [key: string]: {
    [key: string]: CommonCategory;
  };
}

// 카테고리
export interface CommonCategory {
  icon: string;
  title: string;
}

// 방문자 리스트
export interface InvitationVisitorsListProps {
  visitorsList: VisitorInfo[];
  onClick: () => void;
}

export interface InvitationDoneMessageProps {
  visitorsList: string[];
}

// Time Selector
export interface TimeSelectorProps {
  content: string | JSX.Element;
  status: string;
}
export interface TimeSelectorColorProps {
  status: string;
  background: string;
  color: string;
  border?: string;
}
export interface TimeSelectorsColorProps {
  [key: string]: TimeSelectorColorProps;
}
