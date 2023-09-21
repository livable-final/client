import { css } from '@emotion/react';
import { HeaderProps } from '@/types/common/header';
import { COMMON_HEADER } from '@/constants/common';
import { Back } from '@/assets/icons';
import mq from '@/utils/mediaquery';
import theme from '@/styles/theme';

function Header({
  title,
  type = '',
  text = '',
  isBg = false,
  onClick,
}: HeaderProps) {
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
    <header css={headerStyles(isBg)}>
      {/* 초대장 메인으로 돌아간다고 임시로 onclick 속성을 넣어놨습니다..! */}
      <Back onClick={onClick} />
      <div css={titleStyles}>
        <span>{title}</span>
      </div>
      <div onClick={onClick} css={iconStyles(type)} aria-hidden="true">
        {icon}
      </div>
    </header>
  );
}

const headerStyles = (isBg: boolean) => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  width: 100%;
  min-width: 280px;
  max-width: 360px;
  height: 56px;
  padding: 16px 0;
  background-color: ${isBg ? 'transparent' : theme.palette.white};

  ${mq.md} {
    max-width: 480px;
  }
  ${mq.lg} {
    max-width: 640px;
  }
  ${mq.tab} {
    max-width: 1024px;
  }
`;

const titleStyles = css`
  font: ${theme.font.subTitle.subTitle1_600};
  justify-self: center;
`;

const iconStyles = (type: string) => css`
  justify-self: end;
  cursor: pointer;
  color: ${type === 'text' && theme.palette.primary};
  font: ${type === 'text' && theme.font.body.body1_500};
  line-height: 24px;
`;

export default Header;
