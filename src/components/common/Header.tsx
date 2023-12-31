import { css } from '@emotion/react';
import { HeaderProps } from '@/types/common/header';
import { COMMON_HEADER } from '@/constants/common';
import { Back } from '@/assets/icons';
import mq from '@/utils/mediaquery';
import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import usePagesStore from '@/stores/common/usePagesStore';

function Header({
  title,
  type = '',
  text = '',
  isBg = false,
  isCloseOnly = false,
  isSticky = false,
  onClick,
  onClickBack,
}: HeaderProps) {
  const { goBack, backComponents } = usePagesStore();
  const { typeCase } = COMMON_HEADER;

  let icon;

  switch (type) {
    case typeCase.close:
      // 아이콘 추가 예정
      icon = <Icons icon="close" />;
      break;
    case typeCase.text:
      icon = <span>{text}</span>;
      break;
    default:
      icon = null;
  }

  const onBackClickHandler = () => {
    if (backComponents.length === 0) {
      window.location.assign('/');
    } else {
      goBack();
    }
  };

  return (
    <header css={headerStyles(isBg, isCloseOnly, isSticky)}>
      {isCloseOnly ? (
        <div />
      ) : (
        <Back onClick={onClickBack || onBackClickHandler} />
      )}
      <div css={titleStyles}>
        <span>{title}</span>
      </div>
      <div onClick={onClick} css={iconStyles(type)} aria-hidden="true">
        {icon}
      </div>
    </header>
  );
}

const headerStyles = (
  isBg: boolean,
  isCloseOnly: boolean,
  isSticky: boolean,
) => css`
  position: ${isSticky ? 'sticky' : 'static'};
  top: 0;
  display: grid;
  grid-template-columns: ${isCloseOnly ? '1fr auto 1fr' : '1fr auto 1fr'};
  align-items: center;
  width: 100%;
  min-width: 248px;
  max-width: 360px;
  height: 56px;
  padding: 16px 0;
  background-color: ${isBg ? 'transparent' : theme.palette.white};
  z-index: 5;

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
  justify-self: center;
  span {
    font: ${theme.font.subTitle.subTitle1_600};
  }
`;

const iconStyles = (type: string) => css`
  justify-self: end;
  cursor: pointer;
  color: ${type === 'text' && theme.palette.primary};
  font: ${type === 'text' && theme.font.body.body1_500};
  line-height: 24px;
  height: 24px;
`;

export default Header;
