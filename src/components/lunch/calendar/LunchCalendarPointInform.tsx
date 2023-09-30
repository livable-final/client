import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import { RightSmall } from '@/assets/icons';

function LunchCalendarPointInform() {
  const { title, subTitle, button } = CALENDAR_CONTENT;
  const onClickHeaderHandler = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <section css={pageStyles}>
      <Header title="" onClick={onClickHeaderHandler} />
      <div>
        <div css={textStyles}>
          <h1>{title.photoReview}</h1>
          <p>{subTitle.photoReview}</p>
        </div>
      </div>
      <div css={btnBoxStyles}>
        <button type="button" css={btnStyles}>
          <span>{button.button9.text}</span>
          <RightSmall />
        </button>
        <Button content={button.button4.text3} variant="blue" />
      </div>
    </section>
  );
}

const pageStyles = css`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const textStyles = css`
  text-align: center;
  h1 {
    font: ${theme.font.title.title1};
    color: ${theme.palette.title};
  }
  p {
    margin: 4px 0 0;
    font: ${theme.font.subTitle.subTitle2_600};
    color: ${theme.palette.bluescale.blue50};
  }
`;

const btnBoxStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 20px;
`;

const btnStyles = css`
  display: flex;
  align-items: center;
  padding: 6px;
  margin: 0 0 12px;
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.greyscale.grey50};
`;

export default LunchCalendarPointInform;
