import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { LocationFill, CalendarFill } from '@/assets/icons';

const test = {
  place: '그랑서울 10층 1004호 식스센스 사무실',
  date: '2023.08.21~ 08.23',
  time: '14:30 ~ 16:30',
};
function InvitationInfo() {
  return (
    <div css={infoContainerStyles}>
      <div css={design} />
      <div css={infoLineStyles}>
        <div css={placeInfoStyles}>
          <div className="icon">
            <LocationFill />
          </div>
          <div className="info">{test.place}</div>
        </div>
        <div css={placeInfoStyles}>
          <div className="icon">
            <CalendarFill />
          </div>
          <div>
            <div className="info">{test.date}</div>
            <div className="info">{test.time}</div>
          </div>
        </div>
      </div>
      <div css={infoQRContainerStyles}>
        <div>임시출입증</div>
        <div className="test">큐알</div>
        <div>크게보기</div>
      </div>
    </div>
  );
}
const infoContainerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 30px 0 30px 40px;
  margin-bottom: 37px;
  overflow: hidden;
  width: 100%;
  color: ${theme.palette.white};
  background-image: linear-gradient(
    28deg,
    rgba(37, 99, 235, 1) 30%,
    rgba(37, 99, 235, 0.77) 80%,
    rgba(37, 99, 235, 0.87) 100%
  );
  box-shadow: 2px 5px 20px #92afffb2;
  border-radius: 12px;
`;
// 임시로
const design = css`
  position: absolute;
  top: 36%;
  left: -24px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: aliceblue;
  box-shadow: inset 0px 3px 6px #92afffb2;
`;
const placeInfoStyles = css`
  display: flex;
  flex-direction: row;
  padding-right: 17px;
  font: ${theme.font.body.body1_400};
  line-height: 24px;
  .icon {
    width: 24px;
    height: 24px;
  }
  .info {
    margin-left: 15px;
  }
  :nth-child(1) {
    margin-bottom: 21px;
  }
`;
const infoLineStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-content: space-between;
  border-right: 2px dashed rgba(255, 255, 255, 0.2);
`;

const infoQRContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 70px;
  margin: 0 21px;
  font: ${theme.font.body.body1_500};
  .test {
    margin: 15px auto;
    width: 40px;
    height: 40px;
    background-color: aliceblue;
  }
`;

export default InvitationInfo;
