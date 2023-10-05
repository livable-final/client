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
import { css } from '@emotion/react';
import { useState, useEffect } from 'react';
import { LocationLine, Calendar, Clock } from '@/assets/icons';
import { COMMON_ERROR_MESSAGE } from '@/constants/common';
import { getInvitationPlaceList } from '@/pages/api/invitation/createRequests';
import { GetInvitationPlaceData } from '@/types/invitation/api';
import { ErrorMessageProps } from '@/types/common/errorMessage';
import {
  InvitationCreateTexts,
  InvitationInfoProps,
} from '@/types/invitation/create';

function InvitationInfo({
  tip,
  onChange,
  onFocus,
  onBlur,
}: InvitationInfoProps) {
  const { createContents } = useInvitationCreateStore();
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { alertState, openAlert } = useAlertStore();

  const { title, placeholder, checkbox }: InvitationCreateTexts = CREATE_TEXTS;
  const { noPlace }: ErrorMessageProps = COMMON_ERROR_MESSAGE;

  const [placeList, setPlaceList] = useState<GetInvitationPlaceData>();

  // 날짜/시간 input value
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  // 초대 가능한 장소 호출
  const { response } = useFetch({
    fetchFn: getInvitationPlaceList,
  });

  // 초대 가능한 장소 응답 데이터 저장
  useEffect(() => {
    if (response?.data) {
      setPlaceList(response.data);
    }
  }, [response]);

  // 초대장 스토어 데이터가 변할 때 startDate, endDate 설정
  useEffect(() => {
    if (createContents.startDate.includes('undefined')) {
      // 시간을 선택하지 않거나 유효한 예약 시간이 아닐 경우
      openAlert('', '예약 가능한 시간을 다시 확인해 주세요!');
      setDate('');
      setTime('');
    } else if (createContents.startDate) {
      setDate(
        // startDate와 endDate가 같을 경우: yyyy-mm-dd
        // 다를 경우: yyyy-mm-dd ~ yyyy-mm-dd 표기
        createContents.startDate.split('T')[0] ===
          createContents.endDate.split('T')[0]
          ? `${createContents.startDate.split('T')[0]}
            `
          : `${createContents.startDate.split('T')[0]} ~ ${
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
              <LocationLine />
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
      {alertState.isOpen && <Alert isSans />}
      {bottomSheetState.isOpen && <BottomSheet />}
    </>
  );
}

const infoContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  min-width: 280px;
  max-width: 640px;
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
  width: 100%;
`;

const placeInputStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  width: 100%;
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
  width: 100%;
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
  width: 100%;
  font: ${theme.font.subTitle.subTitle2_400};
  color: ${theme.palette.input.default};
`;

const textareaStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export default InvitationInfo;
