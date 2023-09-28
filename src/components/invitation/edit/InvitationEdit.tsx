import { useState } from 'react';
import { css } from '@emotion/react';
import { Clock, Calendar, Location } from '@/assets/icons';
import { INVITATION_EDIT_TEXTS } from '@/constants/invitation/editTexts';
import theme from '@/styles/theme';
import Add from '@/components/common/Add';
import Input from '@/components/common/Input';
import Header from '@/components/common/Header';
import NameTag from '@/components/common/NameTag';
import CheckBox from '@/components/common/CheckBox';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import InvitationEditvisitorAdd from '@/components/invitation/edit/InvitationAddVisitorList';
import BottomSheet from '@/components/common/BottomSheet';

const data = {
  commonPlaceId: null,
  officeName: '식스센스 사무실 (A동 10층 1004호)',
  purpose: '회의',
  description: '엘리베이터에서 내려서 오른쪽으로 쭉 오시면 있습니다.',
  startDate: '2023-09-10',
  endDate: '2023-09-10',
  startTime: '10:00:00',
  endTime: '10:30:00',
  visitors: [
    {
      visitorId: 1,
      name: '홍길동',
      contact: '01012341234',
    },
    {
      visitorId: 2,
      name: '김길동',
      contact: '01012345678',
    },
    {
      visitorId: 3,
      name: '김길동',
      contact: '01012345678',
    },
    {
      visitorId: 4,
      name: '김길동',
      contact: '01012345678',
    },
    {
      visitorId: 5,
      name: '김길동',
      contact: '01012345678',
    },
  ],
};
function InvitationEdit() {
  const [editValue, setEditValue] = useState('');
  const { openBottomSheet } = useBottomSheetStore();
  const dateValue = `${data.startDate} ~ ${data.endDate}`;
  const timeValue = `${data.startTime.substring(
    0,
    5,
  )} ~ ${data.endTime.substring(0, 5)}`;
  const visitorname = data.visitors;
  const onClickHandler = () => {};
  const onClickVisitorAddHandler = () => {
    openBottomSheet(<InvitationEditvisitorAdd />);
  };
  return (
    <div>
      <Header
        title={INVITATION_EDIT_TEXTS.title}
        onClick={onClickHandler}
        type="text"
        text="회의"
      />
      <div css={subTitleStyles}>{INVITATION_EDIT_TEXTS.subTitle}</div>
      <div css={inputContainerStyles}>
        <div css={officeInfoContainerStyles}>
          <div css={iconStyles}>
            <Location />
          </div>
          <input type="text" value={data.officeName} readOnly />
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
          value={editValue}
          setValue={setEditValue}
        />
        <CheckBox text="이 메세지를 다음에도 사용" />
      </div>
      <div css={visitorListContainerStyles}>
        <Add isBlue onClick={onClickVisitorAddHandler} />
        <div css={ivitedVisitorListContainerStyles}>
          {visitorname.map((item) => (
            <NameTag
              key={item.visitorId}
              name={item.name}
              onClick={onClickHandler}
            />
          ))}
        </div>
      </div>
      <BottomSheet />
    </div>
  );
}
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
const ivitedVisitorListContainerStyles = css`
  display: flex;
  flex-direction: row;
  gap: 8px 8px;
  flex-wrap: wrap;
  margin-top: 20px;
`;
export default InvitationEdit;
