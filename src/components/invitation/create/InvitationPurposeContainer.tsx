import theme from '@/styles/theme';
import Category from '@/components/common/Category';
import Icons from '@/components/common/Icons';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import { useState } from 'react';
import { css } from '@emotion/react';
import { COMMON_CATEGORIES } from '@/constants/common';
import {
  CategoryInvitation,
  CommonCategory,
  InvitationCreateTexts,
} from '@/types/invitation/create';
import mq from '@/utils/mediaquery';
import Input from '@/components/common/Input';

function InvitationPurpose() {
  const { invitation }: CategoryInvitation = COMMON_CATEGORIES;
  const { title, description, placeholder }: InvitationCreateTexts =
    CREATE_TEXTS;

  const categories: CommonCategory[] = Object.values(invitation);

  const [selectedCategory, setSelectedCategory] = useState<string>('meeting');

  return (
    <div css={purposeContainerStyles}>
      <div css={purposeQuestionStyles}>
        <div>{title.purpose}</div>
      </div>
      <div css={categoryContainerStyles}>
        <div css={categoryWrapperStyles}>
          {categories.map((value) => (
            <button
              key={value.icon}
              type="button"
              onClick={() => setSelectedCategory(value.icon)}
            >
              <Category
                key={value.icon}
                icon={value.icon}
                title={value.title}
                variant={selectedCategory === value.icon ? 'blue' : 'grey'}
              />
            </button>
          ))}
        </div>
        <div css={descriptionWrapperStyles}>
          <div css={iconWrapperStyles}>
            <Icons icon="info" color="grey" />
          </div>
          <div>{description[selectedCategory]}</div>
        </div>
        <div css={inputWrapperStyles}>
          {selectedCategory === 'etc' && (
            <Input
              variant="default"
              placeholder={placeholder.purpose}
              textarea
            />
          )}
        </div>
      </div>
    </div>
  );
}

const purposeContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
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

const purposeQuestionStyles = css`
  display: flex;
  width: 100%;
  min-width: 280px;
  max-width: 360px;
  height: 28px;
  padding-left: 4px;
  div {
    display: flex;
    font: ${theme.font.title.title2_500};
    line-height: 28px;
    text-align: left;
  }

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 360px;
  }
  ${mq.tab} {
    max-width: 420px;
  }
`;

const categoryContainerStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const categoryWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  min-width: 280px;
  max-width: 360px;
  padding: 0 4px 0;

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 360px;
  }
  ${mq.tab} {
    max-width: 480px;
  }
`;

const descriptionWrapperStyles = css`
  display: flex;
  gap: 4px;
  width: 100%;
  min-width: 260px;
  max-width: 280px;
  height: 44px;
  padding: 0 20px 0;
  div {
    display: flex;
    color: ${theme.palette.greyscale.grey50};
    font: ${theme.font.body.body2_400};
    line-height: 22px;
    text-align: left;
  }

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 360px;
  }
  ${mq.tab} {
    max-width: 440px;
  }
`;

const iconWrapperStyles = css`
  padding-top: 4px;
`;

const inputWrapperStyles = css`
  max-width: 280px;

  ${mq.md} {
    min-width: 360px;
  }
  ${mq.lg} {
    min-width: 360px;
  }
  ${mq.tab} {
    min-width: 440px;
    max-width: 1024px;
  }
`;

export default InvitationPurpose;
