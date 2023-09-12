import Input from '@/components/common/Input';
import { css } from '@emotion/react';
import { Location, Calendar, Clock } from '@/assets/icons';
import theme from '@/styles/theme';

function InvitationDate() {
  return (
    <div>
      <div>초대 정보</div>
      <div>
        {/* 장소 선택 */}
        <div css={placeInputStyles}>
          <div className="icon">
            <Location />
          </div>
          <input css={inputStyles} type="text" placeholder="장소 선택" />
        </div>
        {/* 날짜, 시간 선택 */}
        <div css={dateTimeInputStyles}>
          <div className="date">
            <div className="icon">
              <Calendar />
            </div>
            <input css={inputStyles} type="text" placeholder="날짜 선택" />
          </div>
          <div className="time">
            <div className="icon">
              <Clock />
            </div>
            <input css={inputStyles} type="text" placeholder="시간 선택" />
          </div>
        </div>
        {/* 꿀팁 작성 */}
        <Input
          variant="default"
          textarea
          placeholder="방문하시는 분이 장소를 쉽게 찾을 수 있게 팁을 알려주세요."
          row={4}
          maxLength={100}
        />
      </div>
    </div>
  );
}

const placeInputStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  padding: 0 8px 0 16px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
  }
`;

const dateTimeInputStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  padding: 0 8px 0 16px;

  .date,
  .time {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 24px;
      height: 24px;
    }
  }
`;

const inputStyles = css`
  border: none;
  border-radius: 12px;
`;

export default InvitationDate;
