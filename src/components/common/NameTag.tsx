import theme from '@/styles/theme';
import Icons from '@/components/common/Icons';
import { css } from '@emotion/react';
import { NameTagProps } from '@/types/common/nameTag';

function NameTag({ isInvited = false, name, onClick }: NameTagProps) {
  // 해당 네임태그 방문자 삭제
  const onClickDeleteVisitorHandler = () => {
    onClick(name);
  };

  return (
    <div css={nameTagContainerStyles(name, isInvited)}>
      <div css={textStyles}>{name}</div>
      <button
        type="button"
        css={iconStyles}
        onClick={onClickDeleteVisitorHandler}
      >
        <Icons icon="exitSmall" />
      </button>
    </div>
  );
}

const nameTagContainerStyles = (name: string, isInvited: boolean) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: ${name.length < 3 ? `90px` : name.length > 3 ? `116px` : `103px`};
  height: 42px;
  border-radius: 100px;
  background-color: ${isInvited
    ? theme.palette.greyscale.grey10
    : theme.palette.greyscale.grey5};
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
  color: ${theme.palette.greyscale.grey40};
  cursor: pointer;
`;

export default NameTag;
