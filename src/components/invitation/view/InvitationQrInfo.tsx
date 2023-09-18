import { css } from '@emotion/react';
import Header from '@/components/common/Header';
import useViewStore from '@/stores/useViewStore';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';
import InvitationQrInfoText from '@/components/invitation/view/InvitationQrInfoText';
import InvitationQrInfoCode from '@/components/invitation/view/InvitationQrInfoCode';

const test = {
  palce: '그랑서울 10층 1004호 식스센스 사무실',
  date: '2023.08.21 ~ 08.23',
  time: '14:30~16:30',
};

function InvitationQrInfo() {
  const { category } = INVITATION_VEIW_INFO_TEXTS;
  const { setNextComponent } = useViewStore();
  const onClickHandler = () => {
    setNextComponent('');
  };

  return (
    <div>
      <Header title={category.qr} onClick={onClickHandler} />
      <div css={invitationQRContainer}>
        <InvitationQrInfoText textInfo={test} />
        <div css={invitationQrticket}>
          <div css={leftPuchingStyles} />
          <div css={dashLineStlyes} />
          <div css={rightPuchingStyles} />
        </div>
        <InvitationQrInfoCode />
      </div>
    </div>
  );
}

const invitationQRContainer = css`
  position: relative;
  height: 482px;
  margin: 23px 4px 50px;
  padding: 30px;
  border-radius: 12px;
  background-image: linear-gradient(
    140.72deg,
    #2563eb 11.61%,
    #457ffe 22.34%,
    #2563eb 40.09%,
    #5c8fff 71.66%,
    #2563eb 80.29%
  );
  box-shadow: 0px 32px 30px -20px rgba(130, 169, 255, 0.87);
`;

const invitationQrticket = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 32px;
`;
const leftPuchingStyles = css`
  position: absolute;
  background-color: #fff;
  width: 22px;
  height: 44px;
  left: -1px;
  border-radius: 0 22px 22px 0;
  background-image: linear-gradient(to left, #98abffaf, #d6deffde, #ffffff);
`;
const rightPuchingStyles = css`
  position: absolute;
  background-color: #fff;
  width: 22px;
  height: 44px;
  right: -1px;
  border-radius: 22px 0 0 22px;
  background-image: linear-gradient(to right, #98abffdf, #d6deffde, #ffffff);
`;
const dashLineStlyes = css`
  width: 100%;
  margin: 0 24px;
  height: 22px;
  background: none;
  border-bottom: 2px dashed rgba(255, 255, 255, 0.2);
`;

export default InvitationQrInfo;
