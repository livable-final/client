import Category from '@/components/common/Category';
import Input from '@/components/common/Input';
import { css } from '@emotion/react';

function index() {
  return (
    <>
      <div
        css={css`
          // 확인용 스타일입니다. 추후 삭제 예정입니다.
          display: flex;
          flex-direction: column;
          width: 100vw;
          min-width: 280px;
          max-width: 1024px;
          padding-top: 10px;
          margin-bottom: 20px;
          gap: 20px;
        `}
      >
        <div
          css={css`
            // 확인용 스타일입니다. 추후 삭제 예정입니다.
            display: flex;
            flex-shrink: flex;
            gap: 10px;
          `}
        >
          <Category icon="meeting" title="회의" variant="grey" />
          <Category icon="interview" title="면접" variant="grey" />
          <Category icon="fixedTermWork" title="기간근무" variant="grey" />
          <Category icon="seminar" title="세미나" variant="grey" />
          <Category icon="as" title="AS/점검" variant="grey" />
          <Category icon="etc" title="직접 입력" variant="grey" />
        </div>

        <div
          css={css`
            // 확인용 스타일입니다. 추후 삭제 예정입니다.
            display: flex;
            flex-shrink: flex;
            gap: 10px;
          `}
        >
          <Category icon="meeting" title="회의" variant="blue" />
          <Category icon="interview" title="면접" variant="blue" />
          <Category icon="fixedTermWork" title="기간근무" variant="blue" />
          <Category icon="seminar" title="세미나" variant="blue" />
          <Category icon="as" title="AS/점검" variant="blue" />
          <Category icon="etc" title="직접 입력" variant="blue" />
        </div>
      </div>
      <input type="text" placeholder="test" />

      <Input variant="default" placeholder="inputText" />
      <Input variant="disabled" placeholder="inputText" isDisabled />
      <Input variant="default" placeholder="inputText" isError />

      <Input inputIcon variant="default" placeholder="inputText" />
      <Input inputIcon variant="disabled" placeholder="inputText" isDisabled />
      <Input
        inputIcon
        variant="default"
        placeholder="inputText"
        isError
        errorType="test"
      />
    </>
  );
}

export default index;
