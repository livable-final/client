import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { HeaderProps } from '@/types/common/header';
import { COMMON_HEADER } from '@/constants/common';

function Header({ title, type = '', text = '', onClick }: HeaderProps) {
  const { typeCase } = COMMON_HEADER;

  let icon;

  switch (type) {
    case typeCase.close:
      // 아이콘 추가 예정
      icon = 'close icon';
      break;
    case typeCase.text:
      icon = <span>{text}</span>;
      break;
    default:
      icon = null;
  }

  return (
    <header css={headerStyles}>
      <div>고정</div>
      <div css={titleStyles}>
        <h2>{title}</h2>
      </div>
      <div onClick={onClick} css={iconStyles(type)} aria-hidden="true">
        {icon}
      </div>
    </header>
  );
}

export default Header;

const headerStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  padding: 16px;

  // 테스트용 스타일 (추후 사용 시 삭제 요망)
  margin-top: 30px;
  border: 1px solid #191919;
`;

const titleStyles = css`
  font: ${theme.font.subTitle.subTitle1_600};
  justify-self: center;
`;

const iconStyles = (type: string) => css`
  justify-self: end;
  cursor: pointer;
  color: ${type === 'text' && theme.palette.primary}}
  font: ${type === 'text' && theme.font.body.body1_500}}
`;
