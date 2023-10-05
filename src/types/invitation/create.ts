import { VisitorInfo } from '@/types/invitation/api';

// ****************** 텍스트 상수 ****************** //
// ****************** constants ****************** //
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
    send: {
      [key: string]: string;
    };
    resend: {
      [key: string]: string;
    };
    btn: string;
  };
  error: {
    [key: string]: string;
  };
  checkbox: string;
  radioBtn: string;
  timeSelector: {
    [key: string]: number;
  };
}

// ****************** 초대 목적 ****************** //
// ****************** Purpose ****************** //
// Invitation Purpose
export interface InvitationCategory {
  [key: string]: CommonCategory;
}

// 카테고리
export interface CommonCategory {
  icon: string;
  title: string;
}

// ****************** 방문자 ********************* //
// ****************** Visitor ****************** //
// Invitation Visitors
export interface InvitationVisitorsListProps {
  visitorsList: VisitorInfo[];
  onClick: (name: string) => void;
}

// ****************** 초대 장소 ****************** //
// ****************** Place ******************** //
// Invitation Place
export interface InvitationPlaceProps {
  placeList: {
    commonPlaces: CommonPlaces[];
    offices: Offices[];
  };
}
export interface CommonPlaces {
  commonPlaceId: number;
  commonPlaceName: string;
}
export interface Offices {
  officeName: string;
}

export interface PlaceList {
  officeName?: string;
  commonPlaceName?: string;
  commonPlaceId?: number;
}

// ****************** 초대 정보 ********************** //
// ****************** Information ****************** //
// Invitation Info
export interface InvitationInfoProps {
  tip: string;
  onChange: (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => void;
  onFocus: () => void;
  onBlur: () => void;
}

export interface InvitationSelectTimeProps {
  commonTimes: string[];
}

export interface TimeSlot {
  time: string;
  status: string;
}
// 타임 셀렉터
export interface TimeSelectorProps {
  content: string | JSX.Element;
  status: string;
  // timeSlot: TimeSlot[][];
  // selectedStartTime: string;
  // selectedEndTime: string;
  // onTimeSelectorClick: (time: string, status: string) => void;
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

// ****************** 기타 ********************** //
// ****************** Etc ********************** //
