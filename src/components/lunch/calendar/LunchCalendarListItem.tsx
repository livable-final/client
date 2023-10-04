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
import useUserStore from '@/stores/useUserStore';

function LunchCalendarListItem({
  id,
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
  const buildingName = useUserStore((state) => state.buildingName);
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

  const onClickDeleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!id) return;
    deleteKeywordList(id);
  };

  switch (type) {
    case listItem.type1:
      return (
        <div css={listStyles(type)}>
          <button type="button" css={contentStyles} onClick={onClick}>
            <Clock css={iconStles} />
            <p css={searchedStyles}>{content}</p>
          </button>
          <XIcon onClick={onClickDeleteHandler} />
        </div>
      );
    case listItem.type2:
      return (
        <button type="button" css={listStyles(type)} onClick={onClick}>
          <div css={searchingContentStyles}>
            <div>
              <strong>{content}</strong>
              <span>{category}</span>
            </div>
            <p>
              {buildingName}에서 {time}분
            </p>
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
          <div css={contentStyles}>
            <p css={menuStyles}>{item?.menuName}</p>
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

const contentStyles = () => css`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const searchedStyles = css`
  font: ${theme.font.body.body1_400};
  color: ${theme.palette.greyscale.grey60};
`;

const menuStyles = css`
  font: ${theme.font.subTitle.subTitle2_400};
  color: ${theme.palette.greyscale.grey70};
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
