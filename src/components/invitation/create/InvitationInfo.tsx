import Input from '@/components/common/Input';
import CheckBox from '@/components/common/CheckBox';
import Alert from '@/components/common/Alert';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationPlace from '@/components/invitation/create/InvitationPlace';
import InvitationDateTime from '@/components/invitation/create/InvitationDateTime';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useAlertStore from '@/stores/useAlertStore';
import useFetch from '@/hooks/useFetch';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { useState, useEffect } from 'react';
import { Location, Calendar, Clock } from '@/assets/icons';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { getInvitationPlaceList } from '@/pages/api/invitation/createRequests';
import { GetInvitationPlaceData } from '@/types/invitation/api';
import { InvitationInfoProps } from '@/types/invitation/create';
import { ErrorMessageProps } from '@/types/common/errorMessage';
import { css } from '@emotion/react';

function InvitationInfo({
  tip,
  onChange,
  onFocus,
  onBlur,
}: InvitationInfoProps) {
  const { createContents } = useInvitationCreateStore();
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { alertState, openAlert } = useAlertStore();
  const { title, placeholder, checkbox } = CREATE_TEXTS;
  const { noPlace }: ErrorMessageProps = COMMON_ERROR_MESSAGE;

  const [placeList, setPlaceList] = useState<GetInvitationPlaceData>();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // 초대 가능한 장소 호출
  const { response } = useFetch({
    fetchFn: getInvitationPlaceList,
  });

  useEffect(() => {
    // 초대 가능한 장소 응답 데이터 저장
    if (response?.data) {
      setPlaceList(response.data);
    }
  }, [response]);

  useEffect(() => {
    if (createContents.startDate) {
      setDate(
        `${createContents.startDate.split('T')[0]} ~ ${
          createContents.endDate.split('T')[0]
        }`,
      );
      setTime(
        `${createContents.startDate
          .split('T')[1]
          ?.slice(0, 5)} ~ ${createContents.endDate
          .split('T')[1]
          ?.slice(0, 5)}`,
      );
    } else {
      setDate('');
      setTime('');
    }
  }, [createContents]);

  // 장소 선택 바텀시트 오픈
  const onClickPlaceHandler = () => {
    if (placeList) {
      openBottomSheet(<InvitationPlace placeList={placeList} />);
    }
  };

  // 날짜/시간 선택 바텀시트 오픈
  const onClickDateTimeHandler = () => {
    if (createContents.commonPlaceId === 0) {
      openAlert('📢', noPlace);
    } else {
      openBottomSheet(<InvitationDateTime />);
    }
  };

  return (
    <>
      <div css={infoContainerStyles}>
        <div css={titleStyles}>{title.invitationInfo}</div>
        <div css={inputContainerStyles}>
          {/* 장소 선택 */}
          <div css={placeInputStyles}>
            <div css={icon}>
              <Location />
            </div>
            <input
              css={inputStyles}
              type="text"
              defaultValue={placeList?.offices[0].officeName}
              value={createContents.officeName}
              placeholder={placeholder.place}
              onClick={onClickPlaceHandler}
              readOnly
            />
          </div>
          {/* 날짜, 시간 선택 */}
          <div css={dateTimeInputStyles}>
            <div css={dateTime}>
              <div css={icon}>
                <Calendar />
              </div>
              <input
                css={inputStyles}
                type="text"
                value={date}
                placeholder={placeholder.date}
                onClick={onClickDateTimeHandler}
                readOnly
              />
            </div>
            <div css={dateTime}>
              <div css={icon}>
                <Clock />
              </div>
              <input
                css={inputStyles}
                type="text"
                value={time}
                placeholder={placeholder.time}
                onClick={onClickDateTimeHandler}
                readOnly
              />
            </div>
          </div>
          {/* 꿀팁 작성 */}
          <div css={textareaStyles} onFocus={onFocus} onBlur={onBlur}>
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
      {alertState.isOpen && <Alert />}
      {bottomSheetState.isOpen && <BottomSheet />}
    </>
  );
}

const infoContainerStyles = css`
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
`;

const dateTime = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
`;

const icon = css`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  height: 24px;
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
