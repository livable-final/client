import Bnb from '@/components/common/Bnb';
import Title from '@/components/common/Title';
import LunchMainContents from '@/components/lunch/main/LunchMainContents';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function LunchHome() {
  const { title } = CALENDAR_CONTENT;
  return (
    <>
      <div css={containerStyles}>
        <Title title={title.main} part="lunch" />
        <LunchMainContents />
      </div>
      <Bnb />
    </>
  );
}

const containerStyles = css`
  margin: 0 -16px 90px;
  background: ${theme.palette.background.home};
`;

export default LunchHome;
