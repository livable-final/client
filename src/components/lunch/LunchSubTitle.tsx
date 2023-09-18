import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { CALENDAR_CASE } from '@/constants/lunch';
import { LunchSubTitleProps } from '@/types/lunch/calendar';

function LunchSubTitle({ title, type, userName }: LunchSubTitleProps) {
  const { subTitle } = CALENDAR_CASE;
  let fontStyle;
  let fontSize;

  switch (type) {
    case subTitle.type1:
      fontStyle = `${theme.font.title.title2_500}`;
      fontSize = '1.25rem';

      break;
    case subTitle.type2:
      fontStyle = `${theme.font.subTitle.subTitle1_600}`;
      fontSize = '1.125rem';
      break;
    default:
  }
  return (
    <div css={titleStyles(fontStyle, fontSize)}>
      {userName ? `${userName}${title}` : `${title}`}
    </div>
  );
}

const titleStyles = (
  fontStyle: string | undefined,
  fontSize: string | undefined,
) => css`
  font: ${fontStyle};
  font-size: ${fontSize};
`;

export default LunchSubTitle;
