// 방문자 초대장 중 초대장 생성 파트 타입 선언 //

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

export interface CommonCategory {
  icon: string;
  title: string;
}

// 방문자 리스트
export interface InvitationVisitorsListProps {
  visitorsList: string[];
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
