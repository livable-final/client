import theme from '@/styles/theme';
import { ExitSmall } from '@/assets/icons';
import { css } from '@emotion/react';
import { NameTagProps } from '@/types/common/nameTag';

function NameTag({ name, onClick }: NameTagProps) {
  return (
    <div css={nameTagContainerStyles(name)}>
      <div css={textStyles}>{name}</div>
      <button type="button" css={iconStyles} onClick={onClick}>
        <ExitSmall />
      </button>
    </div>
  );
}

const nameTagContainerStyles = (name: string) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: ${name.length < 3 ? `90px` : name.length > 3 ? `116px` : `103px`};
  height: 42px;
  border-radius: 100px;
  background-color: ${theme.palette.greyscale.grey5};
`;

const textStyles = css`
  color: ${theme.palette.greyscale.grey50};
  font: ${theme.font.body.body2_400};
  line-height: 22px;
`;

const iconStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2px;
  cursor: pointer;
`;

export default NameTag;
