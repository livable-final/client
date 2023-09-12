import Input from '@/components/common/Input';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import Add from '@/components/common/Add';
import { css } from '@emotion/react';
import { RightSmall } from '@/assets/icons';
import InvitationNameList from './InvitationNameList';

function InvitationInfo() {
  const { invitation } = CREATE_TEXTS;
  const nameList = ['고애신', '유진초이', '쿠도히나', '구동매', '김희성'];

  return (
    <div css={infoContainerStyles}>
      <div css={invitationTextStyles}>
        <div>{invitation}</div>
      </div>
      <div css={inputContainerStyles}>
        <div>
          <Input variant="default" placeholder="이름 입력" />
          <Input variant="default" placeholder="전화번호 입력" />
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
      </div>
      {nameList.length > 0 && <InvitationNameList nameList={nameList} />}
    </div>
  );
}

const infoContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  min-width: 280px;
  max-width: 360px;

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

const invitationTextStyles = css`
  display: flex;
  width: 100%;
  max-width: 280px;
  height: 28px;
  padding-left: 4px;
  text-align: left;
  white-space: pre-line;
  div {
    width: 100%;
    font: ${theme.font.title.title2_500};
    line-height: 28px;
    text-align: left;
  }

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }
`;

const inputContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 21px;
  width: 100%;
  max-width: 280px;

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }
`;

const addressTextStyles = css`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  cursor: pointer;
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
  width: 18px;
  height: 18px;
  cursor: pointer;
`;

const addBtnStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InvitationInfo;
