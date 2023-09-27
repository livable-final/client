import mq from '@/utils/mediaquery';
import Category from '@/components/common/Category';
import useViewStore from '@/stores/usePagesStore';
import { css } from '@emotion/react';
import { COMMON_USER_NAME } from '@/constants/common';
import COMPONENT_NAME from '@/constants/common/pages';
import useSaveStore from '@/stores/useSaveStore';

function AuthForm() {
  const MEMBER_TOKEN = process.env.MEMBER_TOKEN as string;
  const { setNextComponent } = useViewStore();
  const { setUserToken } = useSaveStore();

  const onClickCategoryHandler = () => {
    setNextComponent(COMPONENT_NAME.common.home);
    setUserToken(MEMBER_TOKEN);
  };

  return (
    <div css={purposeContainerStyles}>
      <div css={categoryContainerStyles}>
        <div css={categoryWrapperStyles}>
          {COMMON_USER_NAME.map((item) => (
            <button key={item} type="button" onClick={onClickCategoryHandler}>
              <Category
                key={item}
                icon="fixedTermWork"
                title={item}
                variant="grey"
              />
            </button>
          ))}
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
  max-width: 230px;

  ${mq.lg} {
    max-width: 640px;
  }
  ${mq.tab} {
    max-width: 1024px;
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

export default AuthForm;
