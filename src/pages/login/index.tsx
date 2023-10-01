import AuthForm from '@/components/auth/AuthForm';
import Title from '@/components/common/Title';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import useSaveStore from '@/stores/useSaveStore';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

function Login() {
  const [userToken, setUserToken] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = useSaveStore.getState().user;
    setUserToken(token);
  }, []);

  if (userToken) router.push('/');

  return (
    <div css={containerStyles}>
      <Title title={HOME_TEXTS.title.login} part="login" />
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
export default Login;
