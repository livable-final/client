import { css } from '@emotion/react';
import { Clock, XIcon, CheckOn, CheckOff } from '@/assets/icons';
import theme from '@/styles/theme';
import { CALENDAR_CASE } from '@/constants/lunch';
import Image from 'next/image';
import { LunchListItemProps } from '@/types/lunch/calendar';

function LunchListItem({
  type,
  content,
  category,
  time,
  imageUrl,
  isChecked,
}: LunchListItemProps) {
  const { listItem } = CALENDAR_CASE;
  let fontStyle;

  switch (type) {
    case listItem.type1:
      fontStyle = theme.palette.greyscale.grey60;
      return (
        <li css={listStyles(type)}>
          <div css={contentStyles(fontStyle)}>
            <Clock
              css={css`
                cursor: auto;
              `}
            />
            <p>{content}</p>
          </div>
          <XIcon />
        </li>
      );
    case listItem.type2:
      return (
        <li css={listStyles(type)}>
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
        </li>
      );
    case listItem.type3:
      fontStyle = theme.palette.greyscale.grey70;
      return (
        <li css={listStyles(type)}>
          <div css={contentStyles(fontStyle)}>
            <p>{content}</p>
          </div>
          {!isChecked ? <CheckOff /> : <CheckOn />}
        </li>
      );
    default:
      break;
  }
}

const listStyles = (type: string) => css`
  display: flex;
  justify-content: space-between;
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
export default LunchListItem;
