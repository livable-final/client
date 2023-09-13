import Input from '@/components/common/Input';
import { css } from '@emotion/react';
import { Location, Calendar, Clock } from '@/assets/icons';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { useState } from 'react';

function InvitationDate({ defaultPlace = '10층 회의실 A' }) {
  const [isModal, setIsModal] = useState(false);

  const modalOpenHandler = () => {
    alert('클릭하면 모달이 오픈됩니다.');
    setIsModal(true);
  };

  return (
    <>
      <div css={containerStyles}>
        <div css={titleStyles}>초대 정보</div>
        <div css={inputContainerStyles}>
          {/* 장소 선택 */}
          <div css={placeInputStyles}>
            <div className="icon">
              <Location />
            </div>
            <input
              css={inputStyles}
              type="text"
              placeholder="장소 선택"
              defaultValue={defaultPlace}
              onClick={modalOpenHandler}
              readOnly
            />
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
          <div css={textareaStyles}>
            <Input
              variant="default"
              textarea
              placeholder="방문하시는 분이 장소를 쉽게 찾을 수 있게 팁을 알려주세요."
              row={4}
              maxLength={99}
            />
            {/* 이 메세지를 다음에 사용 */}
          </div>
        </div>
      </div>
      {isModal && <div>test</div>}
    </>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }
`;

const titleStyles = css`
  color: ${theme.palette.title};
  font: ${theme.font.subTitle.subTitle1_600};
  line-height: 25px;
`;

const inputContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const placeInputStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  padding: 0 8px 0 16px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    width: 24px;
    height: 24px;
    color: ${theme.palette.greyscale.grey40};
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
  width: 100%;

  .date,
  .time {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 24px;
      height: 24px;
    }
  }
`;

const inputStyles = css`
  border: none;
  border-radius: 12px;
  padding: 0;
  min-width: 200px;
  font: ${theme.font.subTitle.subTitle2_400};
  color: ${theme.palette.input.default};

  ${mq.md} {
    max-width: 100%;
  }
  ${mq.lg} {
    max-width: 100%;
  }
  ${mq.tab} {
    max-width: 100%;
  }
`;

const textareaStyles = css`
  width: 100%;
`;

export default InvitationDate;
