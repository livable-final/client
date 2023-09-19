import UserTitle from '@/components/user/UserTitle';
import UserInfo from '@/components/user/UserInfo';
import UserNavigator from '@/components/user/UserNavigator';
import Bnb from '@/components/common/Bnb';
import { USER_TEXTS } from '@/constants/user/userTexts';

function User() {
  return (
    <div>
      <UserTitle />
      <UserInfo />
      {USER_TEXTS.navigator.map((item) => (
        <UserNavigator key={item.title} title={item.title} href={item.href} />
      ))}
      <Bnb />
    </div>
  );
}

export default User;
