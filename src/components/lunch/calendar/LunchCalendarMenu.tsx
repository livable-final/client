import { useState, useRef } from 'react';
import { css } from '@emotion/react';
import Header from '@/components/common/Header';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import { PlusSmall } from '@/assets/icons';
import theme from '@/styles/theme';
import Button from '@/components/common/Button';
import LunchCalendarListItem from '@/components/lunch/calendar/LunchCalendarListItem';

function LunchCalendarMenu() {
  const [showInput] = useState(false);
  const { subTitle, button } = CALENDAR_CONTENT;
  const inputRef = useRef<HTMLInputElement | null>(null);

  const onClickHandler = () => {};

  if (showInput && inputRef.current) {
    inputRef.current.focus();
  }

  return (
    <section>
      <Header title="식당제목" onClick={onClickHandler} />
      <div css={{ paddingTop: '24px', paddingBottom: '24px' }}>
        <LunchSubTitle title={subTitle.menu} type="subTitle" />
      </div>
      <LunchCalendarListItem type="menu" content="김치찌개" />
      <LunchCalendarListItem type="menu" content="김치찌개" />
      <div css={PlusStyles}>
        {!showInput ? (
          <>
            <span>추가</span>
            <PlusSmall />
          </>
        ) : (
          <input type="text" ref={inputRef} />
        )}
      </div>

      <Button content={button.button3.text} variant="blue" />
    </section>
  );
}

const PlusStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding: 20px 4px;
  color: ${theme.palette.greyscale.grey50};

  input {
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
  }
`;

export default LunchCalendarMenu;
