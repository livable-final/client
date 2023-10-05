import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { INVITATION_EDIT_TEXTS } from '@/constants/invitation/editTexts';
import {
  getInvitationEditList,
  getInvitationListItem,
} from '@/pages/api/invitation/editRequests';
import { InvitationEditProps } from '@/types/invitation/edit';
import {
  GetInvitationListItemData,
  InvitationListItemVisitor,
} from '@/types/invitation/api';
import { Clock, Calendar, Location } from '@/assets/icons';
import theme from '@/styles/theme';
import useFetch from '@/hooks/useFetch';
import Add from '@/components/common/Add';
import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import Header from '@/components/common/Header';
import NameTag from '@/components/common/NameTag';
import CheckBox from '@/components/common/CheckBox';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationEditvisitorAdd from '@/components/invitation/edit/InvitationAddVisitorList';
import changeVisitPurpose from '@/utils/changeVisitPurpose';
import useViewStore from '@/stores/usePagesStore';
import useModalStore from '@/stores/useModalStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationEditStore from '@/stores/useInvitationEditStore';
import Modal from '@/components/common/Modal';

function InvitationEdit({ id }: InvitationEditProps) {
  const { setNextComponent } = useViewStore();
  const { modalState, openModal, closeModal } = useModalStore();
  const { editContents, setEditContents } = useInvitationEditStore();
  const { openBottomSheet } = useBottomSheetStore();
  const [newDate, setNewDAte] = useState('');
  const [invitedList, setInvitedList] = useState<InvitationListItemVisitor[]>(
    [],
  );

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
    setEditContents(
      'description',
      editContents.description || initData?.description,
    );
    setEditContents('startDate', startDate);
    setEditContents('endDate', endDate);
  };

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

  // 방문 목적 영한 변환
  const purpose = changeVisitPurpose(data?.purpose);

  // 발송 완료 방문자 목록
  useEffect(() => {
    setInvitedList(data?.visitors);
  }, []);
  const resendList = invitedList?.map((item) => {
    const { visitorId, ...newItem } = item;
    return newItem;
  });

  const resendInvitatuion = () => {
    if (editContents && editContents?.visitors?.length === 0) {
      setEditContents('visitors', [...editContents.visitors, ...resendList]);
    }
  };

  // 초대장 다시 보내기 버튼 클릭시
  const onClickModalHandler = () => {
    getInvitationEditList(editContents, id as string);
    resendInvitatuion();
    closeModal();
    setNextComponent('InvitationDoneContainer');
  };
  const onClickHandler = () => {
    openModal(
      `${INVITATION_EDIT_TEXTS.modal.title}`,
      `${INVITATION_EDIT_TEXTS.modal.content}`,
    );
    setInitStateHandler(startDate, endDate, data);
  };
  const onChangeEditTextHandler = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEditContents('description', e.target.value);
  };

  const onClickVisitorAddHandler = () => {
    openBottomSheet(
      <InvitationEditvisitorAdd isEdit visitorsList={data?.visitors} />,
    );
  };
  const onClickDeleteHandler = (name: string) => {
    if (editContents) {
      const deletedVisitors = editContents.visitors?.filter(
        (visitor) => visitor.name !== name,
      );
      setEditContents('visitors', deletedVisitors);
    }
    if (invitedList) {
      const deleteinvitedVisitList = invitedList?.filter(
        (visitor) => visitor.name !== name,
      );
      setInvitedList(deleteinvitedVisitList);
    }
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
            <input type="text" defaultValue={data?.officeName} readOnly />
          </div>
          <div css={dateTimeContainerStyles}>
            <div css={dateTimeStyles}>
              <div css={iconStyles}>
                <Calendar />
              </div>
              {purpose === '면접' ? (
                <input
                  type="text"
                  value={newDate}
                  onChange={(e) => {
                    setNewDAte(e.target.value);
                  }}
                />
              ) : (
                <input type="text" value={dateValue} readOnly />
              )}
            </div>
            <div css={dateTimeStyles}>
              <div css={iconStyles}>
                <Clock />
              </div>

              {purpose === '면접' ? (
                <input type="text" value={timeValue} />
              ) : (
                <input type="text" value={timeValue} readOnly />
              )}
            </div>
          </div>
          <Input
            textarea
            variant="default"
            maxLength={299}
            value={editContents.description || data?.description || ''}
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
                  onClick={onClickDeleteHandler}
                />
              ))}
          </div>
          <div css={ivitedVisitorListContainerStyles}>
            {invitedList &&
              invitedList.map((item) => (
                <NameTag
                  key={item.visitorId}
                  name={item.name}
                  onClick={onClickDeleteHandler}
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
      {modalState.isOpen && (
        <Modal content="전송하기" onClick={onClickModalHandler} />
      )}
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
  border: 1px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  color: ${theme.palette.greyscale.grey30};
  input {
    border: none;
  }
`;
const dateTimeContainerStyles = css`
  display: flex;
  flex-direction: column;
  border: 1px solid ${theme.palette.greyscale.grey10};
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
