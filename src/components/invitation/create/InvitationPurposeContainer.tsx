import theme from '@/styles/theme';
import Input from '@/components/common/Input';
import Icons from '@/components/common/Icons';
import Category from '@/components/common/Category';
import Button from '@/components/common/Button';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import COMPONENT_NAME from '@/constants/common/pages';
import useViewStore from '@/stores/common/usePagesStore';
import useInvitationHeaderTitleStore from '@/stores/invitaion/useInvitationHeaderTitleStore';
import useInvitationCreateStore from '@/stores/invitaion/useInvitationCreateStore';
import { useEffect, useState } from 'react';
import { css } from '@emotion/react';
import { COMMON_CATEGORIES } from '@/constants/common';
import { ComponentName } from '@/types/common/pages';
import {
  CommonCategory,
  InvitationCreateTexts,
} from '@/types/invitation/create';

function InvitationPurposeContainer() {
  const { setNextComponent } = useViewStore();
  const { setHeaderTitle } = useInvitationHeaderTitleStore();
  const { setCreateContents, clearCreateContents } = useInvitationCreateStore();

  const { invitation }: ComponentName = COMPONENT_NAME;
  const {
    header,
    title,
    description,
    placeholder,
    button,
  }: InvitationCreateTexts = CREATE_TEXTS;

  const categories: CommonCategory[] = Object.values(COMMON_CATEGORIES);

  const [selectedCategory, setSelectedCategory] = useState<string>('meeting');
  const [etcPurpose, setEtcPurpose] = useState<string>('');
  const [isFocused, setIsFocused] = useState<boolean>(false);

  // 최초 렌더링 시 타이틀 & 초대장 데이터 초기화
  useEffect(() => {
    setHeaderTitle(header.default);
    clearCreateContents();
  }, [clearCreateContents, header.default, setHeaderTitle]);

  // 초대 목적 카테고리 선택
  const onClickCategoryHandler = (item: CommonCategory) => {
    setSelectedCategory(item.icon);
  };

  // 초대 목적 - 기타 선택 시 방문 목적 작성
  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setEtcPurpose(e.target.value);
  };

  // input 포커스될 때 '다음' 버튼 숨김
  const onFocusInputHandler = () => {
    setIsFocused(true);
  };

  // input 블러될 때 '다음' 버튼 활성
  const onBlurInputHandler = () => {
    setTimeout(() => setIsFocused(false), 300);
  };

  // 하단 '다음' 버튼 클릭 핸들러
  const onClickBtnHandler = () => {
    // 다음 렌더링 컴포넌트: 방문자 정보
    // 타이틀 스토어에 초대 목적 저장
    // 초대장 생성 스토어에  초대 목적 저장 (기타일 경우 사용자 입력값 저장)
    setNextComponent(invitation.create.visitors);
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
          <div css={descriptionStyles}>{description[selectedCategory]}</div>
        </div>
        <div
          css={inputWrapperStyles(isFocused)}
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
            // 초대 목적 - 기타를 선택할 경우, 사용자 입력값이 없으면 버튼 비활성화
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
  width: 100%;
  min-width: 240px;
  max-width: 1024px;
`;

const purposeQuestionStyles = css`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  min-width: 280px;
  max-width: 450px;
  height: 28px;
  padding-left: 4px;

  div {
    display: flex;
    font: ${theme.font.title.title2_500};
    line-height: 28px;
    text-align: left;
  }
`;

const categoryContainerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100%;
`;

const categoryWrapperStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;
  min-width: 280px;
  max-width: 450px;
  padding: 0 4px 0;
`;

const descriptionWrapperStyles = css`
  display: flex;
  justify-content: flex-start;
  gap: 4px;
  width: 100%;
  min-width: 240px;
  max-width: 440px;
  height: 44px;
  padding: 0 4px 0;

  div {
    display: flex;
    color: ${theme.palette.greyscale.grey50};
    font: ${theme.font.body.body2_400};
    line-height: 22px;
    text-align: left;
  }
`;

const descriptionStyles = css`
  display: flex;
  justify-content: flex-start;
  word-break: break-all;
  width: 100%;
  min-width: 200px;
  max-width: 450px;
`;

const iconWrapperStyles = css`
  padding-top: 4px;
`;

const inputWrapperStyles = (isFocused: boolean) => css`
  width: 100%;
  min-width: 240px;
  max-width: 440px;
  margin-bottom: ${isFocused ? '30px' : '0'};
`;

const buttonWrapperStyles = (isFocused: boolean) => css`
  position: fixed;
  bottom: 0;
  display: ${isFocused ? 'none' : 'block'};
  width: 100%;
  min-width: 280px;
  max-width: 1024px;
  padding: 0 16px 20px;
`;

export default InvitationPurposeContainer;
