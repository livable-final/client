import UserInfo from '@/components/user/UserInfo';
import UserNavigator from '@/components/user/UserNavigator';
import Bnb from '@/components/common/Bnb';
import { USER_TEXTS } from '@/constants/user/userTexts';
import { css } from '@emotion/react';
import Title from '@/components/common/Title';
import { HOME_TEXTS } from '@/constants/home/homeTexts';

function User() {
  const { user } = HOME_TEXTS.title;
  return (
    <>
      <section css={containerStyles}>
        <Title title={user} part="user" />
        <UserInfo />
        {USER_TEXTS.navigator.map((item) => (
          <UserNavigator key={item.title} title={item.title} href={item.href} />
        ))}
      </section>
      <Bnb />
    </>
  );
}

const containerStyles = css`
  height: calc(100vh - 56px);
`;

export default User;
