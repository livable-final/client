import AuthForm from '@/components/auth/AuthForm';
import useViewStore from '@/stores/usePagesStore';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import Home from '@/components/home';
import COMPONENT_NAME from '@/constants/common/pages';
import { useEffect, useState } from 'react';
import Title from '@/components/common/Title';

function Main() {
  const { nextComponent } = useViewStore();
  const { home } = COMPONENT_NAME.common;
  const [userToken, setUserToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('user');
    setUserToken(token);
  }, []);

  if (nextComponent === home || userToken) {
    return <Home />;
  }

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
