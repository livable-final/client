/* eslint-disable react-hooks/exhaustive-deps */
import Bnb from '@/components/common/Bnb';
import Title from '@/components/common/Title';
import HomeContents from '@/components/home/HomeContents';
import useFetch from '@/hooks/useFetch';
import { getHome } from '@/pages/api/home/homeRequests';
import useIdStore from '@/stores/useIdStore';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useEffect } from 'react';
import usePagesStore from '@/stores/usePagesStore';
import useSaveStore from '@/stores/useSaveStore';
import { useRouter } from 'next/router';

function Home() {
  const router = useRouter();
  const { reset } = usePagesStore();
  const { idList, setIdList } = useIdStore();

  const { response } = useFetch({
    fetchFn: getHome,
  });

  useEffect(() => {
    if (!useSaveStore.getState().user) {
      router.push('/login');
    }
    reset();
    if (response?.data.buildingId) {
      setIdList({ ...idList, buildingId: response?.data.buildingId });
    }
  }, [response?.data.buildingId, setIdList, reset]);

  return (
    <>
      <Title title={response?.data.buildingName} part="main" isMain />
      <div css={containerStyles}>
        <HomeContents hasCafeteria={response?.data.hasCafeteria} />
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
