import { css } from '@emotion/react';
import HeaderProps from '@/types/common/header';

function Header({ title, type }: HeaderProps) {
  // 아이콘 추가 예정
  let icon;

  switch (type) {
    case 'close':
      icon = <p>icon</p>;
      break;
    case 'text':
      icon = <p>icon</p>;
      break;
    default:
      icon = null;
  }

  return (
    <header css={HeaderContainer}>
      <div>고정</div>
      <h2>{title}</h2>
      <div>{icon}</div>
    </header>
  );
}

export default Header;

const HeaderContainer = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 16px;

  // 임시
  margin-top: 30px;
  border: 1px solid #191919;
`;
