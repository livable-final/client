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
      <div css={infoContainerDesignStyles} />
      <div css={infoLineStyles}>
        <div css={placeInfoStyles}>
          <div css={iconContainerStyles}>
            <LocationFill />
          </div>
          <div css={textInfoStyles}>{test.place}</div>
        </div>
        <div css={placeInfoStyles}>
          <div css={iconContainerStyles}>
            <CalendarFill />
          </div>
          <div>
            <div css={textInfoStyles}>{test.date}</div>
            <div css={textInfoStyles}>{test.time}</div>
          </div>
        </div>
      </div>
      <button type="button" css={infoQRContainerStyles}>
        {/* 상수화예정입니다 */}
        <div>임시출입증</div>
        <div className="test">큐알</div>
        <div>크게보기</div>
      </button>
    </div>
  );
}
const infoContainerStyles = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  padding: 30px 0 30px 40px;
  margin: 0 auto 26px;
  width: 358px;
  color: ${theme.palette.white};
  background-image: linear-gradient(
    108deg,
    #2563eb 13.2%,
    #457ffe 22.74%,
    #2563eb 37.05%,
    #5c8fff 56.65%,
    #2563eb 82.62%
  );
  box-shadow: 0px 25px 20px -15px #becfffb0;
  border-radius: 12px;
`;
const infoContainerDesignStyles = css`
  position: absolute;
  top: 36%;
  left: -2px;
  width: 26px;
  height: 48px;
  border-radius: 0 100px 100px 0;
  background-image: linear-gradient(to left, #cae4ff, #ffffff);
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
  color: ${theme.palette.white};
  //삭제예정입니다
  .test {
    margin: 15px auto;
    width: 40px;
    height: 40px;
    background-color: aliceblue;
  }
`;

export default InvitationInfo;