import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { LocationFill, CalendarFill } from '@/assets/icons';
import {
  InvitationInfoProps,
  InvitationInfoThemeProps,
} from '@/types/invitation/view';
import usePagesStore from '@/stores/usePagesStore';
import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import { getVisitationQr } from '@/pages/api/invitation/viewRequests';
import { INVITATION_VIEW_TICKET_THEME } from '@/constants/invitation/viewTexts';
import useThemeStore from '@/stores/useThemeStore';

function InvitationInfo({ value, data }: InvitationInfoProps) {
  const { themeState, setThemeState } = useThemeStore();
  const { setNextComponent } = usePagesStore();
  const onClickHandler = (event: React.MouseEvent) => {
    setNextComponent((event.target as HTMLButtonElement).id);
  };
  const { response } = useFetch({
    fetchFn: getVisitationQr,
  });
  const qr = response?.data;

  // 시간 포멧 변환
  const startTime = data.invitationStartTime.substring(0, 5);
  const endTime = data.invitationEndTime.substring(0, 5);

  // 날짜 포멧 변환
  const changeDatefometer = (date: string) => {
    const [year, month, day] = date.split('-');
    const changedDate = `${year}.${month}.${day}`;
    return changedDate;
  };
  const startDate = changeDatefometer(data.invitationStartDate);
  const endDate = changeDatefometer(data.invitationEndDate).substring(5, 10);

  // 테마 커스텀 > 어떤 화면에서 커스텀 할지 추후 수정이라 두페이지 모두에 남겨두었습니다
  const onClickSetThemeHandler = () => {
    // 클릭 시마다 클릭 횟수 증가
    setThemeState('clickCount', themeState.clickCount + 1);
    if (themeState.clickCount === 4) {
      setThemeState('clickCount', 0);
    }
    switch (themeState.clickCount) {
      case 0:
        return setThemeState('theme', 'default');
      case 1:
        return setThemeState('theme', 'pink');
      case 2:
        return setThemeState('theme', 'green');
      case 3:
        return setThemeState('theme', 'orange');
      case 4:
        return setThemeState('theme', 'skyblue');
      default:
        break;
    }
    return null;
  };

  const variantData = INVITATION_VIEW_TICKET_THEME[themeState.theme];

  return (
    <button
      type="button"
      onClick={onClickSetThemeHandler}
      css={infoContainerStyles(variantData)}
    >
      <div css={infoContainerDesignStyles(variantData)} />
      <div css={infoLineStyles}>
        <div css={placeInfoStyles}>
          <div css={iconContainerStyles}>
            <LocationFill />
          </div>
          <div css={textInfoStyles}>{data.invitationOfficeName}</div>
        </div>
        <div css={placeInfoStyles}>
          <div css={iconContainerStyles}>
            <CalendarFill />
          </div>
          <div>
            <div css={textInfoStyles}>
              {startDate} ~ {endDate}
            </div>
            <div css={textInfoStyles}>
              {startTime} ~ {endTime}
            </div>
          </div>
        </div>
      </div>
      <div css={infoQRContainerStyles}>
        <button type="button" id={value} onClick={onClickHandler}>
          <div id={value}>임시출입증</div>
          <div className="test" id={value}>
            <Image
              src={`data:image/png;base64,${qr?.qr}`}
              alt="임시출입증"
              width={40}
              height={40}
            />
          </div>
          크게보기
        </button>
      </div>
    </button>
  );
}

const infoContainerStyles = (variantData: InvitationInfoThemeProps) => css`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  padding: 30px 0 30px 40px;
  margin: 0 auto 26px;
  width: 358px;
  color: ${theme.palette.white};
  background-image: ${variantData.backgroundImage};
  box-shadow: ${variantData.shadow};
  border-radius: 12px;
  ::before {
    content: '';
    position: absolute;
    left: 0px;
    width: 100%;
    height: 78%;
    border-radius: 40%;
    background: ${variantData.boxShadow};
    filter: blur(20px); /* 그라데이션 설정 */
    z-index: -1; /* 가상 요소를 실제 요소 뒤로 이동 */
  }
`;

const infoContainerDesignStyles = (
  variantData: InvitationInfoThemeProps,
) => css`
  position: absolute;
  top: 36%;
  left: -2px;
  width: 26px;
  height: 48px;
  border-radius: 0 100px 100px 0;
  background-image: ${variantData.side};
`;
const placeInfoStyles = css`
  display: flex;
  flex-direction: row;
  padding-right: 16px;
  font: ${theme.font.body.body1_400};
  line-height: 24px;
`;
const iconContainerStyles = css`
  width: 24px;
  height: 24px;
`;
const textInfoStyles = css`
  margin-left: 2px;
`;
const infoLineStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  height: 110px;
  border-right: 2px dashed rgba(255, 255, 255, 0.2);
`;
const infoQRContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  margin: 0 21px;
  button {
    font: ${theme.font.body.body1_500};
    color: ${theme.palette.white};
    cursor: pointer;
  }
  //삭제예정입니다
  .test {
    margin: 15px auto;
    width: 40px;
    height: 40px;
    background-color: aliceblue;
  }
`;

export default InvitationInfo;
