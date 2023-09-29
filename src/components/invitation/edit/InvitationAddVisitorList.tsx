import { css } from '@emotion/react';
import { INVITATION_EDIT_TEXTS } from '@/constants/invitation/editTexts';
import { useState } from 'react';
import theme from '@/styles/theme';
import Add from '@/components/common/Add';
import Button from '@/components/common/Button';
import NameTag from '@/components/common/NameTag';
import AddressBook from '@/components/common/AddressBook';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import {
  NewVisitorsList,
  InvitationAddVisitorListProps,
} from '@/types/invitation/edit';

function InvitationAddVisitorList({
  setVisitorList,
  visitorsList,
  isEdit = true,
}: InvitationAddVisitorListProps) {
  const [addVisitorName, setAddVisitorName] = useState('');
  const [addVisitorContact, setAddVisitorContact] = useState('');
  const [addVisitorList, setAddVisitorList] = useState<NewVisitorsList[]>([]);
  const { closeBottomSheet } = useBottomSheetStore();

  // 삭제로직 추가 예정
  const onClickHandler = () => {};

  // 추가 사용자 inupt handler
  const onChangeInputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddVisitorName(e.target.value);
  };
  const onChangeInputContactHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAddVisitorContact(e.target.value);
  };

  // 바텀시트에서 추가한 새로운 visitorLsit
  const newVistorList = (name: string, contact: string): void => {
    // 새로 추가할 visitor 객체
    const newVistorName = {
      name,
      contact,
    };
    // 수정에서 바텀시트로 들어왔을때 로직
    if (isEdit) {
      setAddVisitorList([...addVisitorList, newVistorName]);
    } else if (setVisitorList && visitorsList) {
      setVisitorList([...visitorsList, newVistorName]);
    }
    // input창 clear
    setAddVisitorName('');
    setAddVisitorContact('');
  };

  const onClickAddHandler = () => {
    newVistorList(addVisitorName, addVisitorContact);
  };

  const addVisitorLsit = (
    setNewList: React.Dispatch<React.SetStateAction<NewVisitorsList[]>>,
    newList: NewVisitorsList[],
  ) => {
    // props로 받아온 기존 visitorList에 새로운 visitor 추가
    setNewList(newList);
    // 바텀시트 clsoe
    closeBottomSheet();
  };
  const onclickDoneBtnHandler = () => {
    if (setVisitorList) addVisitorLsit(setVisitorList, addVisitorList);
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
            {/* props로 가져온 기존 visitorLsit */}
            {visitorsList &&
              visitorsList.map((item) => (
                <NameTag
                  key={item.contact}
                  name={item.name}
                  onClick={onClickHandler}
                />
              ))}
            {/* 새롭게 추가한 visitorLsit */}
            {addVisitorList &&
              addVisitorList.map((item) => (
                <NameTag
                  key={item.contact}
                  name={item.name}
                  onClick={onClickHandler}
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
