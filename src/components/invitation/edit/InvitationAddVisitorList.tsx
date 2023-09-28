import { css } from '@emotion/react';
import { INVITATION_EDIT_TEXTS } from '@/constants/invitation/editTexts';
import { useState } from 'react';
import theme from '@/styles/theme';
import Add from '@/components/common/Add';
import NameTag from '@/components/common/NameTag';
import AddressBook from '@/components/common/AddressBook';
import {
  NewVisitorsList,
  InvitationAddVisitorListProps,
} from '@/types/invitation/edit';

function InvitationAddVisitorList({
  visitorsList,
}: InvitationAddVisitorListProps) {
  const [addVisitorName, setAddVisitorName] = useState('');
  const [addVisitorContact, setAddVisitorContact] = useState('');
  const [addVisitorList, setAddVisitorList] = useState<NewVisitorsList[]>([]);

  const onClickHandler = () => {};
  const onClickAddHandler = (name: string, contact: string): void => {
    const newVistorName = {
      name,
      contact,
    };
    setAddVisitorList([...addVisitorList, newVistorName]);
    setAddVisitorName('');
    setAddVisitorContact('');
  };
  // 추가 사용자 입력값
  const onChangeInputNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddVisitorName(e.target.value);
  };
  const onChangeInputContactHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAddVisitorContact(e.target.value);
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
            <Add
              onClick={() => {
                onClickAddHandler(addVisitorName, addVisitorContact);
              }}
            />
          </div>
          <div css={newVisitorListStyles}>
            {visitorsList &&
              visitorsList.map((item) => (
                <NameTag
                  key={item.contact}
                  name={item.name}
                  onClick={onClickHandler}
                />
              ))}
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
    </div>
  );
}
const invitationEditVisitorAddStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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
