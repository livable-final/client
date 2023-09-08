import theme from '@/styles/theme';
import Button from '@/components/common/Button';
import { css } from '@emotion/react';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import { useRouter } from 'next/router';
import { useState } from 'react';

function InvitationDate() {
  const { invitation, button } = CREATE_TEXTS;

  const [isFocused, setIsFocused] = useState<boolean>(false);

  const router = useRouter();

  const onClickHandler = () => {
    router.push('/invitation/invitationInfo');
  };

  const onFocusHandler = () => {
    setIsFocused(true);
  };

  const onBlurHandler = () => {
    setIsFocused(false);
  };

  return (
    <div>
      <div>000초대</div>
      <div>
        <div css={InvitationQuestion}>{invitation}</div>
        <div>
          <input
            type="text"
            placeholder="이름 입력"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          />
          <input
            type="number"
            pattern="\d*"
            placeholder="전화번호 입력"
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
          />
          <div>주소록에서 찾기</div>
          <div>추가 버튼</div>
        </div>
        <div>
          <div>초대 목록</div>
          <div>김방문 김방문 김방문 김방문...</div>
        </div>
      </div>

      <div css={ButtonWrapper}>
        <Button
          content={isFocused ? button.done : button.next}
          variant="blue"
          onClick={onClickHandler}
        />
      </div>
    </div>
  );
}

const InvitationQuestion = css`
  min-width: 280px;
  max-width: 390px;
  height: 28px;
  padding-left: 4px;
  font: ${theme.font.title.title2_500};
  line-height: 28px;
`;

const ButtonWrapper = css`
  display: block;
  position: fixed;
  bottom: 0;
  width: 358px;
  margin-bottom: 20px;
`;

export default InvitationDate;
