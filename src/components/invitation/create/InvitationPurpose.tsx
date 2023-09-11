import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import Category from '@/components/common/Category';
import Button from '@/components/common/Button';
import Icons from '@/components/common/Icons';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import { COMMON_CATEGORIES } from '@/constants/common';
import {
  CategoryInvitation,
  CommonCategory,
  InvitationTexts,
} from '@/types/invitation/create';
import mq from '@/utils/mediaquery';
import Input from '@/components/common/Input';

function InvitationPurpose() {
  const { invitation }: CategoryInvitation = COMMON_CATEGORIES;
  const {
    purpose,
    header,
    description,
    button,
    inputPlaceholder,
  }: InvitationTexts = CREATE_TEXTS;

  const categories: CommonCategory[] = Object.values(invitation);

  const [selectedCategory, setSelectedCategory] = useState<string>('meeting');
  const [purposeText, setPurposeText] = useState<string>('');
  const [btnDisplay, setBtnDisplay] = useState<string>('block');

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

  return (
    <div css={purposeContainerStyles}>
      <div css={headerWrapperStyles}>
        {/* 방문자 초대장 완성 시 미리보기 클릭 이벤트 연결 필요 */}
        <Header
          title={header.default}
          type="text"
          text="미리보기"
          onClick={() => alert('미리보기 테스트')}
        />
      </div>
      <div css={purposeQuestionStyles}>
        <div>{purpose}</div>
      </div>
      <div css={categoryContainerStyles}>
        <div css={categoryWrapperStyles}>
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
        <div css={descriptionWrapperStyles}>
          <div css={iconWrapperStyles}>
            <Icons icon="info" color="grey" />
          </div>
          {description[selectedCategory]}
        </div>
        <div css={inputWrapperStyles}>
          {selectedCategory === 'etc' && (
            <Input variant="default" placeholder={inputPlaceholder} textarea />
          )}
        </div>
      </div>
      <div
        css={buttonWrapperStyles(btnDisplay)}
        onFocus={onFocusHandler}
        onBlur={onBlurHandler}
      >
        <Button content={button.next} variant="blue" />
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

const headerWrapperStyles = css`
  min-width: 280px;
  max-width: 360px;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 1024px;
  }
`;

const purposeQuestionStyles = css`
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
  min-width: 280px;
  max-width: 360px;
  height: 44px;
  padding: 0 20px 0;
  color: ${theme.palette.greyscale.grey50};
  font: ${theme.font.body.body2_400};
  line-height: 22px;
  text-align: left;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 1024px;
  }
`;

const iconWrapperStyles = css`
  padding-top: 4px;
`;

const inputWrapperStyles = css`
  /* border: 1px solid red; */
  min-width: 280px;
  max-width: 360px;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 1024px;
  }
`;

const buttonWrapperStyles = (btnDisplay: string) => css`
  display: ${btnDisplay};
  position: fixed;
  bottom: 0;
  min-width: 280px;
  max-width: 360px;
  margin-bottom: 20px;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 1024px;
  }
`;

export default InvitationPurpose;
