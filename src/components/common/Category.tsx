import { COMMON_CATEGORY_COLORS } from '@/constants/common/constant';
import { CategoryProps, CategoryColorProps } from '@/types/common/category';
import { css } from '@emotion/react';
import Icons from '@/components/common/Icons';

function Category({ icon, title, variant }: CategoryProps) {
  const variantData = COMMON_CATEGORY_COLORS[variant];

  return (
    <div css={CategoryContainer(variantData)}>
      <div css={IconContainer(variantData)}>
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
`;

const IconContainer = (variantData: CategoryColorProps) => css`
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
