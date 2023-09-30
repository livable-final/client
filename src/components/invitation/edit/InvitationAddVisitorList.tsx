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
import { InvitationAddVisitorListProps } from '@/types/invitation/edit';
import { VisitorInfo } from '@/types/invitation/api';

function InvitationAddVisitorList({
  setVisitorList,
  visitorsList,
  isEdit = false,
}: InvitationAddVisitorListProps) {
  const [addVisitorName, setAddVisitorName] = useState('');
  const [addVisitorContact, setAddVisitorContact] = useState('');
  const [addVisitorList, setAddVisitorList] = useState<VisitorInfo[]>([]);
  const { closeBottomSheet } = useBottomSheetStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();

  // 방문자 삭제 버튼 핸들러
  const onClickDeleteVisitorHandler = (name: string) => {
    const deletedVisitors = createContents.visitors?.filter(
      (visitor) => visitor.name !== name,
    );
    setCreateContents('visitors', deletedVisitors);
  };

  // 추가 사용자 input handler
  const onChangeInputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddVisitorName(e.target.value);
  };
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
    // 수정에서 바텀시트로 들어왔을때 로직
    if (isEdit) {
      setAddVisitorList([...addVisitorList, newVisitorInfo]);
    }
    if (visitorsList) {
      // setAddVisitorList([...addVisitorList, newVisitorInfo]);
      setCreateContents('visitors', [
        ...createContents.visitors,
        newVisitorInfo,
      ]);
    }
    // input창 clear
    setAddVisitorName('');
    setAddVisitorContact('');
  };

  // 방문자 추가 버튼
  const onClickAddHandler = () => {
    newVisitorList(addVisitorName, addVisitorContact);
  };

  const addVisitorListHandler = (
    setNewList: React.Dispatch<React.SetStateAction<VisitorInfo[]>>,
    newList: VisitorInfo[],
  ) => {
    // props로 받아온 기존 visitorList에 새로운 visitor 추가
    setNewList(newList);
    // 바텀시트 close
    closeBottomSheet();
  };

  // 완료 버튼
  const onclickDoneBtnHandler = () => {
    if (setVisitorList) {
      addVisitorListHandler(setVisitorList, addVisitorList);
    } else closeBottomSheet();
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
            {/* props로 가져온 기존 visitorList */}
            {createContents.visitors &&
              createContents.visitors?.map((item) => (
                <NameTag
                  key={item.name}
                  name={item.name}
                  onClick={onClickDeleteVisitorHandler}
                />
              ))}
            {/* 새롭게 추가한 visitorList */}
            {isEdit &&
              addVisitorList.map((item) => (
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
