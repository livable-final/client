import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { COMMON_CATEGORY_COLORS } from '@/constants/common';
import { CategoryProps, CategoryColorProps } from '@/types/common/category';
import { css } from '@emotion/react';

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
  min-width: 110px;
  max-width: 140px;
  height: 110px;
  border: ${variantData.border};
  border-radius: 16px;
  background-color: ${variantData.backgroundColor};
  cursor: pointer;

  ${mq.lg} {
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
  font: ${theme.font.body.body1_500};
`;

export default Category;
