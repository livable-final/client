import theme from '@/styles/theme';
import Category from '@/components/common/Category';
import Button from '@/components/common/Button';
import Icons from '@/components/common/Icons';
import INVITATION_TEXTS from '@/constants/invitation/invitationTexts';
import { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import { COMMON_CATEGORIES } from '@/constants/common/constant';
import {
  CategoryInvitation,
  CommonCategory,
  InvitationTexts,
} from '@/types/invitation';

function InvitationPurpose() {
  const { invitation }: CategoryInvitation = COMMON_CATEGORIES;
  const { purpose, description, next, inputPlaceholder }: InvitationTexts =
    INVITATION_TEXTS;

  const categories: CommonCategory[] = Object.values(invitation);

  const [isSelected, setIsSelected] = useState<string>('meeting');
  const [purposeText, setPurposeText] = useState<string>('');

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPurposeText(e.target.value);
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
              onClick={() => setIsSelected(value.icon)}
              onKeyDown={(e) =>
                e.key === 'Enter' ? setIsSelected(value.icon) : null
              }
              role="button"
              tabIndex={0}
            >
              <Category
                key={value.icon}
                icon={value.icon}
                title={value.title}
                variant={isSelected === value.icon ? 'blue' : 'grey'}
              />
            </div>
          ))}
        </div>
        <div css={DescriptionWrapper}>
          <div css={IconWrapper}>
            <Icons icon="info" color="grey" />
          </div>
          {description[isSelected]}
        </div>
        {/* 아래의 InputBox는 컴포넌트 완성되면 교체 예정입니다. */}
        {isSelected === 'etc' && (
          <input
            value={purposeText}
            placeholder={inputPlaceholder}
            maxLength={8}
            onChange={onChangeHandler}
          />
        )}
      </div>
      <div css={ButtonWrapper}>
        <Button content={next} variant="blue" />
      </div>
    </div>
  );
}

const PurposeContainer = css`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const PurposeQuestion = css`
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
`;

const DescriptionWrapper = css`
  display: flex;
  gap: 4px;
  height: 44px;
  padding: 0 4px 0;
  color: ${theme.palette.greyscale.grey50};
  font: ${theme.font.body.body2_400};
  line-height: 22px;
`;

const IconWrapper = css`
  padding-top: 4px;
`;

const ButtonWrapper = css`
  position: absolute;
  bottom: 0;
  width: 358px;
  margin-bottom: 20px;
`;

export default InvitationPurpose;
