import theme from '@/styles/theme';
import Category from '@/components/common/Category';
import Button from '@/components/common/Button';
import Icons from '@/components/common/Icons';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import { useRouter } from 'next/router';
import { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import { COMMON_CATEGORIES } from '@/constants/common';
import {
  CategoryInvitation,
  CommonCategory,
  InvitationTexts,
} from '@/types/invitation/create';
import mq from '@/utils/mediaQuery';

function InvitationPurpose() {
  const { invitation }: CategoryInvitation = COMMON_CATEGORIES;
  const { purpose, description, button, inputPlaceholder }: InvitationTexts =
    CREATE_TEXTS;

  const categories: CommonCategory[] = Object.values(invitation);

  const [selectedCategory, setSelectedCategory] = useState<string>('meeting');
  const [purposeText, setPurposeText] = useState<string>('');
  const [btnDisplay, setBtnDisplay] = useState<string>('block');

  const router = useRouter();

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPurposeText(e.target.value);
  };

  const onFocusHandler = () => {
    setBtnDisplay('none');
  };

  const onBlurHandler = () => {
    setTimeout(() => {
      setBtnDisplay('block');
    }, 250);
  };

  const onClickHandler = () => {
    router.push('/invitation/invitationDate');
  };

  return (
    <div css={PurposeContainer}>
      <div>방문자초대</div>
      <div css={PurposeQuestion}>{purpose}</div>
      <div css={CategoryContainer}>
        <div css={CategoryWrapper}>
          {categories.map((value) => (
            <div
              key={value.icon}
              onClick={() => setSelectedCategory(value.icon)}
              onKeyDown={(e) =>
                e.key === 'Enter' ? setSelectedCategory(value.icon) : null
              }
              role="button"
              tabIndex={0}
            >
              <Category
                key={value.icon}
                icon={value.icon}
                title={value.title}
                variant={selectedCategory === value.icon ? 'blue' : 'grey'}
              />
            </div>
          ))}
        </div>
        <div css={DescriptionWrapper}>
          <div css={IconWrapper}>
            <Icons icon="info" color="grey" />
          </div>
          {description[selectedCategory]}
        </div>
        {/* 아래의 InputBox는 컴포넌트 완성되면 교체 예정입니다. */}
        {selectedCategory === 'etc' && (
          <input
            type="text"
            value={purposeText}
            placeholder={inputPlaceholder}
            maxLength={8}
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={onChangeHandler}
          />
        )}
      </div>
      <div css={ButtonWrapper(btnDisplay)}>
        <Button content={button.next} variant="blue" onClick={onClickHandler} />
      </div>
    </div>
  );
}

const PurposeContainer = css`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  gap: 32px;
  color: red;

  ${mq.md} {
    color: black;
  }
  ${mq.lg} {
    color: blue;
  }
  ${mq.tab} {
    color: yellow;
  }
`;

const PurposeQuestion = css`
  min-width: 280px;
  max-width: 390px;
  height: 28px;
  padding-left: 4px;
  font: ${theme.font.title.title2_500};
  line-height: 28px;
`;

const CategoryContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const CategoryWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  min-width: 280px;
  max-width: 390px;
  padding: 0 4px 0;

  ${mq.md} {
    min-width: 480px;
  }
`;

const DescriptionWrapper = css`
  display: flex;
  gap: 4px;
  min-width: 280px;
  max-width: 390px;
  height: 44px;
  padding: 0 4px 0;
  color: ${theme.palette.greyscale.grey50};
  font: ${theme.font.body.body2_400};
  line-height: 22px;
`;

const IconWrapper = css`
  padding-top: 4px;
`;

const ButtonWrapper = (btnDisplay: string) => css`
  display: ${btnDisplay};
  position: fixed;
  bottom: 0;
  width: 358px;
  margin-bottom: 20px;
`;

export default InvitationPurpose;
