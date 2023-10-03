import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import useFetch from '@/hooks/useFetch';
import createHyphenDate from '@/utils/createHyphenDate';
import UserInvitatioListItem from '@/components/user/UserInvitationListItem';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import UserInvitationListEdit from '@/components/user/UserInvitationListEdit';
import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { USER_INVITATIONLIST_TEXT } from '@/constants/user/userInvitationTexts';
import { getInvitationList } from '@/pages/api/invitation/editRequests';
import useInvitationEditStore from '@/stores/useInvitationEditStore';
import BottomSheet from '../common/BottomSheet';

function UserInvitationList() {
  const { openBottomSheet } = useBottomSheetStore();
  const { setEditContents } = useInvitationEditStore();
  const router = useRouter();
  const onClickHandler = () => {
    router.push('/user');
  };
  const onClickEditHandler = (e: React.MouseEvent<HTMLElement>) => {
    openBottomSheet(
      <UserInvitationListEdit id={e.currentTarget.getAttribute('value')} />,
    );
  };
  const { response } = useFetch({
    fetchFn: getInvitationList,
  });

  useEffect(() => {
    setEditContents('commonPlaceId', '');
    setEditContents('description', '');
    setEditContents('startDate', '');
    setEditContents('endDate', '');
    setEditContents('visitors', []);
  }, []);

  // 빋어온 데이터 객체를 다중 배열로 변환
  const invitationList = response && Object.values(response?.data);

  // 오늘 날짜 가져오는 로직
  const currentDate = new Date();
  // 데이터상 날짜 비교를 위한 포켓 변환
  const formattedDate = createHyphenDate(currentDate);

  return (
    <div css={userInvitationListStyles}>
      <Header title={USER_INVITATIONLIST_TEXT.title} onClick={onClickHandler} />
      {invitationList &&
        invitationList.map((item) => (
          <div
            key={`${item[0].startDate}${item[0].invitationId}`}
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
                value={value.invitationId}
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
