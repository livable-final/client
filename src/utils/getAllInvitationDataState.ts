import { PostInvitationContents } from '@/types/invitation/api';

// obj : 초대장 생성에 필요한 모든 데이터
const getAllInvitationDataState = (
  initialObj: PostInvitationContents,
  obj: PostInvitationContents,
) => {
  const initialKey = Object.keys(initialObj);

  initialKey.forEach((key) => {
    if (initialObj[key] === obj[key]) {
      return false;
    }
  });

  return true;
};

export default getAllInvitationDataState;
