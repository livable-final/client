// 방문자 초대장 중 초대장 생성 파트 타입 선언 //

// 텍스트 상수
export interface InvitationTexts {
  purpose: string;
  invitation: string;
  header: {
    [key: string]: string;
  };
  description: {
    [key: string]: string;
  };
  button: {
    [key: string]: string;
  };
  inputPlaceholder: string;
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
export interface InvitationNameListProps {
  nameList: string[];
}
