import { useState } from 'react';
import Image from 'next/image';
import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { css } from '@emotion/react';
import { Clock, XIcon } from '@/assets/icons';
import { CALENDAR_CASE } from '@/constants/lunch';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { LunchCalendarListItemProps } from '@/types/lunch/calendar';
import useWriteStore from '@/stores/useWriteStore';
import useSaveStore from '@/stores/useSaveStore';

function LunchCalendarListItem({
  keywordId,
  type,
  item,
  content,
  category,
  time,
  imageUrl,
  onClick,
}: LunchCalendarListItemProps) {
  const [isChecked, setIsChecked] = useState(false);
  const selectedMenu = useWriteStore((state) => state.selectedMenu);
  const setSelectedMenu = useWriteStore((state) => state.setSelectedMenu);
  const setRemoveMenu = useWriteStore((state) => state.setRemoveMenu);
  const deleteKeywordList = useSaveStore((state) => state.deleteKeywordList);
  const { listItem } = CALENDAR_CASE;
  const { home } = COMMON_ICON_NAMES;

  const onClickListItemHandler = () => {
    setIsChecked(!isChecked);
    if (!item) return;

    if (
      !isChecked &&
      !selectedMenu.find((menu) => menu.menuName === item.menuName)
    ) {
      setSelectedMenu(item);
      return;
    }
    if (
      isChecked &&
      selectedMenu.find((menu) => menu.menuName === item.menuName)
    ) {
      setRemoveMenu(item);
    }
  };
  const onClickDeleteHandler = () => {
    if (keywordId) {
      deleteKeywordList(keywordId);
    }
  };

  switch (type) {
    case listItem.type1:
      return (
        <button type="button" css={listStyles(type)}>
          <div css={contentStyles(type)}>
            <Clock css={iconStles} />
            <p>{content}</p>
          </div>
          <XIcon onClick={onClickDeleteHandler} />
        </button>
      );
    case listItem.type2:
      return (
        <button type="button" css={listStyles(type)} onClick={onClick}>
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
              alt={content || '식당썸네일'}
            />
          </div>
        </button>
      );
    case listItem.type3:
      return (
        <button
          type="button"
          css={listStyles(type)}
          onClick={onClickListItemHandler}
        >
          <div css={contentStyles(type)}>
            <p>{item?.menuName}</p>
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
        </button>
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

const contentStyles = (type: string) => css`
  display: flex;
  align-items: center;
  gap: 6px;
  font: ${type === 'searched'
    ? `${theme.font.body.body1_400}`
    : `${theme.font.subTitle.subTitle2_400}`};
  color: ${type === 'searched'
    ? `${theme.palette.greyscale.grey60}`
    : `${theme.palette.greyscale.grey70}`};
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
  border: 1px solid ${theme.palette.greyscale.grey60}
  overflow: hidden;
`;

const iconStles = css`
  cursor: auto;
`;
export default LunchCalendarListItem;
