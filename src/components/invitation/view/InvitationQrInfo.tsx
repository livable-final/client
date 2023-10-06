import { css } from '@emotion/react';
import Header from '@/components/common/Header';
import {
  INVITATION_VEIW_INFO_TEXTS,
  INVITATION_VIEW_TICKET_THEME,
} from '@/constants/invitation/viewTexts';
import InvitationQrInfoText from '@/components/invitation/view/InvitationQrInfoText';
import InvitationQrInfoCode from '@/components/invitation/view/InvitationQrInfoCode';
import useInvitationThemeStore from '@/stores/invitaion/useInvitationThemeStore';
import {
  InvitationInfoContainerProps,
  InvitationInfoThemeProps,
} from '@/types/invitation/view';
import mq from '@/utils/mediaquery';

function InvitationQrInfo({ data }: InvitationInfoContainerProps) {
  const { themeState, setThemeState } = useInvitationThemeStore();
  const { category } = INVITATION_VEIW_INFO_TEXTS;
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
    <div>
      <Header title={category.code} />
      <button type="button" onClick={onClickSetThemeHandler} css={queryStyles}>
        <div css={invitationQrContainer(variantData)}>
          <InvitationQrInfoText data={data} />
          <div css={invitationQrticket}>
            <div css={leftPuchingStyles(variantData)} />
            <div css={dashLineStlyes} />
            <div css={rightPuchingStyles(variantData)} />
          </div>
          <InvitationQrInfoCode />
        </div>
      </button>
    </div>
  );
}
const queryStyles = css`
  overflow-x: scroll;
  ${mq.md} {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  ${mq.lg} {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin: 0 auto;
  }
`;
const invitationQrContainer = (variantData: InvitationInfoThemeProps) => css`
  position: relative;
  width: 350px;
  height: 482px;
  margin: 23px auto 50px;
  padding: 30px;
  border-radius: 12px;
  box-shadow: ${variantData.shadow};
  background-image: ${variantData.backgroundImageBig};
  ::before {
    content: '';
    position: absolute;
    left: 20px;
    width: 87%;
    height: 95%;
    border-radius: 5%;
    background-image: ${variantData.boxShadow};
    filter: blur(20px);
    z-index: -1;
  }
`;
const invitationQrticket = css`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;
const leftPuchingStyles = (variantData: InvitationInfoThemeProps) => css`
  position: absolute;
  background-color: #fff;
  width: 44px;
  height: 44px;
  left: -20px;
  border-radius: 0 22px 22px 0;
  background-image: ${variantData.side};
`;
const rightPuchingStyles = (variantData: InvitationInfoThemeProps) => css`
  position: absolute;
  background-color: #fff;
  width: 42px;
  height: 44px;
  right: -20px;
  border-radius: 22px 0 0 22px;
  background-image: ${variantData.sideRight};
`;
const dashLineStlyes = css`
  width: 100%;
  margin: 0 24px;
  height: 22px;
  background: none;
  border-bottom: 2px dashed rgba(255, 255, 255, 0.2);
`;

export default InvitationQrInfo;
