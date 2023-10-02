import { css } from '@emotion/react';
import { INVITATION_EDIT_TEXTS } from '@/constants/invitation/editTexts';
import { useState } from 'react';
import theme from '@/styles/theme';
import Add from '@/components/common/Add';
import Button from '@/components/common/Button';
import NameTag from '@/components/common/NameTag';
import AddressBook from '@/components/common/AddressBook';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import useInvitationEditStore from '@/stores/useInvitationEditStore';
import { InvitationAddVisitorListProps } from '@/types/invitation/edit';

function InvitationAddVisitorList({
  visitorsList,
}: InvitationAddVisitorListProps) {
  const [addVisitorName, setAddVisitorName] = useState('');
  const [addVisitorContact, setAddVisitorContact] = useState('');
  const { closeBottomSheet } = useBottomSheetStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();
  const { editContents, setEditContents } = useInvitationEditStore();

  // 방문자 삭제 버튼 핸들러
  const onClickDeleteVisitorHandler = (name: string) => {
    const deletedVisitors = createContents.visitors?.filter(
      (visitor) => visitor.name !== name,
    );
    setCreateContents('visitors', deletedVisitors);
  };

  // 추가 사용자 이름 input handler
  const onChangeInputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddVisitorName(e.target.value);
  };
  // 추가 사용자 연락처 input handler
  const onChangeInputContactHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAddVisitorContact(e.target.value);
  };

  // 바텀시트에서 추가한 새로운 visitorList
  const newVisitorList = (name: string, contact: string): void => {
    // 새로 추가할 visitor 객체
    const newVisitorInfo = {
      name,
      contact,
    };
    // 수정 페이지
    if (editContents.visitors) {
      setEditContents('visitors', [...editContents.visitors, newVisitorInfo]);
    }
    // 생성 페이지
    if (visitorsList) {
      setCreateContents('visitors', [
        ...createContents.visitors,
        newVisitorInfo,
      ]);
    }
    // input창 clear
    setAddVisitorName('');
    setAddVisitorContact('');
  };

  // + 버튼 클릭시 newVisotorList에 input값 추가
  const onClickAddHandler = () => {
    newVisitorList(addVisitorName, addVisitorContact);
  };

  // 완료 버튼
  const onclickDoneBtnHandler = () => {
    closeBottomSheet();
  };

  return (
    <div css={invitationEditVisitorAddStyles}>
      <div css={titleStyles}>{INVITATION_EDIT_TEXTS.bottomSheet.title}</div>
      <div css={visitorAddInputContainerStyles}>
        <input
          type="text"
          placeholder={INVITATION_EDIT_TEXTS.bottomSheet.name}
          css={visitorAddInputStyles}
          value={addVisitorName}
          onChange={onChangeInputNameHandler}
        />
        <input
          type="text"
          placeholder={INVITATION_EDIT_TEXTS.bottomSheet.contact}
          css={visitorAddInputStyles}
          value={addVisitorContact}
          onChange={onChangeInputContactHandler}
        />
        <div css={visitorcontactaddBtnStyles}>
          <AddressBook />
        </div>
        <div css={visitorListContainerStyles}>
          <div css={newVisitorAddBtnStyles}>
            <Add onClick={onClickAddHandler} />
          </div>
          <div css={newVisitorListStyles}>
            {/* 기존 visitorList */}
            {createContents.visitors &&
              createContents.visitors?.map((item) => (
                <NameTag
                  key={item.name}
                  name={item.name}
                  onClick={onClickDeleteVisitorHandler}
                />
              ))}
          </div>
        </div>
      </div>
      <Button
        content={INVITATION_EDIT_TEXTS.bottomSheet.btn}
        variant="blue"
        onClick={onclickDoneBtnHandler}
      />
    </div>
  );
}
const invitationEditVisitorAddStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 54px;
`;
const titleStyles = css`
  margin: 4px auto 44px;
  font: ${theme.font.subTitle.subTitle2_600};
  color: ${theme.palette.title};
`;
const visitorAddInputContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: 12px 0;
`;
const visitorAddInputStyles = css`
  display: flex;
  border: none;
  border-bottom: 2px solid ${theme.palette.greyscale.grey10};
`;
const visitorcontactaddBtnStyles = css`
  display: flex;
  justify-content: flex-end;
  text-align: right;
`;
const visitorListContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const newVisitorAddBtnStyles = css`
  display: flex;
  justify-content: center;
  margin: 12px 0 60px;
`;
const newVisitorListStyles = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 0 8px;
  margin-bottom: 16px;
`;
export default InvitationAddVisitorList;
