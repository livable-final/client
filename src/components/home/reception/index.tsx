import LunchCardProps from '@/components/lunch/LunchCard';
import HomeReceptionProgress from '@/components/home/reception/HomeReceptionProgress';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { Rights } from '@/assets/icons';
import useFetch from '@/hooks/useFetch';
import { getMyData } from '@/pages/api/home/homeRequests';
import useUserStore from '@/stores/common/useUserStore';
import { useEffect } from 'react';

function HomeReception() {
  const { reception } = HOME_TEXTS;
  const { progress } = HOME_TEXTS.reception;
  const { setState } = useUserStore;
  const { response } = useFetch({
    fetchFn: getMyData,
  });

  const progressArray = [];
  const count = progress.quantity.length;

  useEffect(() => {
    setState({ ...response?.data });
  }, [response?.data, setState]);

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
    <LunchCardProps padding={16}>
      <div css={containerStyles}>
        <span css={titleStyles}>{reception.title}</span>
        <div css={progressStyles}>{progressArray}</div>
      </div>
    </LunchCardProps>
  );
}

const containerStyles = css`
  display: flex;
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
