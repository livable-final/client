import theme from '@/styles/theme';
import { TitleProps } from '@/types/common/title';
import { css } from '@emotion/react';
import Icons from '@/components/common/Icons';
import { Barcode, Bell, LunchCalendar, Setting } from '@/assets/icons';
import Link from 'next/link';
import { BeatLoader } from 'react-spinners';

function Title({ title, isMain, part, loading }: TitleProps) {
  const renderIcons = (type: string) => {
    switch (type) {
      case 'main':
        return (
          <>
            <Barcode />
            <Bell />
          </>
        );
      case 'lunch':
        return (
          <Link aria-label="toCalendar" href="/lunch/calendar">
            <LunchCalendar />
          </Link>
        );
      case 'user':
        return <Setting />;
      default:
        return null;
    }
  };

  return (
    <div css={containerStyles}>
      <span css={wrapperStyles}>
        <span css={spanStyles}>
          {loading ? (
            <BeatLoader color={theme.palette.greyscale.grey10} size={12} />
          ) : (
            title
          )}
        </span>
        {isMain && <Icons icon="down" />}
      </span>
      <div css={iconStyles}>{renderIcons(part)}</div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  background-color: ${theme.palette.white};
`;

const wrapperStyles = css`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const spanStyles = css`
  color: ${theme.palette.title};
  text-align: center;
  font: ${theme.font.title.title1_godo};
  line-height: 25px;
`;

const iconStyles = css`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export default Title;
