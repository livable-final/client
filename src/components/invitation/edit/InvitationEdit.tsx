import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { INVITATION_EDIT_TEXTS } from '@/constants/invitation/editTexts';
import { getInvitationListItem } from '@/pages/api/invitation/editRequests';
import { Clock, Calendar, Location } from '@/assets/icons';
import { InvitationEditProps, NewVisitorsList } from '@/types/invitation/edit';
import theme from '@/styles/theme';
import useFetch from '@/hooks/useFetch';
import Add from '@/components/common/Add';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import NameTag from '@/components/common/NameTag';
import CheckBox from '@/components/common/CheckBox';
import BottomSheet from '@/components/common/BottomSheet';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import InvitationEditvisitorAdd from '@/components/invitation/edit/InvitationAddVisitorList';
import useInvitationEditStore from '@/stores/useInvitationEditStore';
import { GetInvitationListItemData } from '@/types/invitation/api';

function InvitationEdit({ id }: InvitationEditProps) {
  const { editContents, setEditContents } = useInvitationEditStore();
  const [addVisitorList, setAddVisitorList] = useState<NewVisitorsList[]>([]);
  const { openBottomSheet } = useBottomSheetStore();

  const { response } = useFetch({
    fetchFn: getInvitationListItem,
    arg: id as string,
  });

  const data = response && response?.data;

  const setInitStateHandler = (initData?: GetInvitationListItemData) => {
    setEditContents('commonPlaceId', initData?.commonPlaceId);
    setEditContents('description', initData?.description);
    setEditContents('startDate', initData?.startDate);
    setEditContents('endDate', initData?.endDate);
  };
  // console.log('b', editContents);
  useEffect(() => {
    setInitStateHandler(data);
    // console.log('b', editContents);
  }, []);

  // const editedValue = `${data && data?.description}`;

  const dateValue = `${data?.startDate} ~ ${data?.endDate}`;
  const timeValue = `${data?.startTime.substring(
    0,
    5,
  )} ~ ${data?.endTime.substring(0, 5)}`;
  const invitedList = data?.visitors;

  const onClickHandler = () => {};
  const onChangeEditTextHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEditContents('description', e.target.value);
  };
  const onClickVisitorAddHandler = () => {
    openBottomSheet(
      <InvitationEditvisitorAdd
        isEdit
        visitorsList={editContents.visitors}
        setVisitorList={setAddVisitorList}
      />,
    );
  };
  return (
    <div css={invitationEditStyles}>
      <Header
        title={INVITATION_EDIT_TEXTS.title}
        onClick={onClickHandler}
        type="text"
        text="회의"
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
              <input type="text" value={dateValue} readOnly />
            </div>
            <div css={dateTimeStyles}>
              <div css={iconStyles}>
                <Clock />
              </div>
              <input type="text" value={timeValue} readOnly />
            </div>
          </div>
          <Input
            textarea
            variant="default"
            maxLength={299}
            value={editContents.description as string}
            onChange={onChangeEditTextHandler}
          />
          <CheckBox text="이 메세지를 다음에도 사용" />
        </div>
        <div css={visitorListContainerStyles}>
          <div css={addVisitorListstyleStyle}>
            <Add isBlue onClick={onClickVisitorAddHandler} />
            {addVisitorList.map((item) => (
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
        <Button content="초대장 다시보내기" variant="blue" />
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
