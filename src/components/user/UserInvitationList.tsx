import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import UserInvitatioListItem from '@/components/user/UserInvitationListItem';
import getTodayDate from '@/utils/getTodayDate';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { USER_INVITATIONLIST_TEXT } from '@/constants/user/userInvitationTexts';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import UserInvitationListEdit from '@/components/user/UserInvitationListEdit';
import BottomSheet from '../common/BottomSheet';

// 더미데이터
export const dataList = {
  '2023-09-24': [
    {
      invitationId: 6,
      visitorName: '김방문',
      visitorCount: 1, // 김방문도 포함된 카운트입니다.
      purpose: '면접',
      officeName: '그랑서울 B동 123호',
      startDate: '2023-09-24',
      startTime: '10:00:00',
      endTime: '12:30:00',
    },
    {
      invitationId: 7,
      visitorName: '김점검',
      visitorCount: 2,
      purpose: 'AS/점검',
      officeName: '그랑서울 A동 회의실 101',
      startDate: '2023-09-24',
      startTime: '11:00:00',
      endTime: '11:30:00',
    },
  ],
  '2023-10-27': [
    {
      invitationId: 1,
      visitorName: '김방문',
      visitorCount: 1, // 김방문도 포함된 카운트입니다.
      purpose: '면접',
      officeName: '그랑서울 B동 123호',
      startDate: '2023-10-27',
      startTime: '10:00:00',
      endTime: '12:30:00',
    },
    {
      invitationId: 2,
      visitorName: '김점검',
      visitorCount: 2,
      purpose: 'AS/점검',
      officeName: '그랑서울 A동 회의실 101',
      startDate: '2023-10-27',
      startTime: '11:00:00',
      endTime: '11:30:00',
    },
  ],
  '2023-10-28': [
    {
      invitationId: 3,
      visitorName: '김방문',
      visitorCount: 3,
      purpose: '회의',
      officeName: '그랑서울 B동 123호',
      startDate: '2023-10-28',
      startTime: '10:00:00',
      endTime: '12:30:00',
    },
  ],
  '2023-10-29': [
    {
      invitationId: 8,
      visitorName: '홍방문',
      visitorCount: 3,
      purpose: '회의',
      officeName: '그랑서울 B동 123호',
      startDate: '2023-10-29',
      startTime: '10:30:00',
      endTime: '11:30:00',
    },
  ],
  '2023-10-30': [
    {
      invitationId: 4,
      visitorName: '김방문',
      visitorCount: 4,
      purpose: '회의',
      officeName: '그랑서울 B동 123호',
      startDate: '2023-10-30',
      startTime: '09:00:00',
      endTime: '12:30:00',
    },
    {
      invitationId: 5,
      visitorName: '김수일',
      visitorCount: 2,
      purpose: '수리',
      officeName: '그랑서울 A동 회의실 101',
      startDate: '2023-10-30',
      startTime: '14:00:00',
      endTime: '15:00:00',
    },
  ],
};

function UserInvitationList() {
  const { openBottomSheet } = useBottomSheetStore();
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/user');
  };
  const onClickEditHandler = () => {
    openBottomSheet(<UserInvitationListEdit />);
  };

  // 빋어온 데이터 객체를 다중 배열로 변환
  const invitationList = Object.values(dataList);

  // 오늘 날짜 가져오는 로직
  const currentDate = new Date();
  // 데이터상 날짜 비교를 위한 포켓 변환
  const formattedDate = getTodayDate(currentDate);

  return (
    <div css={userInvitationListStyles}>
      <Header title={USER_INVITATIONLIST_TEXT.title} onClick={onClickHandler} />
      {invitationList.map((item) => (
        <div
          key={`${item[0].startDate}`}
          css={invitationListItemContainerStyles}
        >
          <div css={startDateStyles}>
            {`${item[0].startDate}` === `${formattedDate}`
              ? '오늘'
              : item[0].startDate}
          </div>
          {item.map((value) => (
            <button
              type="button"
              key={value.invitationId}
              onClick={onClickEditHandler}
            >
              <div css={invitationListItemStyles}>
                <UserInvitatioListItem data={value} />
              </div>
            </button>
          ))}
        </div>
      ))}
      <BottomSheet />
    </div>
  );
}
const userInvitationListStyles = css`
  display: flex;
  flex-direction: column;
  gap: 28px 0;
  margin-bottom: 66px;
  Header {
    margin-bottom: -12px;
  }
`;
const invitationListItemContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
const startDateStyles = css`
  margin: 0 0 -4px 4px;
  font: ${theme.font.body.body2_500};
  color: ${theme.palette.greyscale.grey40};
`;
const invitationListItemStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
export default UserInvitationList;
