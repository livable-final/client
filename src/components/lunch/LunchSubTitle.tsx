import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CASE } from '@/constants/lunch';
import { LunchSubTitleProps } from '@/types/lunch/calendar';

function LunchSubTitle({ title, type, userName, margin }: LunchSubTitleProps) {
  const { subTitle, review, roulette } = CALENDAR_CASE;
  let fontStyle;
  let fontSize;
  let lineHeight;

  switch (type) {
    case subTitle.type1:
      fontStyle = `${theme.font.title.title2_500}`;
      fontSize = '1.25rem';

      break;
    case subTitle.type2:
      fontStyle = `${theme.font.subTitle.subTitle1_600}`;
      fontSize = '1.125rem';
      break;
    case review.type1:
      fontStyle = `${theme.font.body.body1_600}`;
      fontSize = `16px`;
      lineHeight = `24px`;
      break;
    case review.type2:
      fontStyle = `${theme.font.subTitle.subTitle2_600}`;
      fontSize = `17px`;
      lineHeight = `24px`;
      break;
    case roulette.type:
      fontStyle = `${theme.font.subTitle.subTitle2_500}`;
      fontSize = `17px`;
      lineHeight = `24px`;
      break;
    default:
  }
  return (
    <div css={titleStyles(fontStyle, fontSize, lineHeight, margin)}>
      {userName ? `${userName}${title}` : `${title}`}
    </div>
  );
}

const titleStyles = (
  fontStyle: string | undefined,
  fontSize: string | undefined,
  lineHeight?: string,
  margin?: string,
) => css`
  background-color: ${theme.palette.white};
  font: ${fontStyle};
  font-size: ${fontSize};
  line-height: ${lineHeight};
  margin-top: ${margin};
`;

export default LunchSubTitle;
