import theme from '@/styles/theme';
import { css } from '@emotion/react';
import UserPoint from '@/components/user/UserPoint';
import { ProfileWithBg } from '@/assets/icons';
import useFetch from '@/hooks/useFetch';
import { getMyData } from '@/pages/api/home/homeRequests';
import { useEffect } from 'react';
import useUserStore from '@/stores/common/useUserStore';

function UserInfo() {
  const { setState } = useUserStore;
  const { response } = useFetch({
    fetchFn: getMyData,
  });

  useEffect(() => {
    setState({ ...response?.data });
  }, [response?.data, setState]);

  return (
    <div css={containerStyles}>
      <div css={profileStyles}>
        <div css={profileImgStyles}>
          <ProfileWithBg />
        </div>
        <div css={wrapperStyles}>
          <span css={nameStyles}>{response?.data.memberName}님</span>
          <span css={companyStyles}>{response?.data.companyName}</span>
        </div>
      </div>
      <UserPoint point={response?.data.pointValance} />
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
