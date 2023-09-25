import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CASE } from '@/constants/lunch';
import { LunchSubTitleProps } from '@/types/lunch/calendar';

function LunchSubTitle({ title, type, userName }: LunchSubTitleProps) {
  const { subTitle, review } = CALENDAR_CASE;
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
    default:
  }
  return (
    <div css={titleStyles(fontStyle, fontSize, lineHeight)}>
      {userName ? `${userName}${title}` : `${title}`}
    </div>
  );
}

const titleStyles = (
  fontStyle: string | undefined,
  fontSize: string | undefined,
  lineHeight?: string,
) => css`
  font: ${fontStyle};
  font-size: ${fontSize};
  line-height: ${lineHeight};
`;

export default LunchSubTitle;
