import Bnb from '@/components/common/Bnb';
import Title from '@/components/common/Title';
import HomeContents from '@/components/home/HomeContents';
import { DUMMY_RESPONSE } from '@/constants/home/homeTexts';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import usePagesStore from '@/stores/usePagesStore';

function Home() {
  const { reset } = usePagesStore();

  useEffect(() => reset(), [reset]);

  return (
    <>
      <Title title={DUMMY_RESPONSE.buildingName} part="main" isMain />
      <div css={containerStyles}>
        <HomeContents />
      </div>
      <Bnb />
    </>
  );
}

const containerStyles = css`
  margin: 0 -16px 90px;
  background: ${theme.palette.background.home};
`;

export default Home;
