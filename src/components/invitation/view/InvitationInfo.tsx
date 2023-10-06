import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { LocationFill, CalendarFill, RightZoom } from '@/assets/icons';
import {
  InvitationInfoProps,
  InvitationInfoThemeProps,
} from '@/types/invitation/view';
import usePagesStore from '@/stores/usePagesStore';
import useFetch from '@/hooks/useFetch';
import Image from 'next/image';
import { getVisitationQr } from '@/pages/api/invitation/viewRequests';
import {
  INVITATION_VIEW_TICKET_THEME,
  INVITATION_VEIW_INFO_TEXTS,
} from '@/constants/invitation/viewTexts';
import useThemeStore from '@/stores/useThemeStore';

function InvitationInfo({ value, data }: InvitationInfoProps) {
  const { ticket } = INVITATION_VEIW_INFO_TEXTS;
  const { themeState, setThemeState } = useThemeStore();
  const { setNextComponent } = usePagesStore();
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

  const onClickHandler = () => {
    setNextComponent(value);
  };
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
    <div css={infoContainerStyles(variantData)}>
      <div css={infoContainerDesignStyles(variantData)} />
      <button
        type="button"
        onClick={onClickSetThemeHandler}
        css={themeBtnStyles}
      >
        <div css={themeBtnStyles} />
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
                <div css={textInfoStyles}>
                  {startTime} ~ {endTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </button>
      <div css={infoQRContainerStyles}>
        <button type="button" id={value} onClick={onClickHandler}>
          <div id={value}>{ticket.headers}</div>
          <div css={qrStyles} id={value}>
            <Image
              src={`data:image/png;base64,${qr?.qr}`}
              alt={ticket.headers}
              width={46}
              height={46}
            />
          </div>
          <div css={zoomBtnStyles}>
            {ticket.zoom} <RightZoom />
          </div>
        </button>
      </div>
    </div>
  );
}

const infoContainerStyles = (variantData: InvitationInfoThemeProps) => css`
  display: flex;
  flex-direction: row;
  position: relative;
  padding: 0 0 0 40px;
  margin: 0 auto 26px;
  width: 358px;
  height: 178px;
  color: ${theme.palette.white};
  background-image: ${variantData.backgroundImage};
  border-radius: 12px;
  ::before {
    content: '';
    position: absolute;
    left: 20px;
    width: 90%;
    height: 85%;
    border-radius: 2%;
    background: ${variantData.boxShadow};
    filter: blur(10px);
    z-index: -1;
  }
`;

const themeBtnStyles = css`
  display: flex;
  flex-direction: row;
  text-align: left;
  justify-content: space-between;
  align-items: flex-start;
  padding: 34px 0;
  color: ${theme.palette.white};
`;

const infoContainerDesignStyles = (
  variantData: InvitationInfoThemeProps,
) => css`
  position: absolute;
  top: 36%;
  left: -20px;
  width: 48px;
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
  font: ${theme.font.body.body1_400};
  line-height: 24px;
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
  div {
    font: ${theme.font.body.body1_500};
  }
`;
const qrStyles = css`
  position: relative;
  margin: 10px auto;
  width: 46px;
  height: 46px;
`;
const zoomBtnStyles = css`
  display: flex;
  flex-direction: row;
  white-space: nowrap;
  justify-content: center;
  align-items: center;
  font: ${theme.font.body.body3_500};
`;

export default InvitationInfo;
