import Input from '@/components/common/Input';
import CheckBox from '@/components/common/CheckBox';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationPlace from '@/components/invitation/create/InvitationPlace';
import InvitationDateTime from '@/components/invitation/create/InvitationDateTime';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { Location, Calendar, Clock } from '@/assets/icons';
import { ChangeEvent, useEffect, useState } from 'react';
import { InvitationCreateTexts } from '@/types/invitation/create';
import { getInvitationPlaceList } from '@/pages/api/invitation/createRequests';

function InvitationInfo({ defaultPlace = '10층 회의실 A' }) {
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { title, placeholder, checkbox }: InvitationCreateTexts = CREATE_TEXTS;
  const [tip, setTip] = useState('');

  const onClickPlaceHandler = () => {
    openBottomSheet(<InvitationPlace />);
  };

  const onClickDateTimeHandler = () => {
    openBottomSheet(<InvitationDateTime />);
  };

  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTip(e.target.value);
  };

  useEffect(() => {
    const res = getInvitationPlaceList();
    console.log(res);
  }, []);

  return (
    <>
      <div css={containerStyles}>
        <div css={titleStyles}>{title.invitationInfo}</div>
        <div css={inputContainerStyles}>
          {/* 장소 선택 */}
          <div css={placeInputStyles}>
            <div className="icon">
              <Location />
            </div>
            <input
              css={inputStyles}
              type="text"
              placeholder={placeholder.place}
              defaultValue={defaultPlace}
              onClick={onClickPlaceHandler}
              readOnly
            />
          </div>
          {/* 날짜, 시간 선택 */}
          <div css={dateTimeInputStyles}>
            <div className="date">
              <div className="icon">
                <Calendar />
              </div>
              <input
                css={inputStyles}
                type="text"
                placeholder={placeholder.date}
                onClick={onClickDateTimeHandler}
                readOnly
              />
            </div>
            <div className="time">
              <div className="icon">
                <Clock />
              </div>
              <input
                css={inputStyles}
                type="text"
                placeholder={placeholder.time}
                onClick={onClickDateTimeHandler}
                readOnly
              />
            </div>
          </div>
          {/* 꿀팁 작성 */}
          <div css={textareaStyles}>
            <Input
              value={tip}
              onChange={onChange}
              variant="default"
              textarea
              placeholder={placeholder.tip}
              row={4}
              maxLength={99}
            />
            <CheckBox text={checkbox} />
          </div>
        </div>
      </div>
      {bottomSheetState.isOpen && <BottomSheet />}
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
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export default InvitationInfo;
