import Image from 'next/image';
import theme from '@/styles/theme';
import usePagesStore from '@/stores/usePagesStore';
import Icons from '@/components/common/Icons';
import { css } from '@emotion/react';
import { Clock, XIcon } from '@/assets/icons';
import { CALENDAR_CASE } from '@/constants/lunch';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { LunchCalendarListItemProps } from '@/types/lunch/calendar';

function LunchCalendarListItem({
  type,
  content,
  category,
  time,
  imageUrl,
  isChecked,
}: LunchCalendarListItemProps) {
  const { setNextComponent } = usePagesStore();
  const { listItem } = CALENDAR_CASE;
  const { home } = COMMON_ICON_NAMES;

  const onClickHandler = () => {
    setNextComponent('LunchCalendarMenu');
  };

  let fontStyle;

  switch (type) {
    case listItem.type1:
      fontStyle = theme.palette.greyscale.grey60;
      return (
        <button type="button" css={listStyles(type)} onClick={onClickHandler}>
          <div css={contentStyles(fontStyle)}>
            <Clock css={iconStles} />
            <p>{content}</p>
          </div>
          <XIcon />
        </button>
      );
    case listItem.type2:
      return (
        <button type="button" css={listStyles(type)}>
          <div css={searchingContentStyles}>
            <div>
              <strong>{content}</strong>
              <span>{category}</span>
            </div>
            <p>테리타워에서 {time}분</p>
          </div>
          <div css={ImageStyles}>
            <Image
              width={56}
              height={56}
              src={imageUrl || '/gift.png'}
              alt={content}
            />
          </div>
        </button>
      );
    case listItem.type3:
      fontStyle = theme.palette.greyscale.grey70;
      return (
        <li css={listStyles(type)}>
          <div css={contentStyles(fontStyle)}>
            <p>{content}</p>
          </div>
          <Icons
            icon={home.check}
            size="24px"
            color={
              !isChecked
                ? `${theme.palette.greyscale.grey20}`
                : `${theme.palette.bluescale.blue60}`
            }
          />
        </li>
      );
    default:
      break;
  }
}

const listStyles = (type: string) => css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  cursor: pointer;
  border-bottom: 1px solid ${theme.palette.greyscale.grey10};
  padding: ${type === 'searched' ? `16px 4px` : `20px 4px`};
`;

const contentStyles = (fontStyle: string) => css`
  display: flex;
  align-items: center;
  gap: 6px;
  font: ${fontStyle};
  color: ${theme.palette.greyscale.grey60};
`;

const searchingContentStyles = css`
  div {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
  }
  strong {
    font: ${theme.font.subTitle.subTitle2_600};
    color: ${theme.palette.greyscale.grey90};
  }
  span {
    font: ${theme.font.body.body3_400};
    color: ${theme.palette.greyscale.grey40};
  }
  p {
    text-align: start;
    font: ${theme.font.body.body3_400};
    color: ${theme.palette.greyscale.grey50};
  }
`;

const ImageStyles = css`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  overflow: hidden;
`;

const iconStles = css`
  cursor: auto;
`;
export default LunchCalendarListItem;
