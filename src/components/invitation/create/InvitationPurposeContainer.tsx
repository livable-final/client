import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import Input from '@/components/common/Input';
import Icons from '@/components/common/Icons';
import Category from '@/components/common/Category';
import Button from '@/components/common/Button';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useViewStore from '@/stores/usePagesStore';
import useInvitationHeaderTitleStore from '@/stores/useInvitationHeaderTitleStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import { ChangeEvent, useState } from 'react';
import { css } from '@emotion/react';
import { COMMON_CATEGORIES } from '@/constants/common';
import {
  CategoryInvitation,
  CommonCategory,
  InvitationCreateTexts,
} from '@/types/invitation/create';

function InvitationPurposeContainer() {
  const { setNextComponent } = useViewStore();
  const { setHeaderTitle } = useInvitationHeaderTitleStore();
  const { setCreateContents } = useInvitationCreateStore();
  const { invitation }: CategoryInvitation = COMMON_CATEGORIES;
  const {
    header,
    title,
    description,
    placeholder,
    button,
  }: InvitationCreateTexts = CREATE_TEXTS;
  const categories: CommonCategory[] = Object.values(invitation);
  const [selectedCategory, setSelectedCategory] = useState<string>('meeting');
  const [etcPurpose, setEtcPurpose] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 방문 목적 카테고리 선택
  const onClickCategoryHandler = (item: CommonCategory) => {
    setSelectedCategory(item.icon);
  };

  // 기타 선택 시 방문 목적 작성
  const onChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEtcPurpose(e.target.value);
  };

  // input 활성화 시 버튼 처리
  const onFocusInputHandler = () => {
    setIsFocused(true);
  };
  const onBlurInputHandler = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  // 하단 버튼 클릭 핸들러
  const onClickBtnHandler = () => {
    setNextComponent('InvitationVisitorsContainer');
    setHeaderTitle(header[selectedCategory]);
    setCreateContents(
      'purpose',
      selectedCategory === 'etc' ? etcPurpose : selectedCategory,
    );
  };

  return (
    <div css={purposeContainerStyles}>
      <div css={purposeQuestionStyles}>
        <div>{title.purpose}</div>
      </div>
      <div css={categoryContainerStyles}>
        <div css={categoryWrapperStyles}>
          {categories.map((item) => (
            <button
              key={item.icon}
              type="button"
              onClick={() => onClickCategoryHandler(item)}
            >
              <Category
                key={item.icon}
                icon={item.icon}
                title={item.title}
                variant={selectedCategory === item.icon ? 'blue' : 'grey'}
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
        <div
          css={inputWrapperStyles}
          onFocus={onFocusInputHandler}
          onBlur={onBlurInputHandler}
        >
          {selectedCategory === 'etc' && (
            <Input
              value={etcPurpose}
              onChange={onChange}
              variant="default"
              placeholder={placeholder.purpose}
              textarea
            />
          )}
        </div>
        <div css={buttonWrapperStyles(isFocused)}>
          <Button
            content={button.next}
            variant="blue"
            onClick={onClickBtnHandler}
            isDisabled={selectedCategory === 'etc' && !etcPurpose.length}
          />
        </div>
      </div>
    </div>
  );
}

const purposeContainerStyles = css`
  position: relative;
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
  position: relative;
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
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
  min-width: 260px;
  max-width: 280px;
  height: 44px;
  padding: 0 4px 0;

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

const buttonWrapperStyles = (isFocused: boolean) => css`
  position: fixed;
  bottom: 0;
  display: ${isFocused ? 'none' : 'block'};
  width: 100%;
  min-width: 280px;
  max-width: 360px;
  padding: 0 16px 20px;

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

export default InvitationPurposeContainer;
