import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { INVITATION_EDIT_TEXTS } from '@/constants/invitation/editTexts';
import {
  getInvitationEditList,
  getInvitationListItem,
} from '@/pages/api/invitation/editRequests';
import { Clock, Calendar, Location } from '@/assets/icons';
import { InvitationEditProps } from '@/types/invitation/edit';
import theme from '@/styles/theme';
import useFetch from '@/hooks/useFetch';
import Add from '@/components/common/Add';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import NameTag from '@/components/common/NameTag';
import CheckBox from '@/components/common/CheckBox';
import BottomSheet from '@/components/common/BottomSheet';
import changeVisitPurpose from '@/utils/changeVisitPurpose';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import InvitationEditvisitorAdd from '@/components/invitation/edit/InvitationAddVisitorList';
import useInvitationEditStore from '@/stores/useInvitationEditStore';
import { GetInvitationListItemData } from '@/types/invitation/api';

function InvitationEdit({ id }: InvitationEditProps) {
  const { editContents, setEditContents } = useInvitationEditStore();
  const { openBottomSheet } = useBottomSheetStore();
  const [descriptionInputValue, setDescriptionInputValue] = useState('');

  const { response } = useFetch({
    fetchFn: () => getInvitationListItem(id),
  });
  const data = response && response?.data;

  const setInitStateHandler = (
    startDate: string,
    endDate: string,
    initData?: GetInvitationListItemData,
  ) => {
    setEditContents('commonPlaceId', initData?.commonPlaceId);
    setEditContents('description', initData?.description);
    setEditContents('startDate', startDate);
    setEditContents('endDate', endDate);
  };
  useEffect(() => {
    setInitStateHandler(startDate, endDate, data);
  }, []);

  // 수정용 일시 데이터로 변환
  const editStartDateFometer = (date?: string, time?: string) => {
    return `${date}T${time}`;
  };
  const startDate = editStartDateFometer(data?.startDate, data?.startTime);
  const endDate = editStartDateFometer(data?.endDate, data?.endTime);

  // 화면 날짜 데이터 변환
  const dateValueFormeter = (start?: string, end?: string) => {
    return `${start} ~ ${end}`;
  };
  const dateValue = dateValueFormeter(data?.startDate, data?.endDate);

  // 화면 시간 데이터 변환
  const timeValueFormeter = (start?: string, end?: string) => {
    return `${start?.substring(0, 5)} ~ ${end?.substring(0, 5)}`;
  };
  const timeValue = timeValueFormeter(data?.startTime, data?.endTime);

  // 이미 초대된 방문자 목록
  const invitedList = data?.visitors;

  // 방문 목적 영한 변환
  const purpose = changeVisitPurpose(data?.purpose);

  const onClickHandler = () => {
    getInvitationEditList(editContents, id as string);
  };
  const onChangeEditTextHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setDescriptionInputValue(e.target.value);
    setEditContents('description', e.target.value);
  };

  const onClickVisitorAddHandler = () => {
    openBottomSheet(
      <InvitationEditvisitorAdd isEdit visitorsList={data?.visitors} />,
    );
  };
  return (
    <div css={invitationEditStyles}>
      <Header
        title={INVITATION_EDIT_TEXTS.title}
        onClick={onClickHandler}
        type="text"
        text={purpose}
      />
      <div css={invitationEditContantsContainerStyles}>
        <div css={subTitleStyles}>{INVITATION_EDIT_TEXTS.subTitle}</div>
        <div css={inputContainerStyles}>
          <div css={officeInfoContainerStyles}>
            <div css={iconStyles}>
              <Location />
            </div>
            <input type="text" value={data?.officeName} readOnly />
          </div>
          <div css={dateTimeContainerStyles}>
            <div css={dateTimeStyles}>
              <div css={iconStyles}>
                <Calendar />
              </div>
              <input
                type="text"
                value={dateValue}
                readOnly={purpose === '면접' && true}
              />
            </div>
            <div css={dateTimeStyles}>
              <div css={iconStyles}>
                <Clock />
              </div>
              <input
                type="text"
                value={timeValue}
                readOnly={purpose === '면접' && true}
              />
            </div>
          </div>
          <Input
            textarea
            variant="default"
            placeholder={data?.description}
            maxLength={299}
            value={descriptionInputValue}
            onChange={onChangeEditTextHandler}
          />
          <CheckBox text="이 메세지를 다음에도 사용" />
        </div>
        <div css={visitorListContainerStyles}>
          <div css={addVisitorListstyleStyle}>
            <Add isBlue onClick={onClickVisitorAddHandler} />
            {editContents.visitors &&
              editContents?.visitors.map((item) => (
                <NameTag
                  key={item.contact}
                  name={item.name}
                  onClick={onClickHandler}
                />
              ))}
          </div>
          <div css={ivitedVisitorListContainerStyles}>
            {invitedList &&
              invitedList.map((item) => (
                <NameTag
                  key={item.visitorId}
                  name={item.name}
                  onClick={onClickHandler}
                  isInvited
                />
              ))}
          </div>
        </div>
      </div>
      <BottomSheet />
      <div css={invitationEditSubmitBtnStlyes}>
        <Button
          content="초대장 다시보내기"
          variant="blue"
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
}
const invitationEditStyles = css`
  position: relative;
  height: 100vh;
`;
const invitationEditContantsContainerStyles = css`
  height: 82vh;
  overflow: scroll;
`;
const subTitleStyles = css`
  color: ${theme.palette.title};
  font: ${theme.font.subTitle.subTitle1_600};
  line-height: 25px;
  margin: 28px 4px 16px;
`;
const inputContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px 0;
`;
const officeInfoContainerStyles = css`
  display: flex;
  align-items: center;
  padding: 0 16px;
  border: 2px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  color: ${theme.palette.greyscale.grey30};
  input {
    border: none;
  }
`;
const dateTimeContainerStyles = css`
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  padding: 0 16px;
  input {
    border: none;
  }
`;
const dateTimeStyles = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  input {
    border: none;
  }
`;
const iconStyles = css`
  display: flex;
  width: 24px;
  height: 24px;
  justify-content: center;
`;
const visitorListContainerStyles = css`
  margin-top: 40px;
`;
const addVisitorListstyleStyle = css`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 0 8px;
`;
const ivitedVisitorListContainerStyles = css`
  display: flex;
  flex-direction: row;
  gap: 8px 8px;
  flex-wrap: wrap;
  margin: 20px 0 54px;
`;
const invitationEditSubmitBtnStlyes = css`
  position: sticky;
  bottom: 0;
`;

export default InvitationEdit;
