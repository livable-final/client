// 기존 라디오 버튼 (박스형)
export interface RadioBtnBoxProps {
  list: string[];
  name: string;
  placeholder: string;
}

// 라디오 버튼 단일
export interface RadioBtnProps {
  content?: string;
  select?: string;
  isEtc?: boolean;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
