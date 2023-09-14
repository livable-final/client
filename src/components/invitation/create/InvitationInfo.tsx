import Input from '@/components/common/Input';
import Button from '@/components/common/Button';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import Add from '@/components/common/Add';
import NameTag from '@/components/common/NameTag';
import { css } from '@emotion/react';
import { RightSmall } from '@/assets/icons';
import { InvitationCreateTexts } from '@/types/invitation/create';

function InvitationInfo() {
  const { title, button, placeholder }: InvitationCreateTexts = CREATE_TEXTS;
  const nameTagTest = ['고애신', '유진초이', '김희성', '쿠도히나', '구동매'];

  return (
    <div css={infoContainerStyles}>
      <div css={invitationTextStyles}>
        <div>{title.invitation}</div>
      </div>
      <div>
        <Input variant="default" placeholder={placeholder.name} />
        <Input variant="default" placeholder={placeholder.phone} />
        <div css={addressTextStyles}>
          <div>주소록에서 찾기</div>
          <button
            type="button"
            css={iconStyles}
            onClick={() => alert('주소록 찾기 테스트')}
          >
            <RightSmall />
          </button>
        </div>
        <div css={addBtnStyles}>
          <Add onClick={() => alert('추가 버튼 테스트')} />
        </div>
      </div>
      <div css={invitationListContainerStyles}>
        <div css={invitationListTextStyles}>
          <div>{title.invitationList}</div>
          <div>{nameTagTest.length}/30</div>
        </div>
        <div css={invitationListStyles}>
          {nameTagTest.map((name) => (
            <NameTag
              key={name}
              name={name}
              onClick={() => alert('삭제 기능 추가 예정')}
            />
          ))}
        </div>
      </div>
      <div>
        <Button content={button.next} variant="blue" />
      </div>
    </div>
  );
}

const infoContainerStyles = css``;

const invitationTextStyles = css`
  display: flex;
  /* justify-content: flex-start;
  align-items: flex-start; */
  min-width: 280px;
  max-width: 360px;
  height: 28px;
  padding-left: 4px;
  text-align: left;
  div {
    display: flex;
    width: 100%;
    font: ${theme.font.title.title2_500};
    line-height: 28px;
    text-align: left;
  }

  ${mq.md} {
    max-width: 480px;
  }
  ${mq.lg} {
    max-width: 640px;
  }
  ${mq.tab} {
    max-width: 1024px;
  }
`;

const addressTextStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  div {
    font: ${theme.font.body.body3_500};
    color: ${theme.palette.input.unabled};
    line-height: 21px;
  }
`;

const iconStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const addBtnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const invitationListContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const invitationListTextStyles = css`
  display: flex;
  justify-content: space-between;
`;

const invitationListStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export default InvitationInfo;
