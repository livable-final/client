import theme from '@/styles/theme';
import { css } from '@emotion/react';
import Image from 'next/image';
import { DUMMY_RESPONSE } from '@/constants/user/userTexts';
import UserPoint from '@/components/user/UserPoint';
import { ProfileWithBg } from '@/assets/icons';

function UserInfo() {
  const response = DUMMY_RESPONSE;

  // 서버로부터 프로필이미지를 전달받으면 그대로 이미지 출력, 존재하지 않는다면 더미이미지를 출력하는 함수
  const renderProfileImg = (item: string) => {
    if (item === '') {
      return <ProfileWithBg />;
    }
    return <Image src={response.profileImage} alt="프로필" />;
  };

  return (
    <div css={containerStyles}>
      <div css={profileStyles}>
        <div css={profileImgStyles}>
          {renderProfileImg(response.profileImage)}
        </div>
        <div css={wrapperStyles}>
          <span css={nameStyles}>{response.employeeName}님</span>
          <span css={companyStyles}>{response.companyName}</span>
        </div>
      </div>
      <UserPoint point={response.point} />
    </div>
  );
}
const containerStyles = css`
  display: flex;
  padding: 16px 0 24px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const profileStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const profileImgStyles = css`
  display: flex;
  width: 52px;
  height: 52px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
`;

const wrapperStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
`;

const nameStyles = css`
  font: ${theme.font.subTitle.subTitle2_600};
`;

const companyStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.input.unabled};
`;

export default UserInfo;
