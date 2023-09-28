import AuthForm from '@/components/auth/AuthForm';
import usePagesStore from '@/stores/usePagesStore';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import Home from '@/components/home';
import COMPONENT_NAME from '@/constants/common/pages';
import { useEffect, useState } from 'react';
import Title from '@/components/common/Title';
import useSaveStore from '@/stores/useSaveStore';

function Main() {
  const { nextComponent } = usePagesStore();
  const { home } = COMPONENT_NAME.common;
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const token = useSaveStore.getState().user;

    setUserToken(token);
  }, []);

  // store nextComponent가 home이거나 유효한 토큰값이 있을 때, Home 컴포넌트 렌더
  if (nextComponent === home || userToken) {
    return <Home />;
  }

  // 로그인 컴포넌트 렌더
  return (
    <div css={containerStyles}>
      <Title title="로그인" part="login" />
      <AuthForm />
    </div>
  );
}

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  gap: 96px;
  min-width: 280px;
  max-width: 360px;

  ${mq.md} {
    max-width: 480px;
  }
  ${mq.lg} {
    max-width: 640px;
  }
  ${mq.tab} {
    max-width: 1024px;
  }
`;

export default Main;
