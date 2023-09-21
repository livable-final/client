import HomeCard from '@/components/home/HomeCard';
import HomeReceptionProgress from '@/components/home/reception/HomeReceptionProgress';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { Rights } from '@/assets/icons';

function HomeReception() {
  const { reception } = HOME_TEXTS;
  const { progress } = HOME_TEXTS.reception;
  const progressArray = [];
  const count = progress.quantity.length;

  // Progress 컴포넌트와 Rights를 번갈아 push
  for (let i = 0; i < count; i += 1) {
    progressArray.push(
      <HomeReceptionProgress
        key={i}
        idx={i}
        state={progress.state[i]}
        quantity={progress.quantity[i]}
      />,
    );

    // 마지막 count에서는 Progress만 담고 끝낸다.
    if (i < count - 1) {
      progressArray.push(
        <div key={count + i} css={svgStyles}>
          <Rights />
        </div>,
      );
    }
  }

  return (
    <HomeCard>
      <div css={containerStyles}>
        <span css={titleStyles}>{reception.title}</span>
        <div css={progressStyles}>{progressArray}</div>
      </div>
    </HomeCard>
  );
}

const containerStyles = css`
  display: flex;
  padding: 16px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  width: 100%;
`;

const svgStyles = css`
  display: flex;
  padding: 10px 0px 40px;
  align-items: center;
  gap: 10px;
  height: 100%;
`;

const titleStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
  line-height: 24px;
`;

const progressStyles = css`
  display: flex;
  padding: 8px 0px;
  justify-content: center;
  align-items: flex-end;
  align-self: stretch;
`;

export default HomeReception;
