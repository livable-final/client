import { COMMON_CATEGORY_COLORS } from '@/constants/common';
import { CategoryProps, CategoryColorProps } from '@/types/common/category';
import { css } from '@emotion/react';
import Icons from '@/components/common/Icons';
import mq from '@/utils/mediaquery';

function Category({ icon, title, variant }: CategoryProps) {
  const variantData = COMMON_CATEGORY_COLORS[variant];

  return (
    <div css={CategoryContainer(variantData)}>
      <div css={IconContainer}>
        <Icons icon={icon} color={variantData.color} />
      </div>
      <div css={CategoryTitle(variantData)}>{title}</div>
    </div>
  );
}

const CategoryContainer = (variantData: CategoryColorProps) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 110px;
  height: 110px;
  border: ${variantData.border};
  border-radius: 16px;
  background-color: ${variantData.backgroundColor};
  cursor: pointer;

  &:hover {
    border: ${COMMON_CATEGORY_COLORS.hoveredBlue.border};

    > div {
      color: ${COMMON_CATEGORY_COLORS.hoveredBlue.color};
    }
    > div > svg {
      color: ${COMMON_CATEGORY_COLORS.hoveredBlue.color};
    }
  }

  ${mq.tab} {
    width: 140px;
  }
`;

const IconContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
`;

const CategoryTitle = (variantData: CategoryColorProps) => css`
  color: ${variantData.color};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;

export default Category;
