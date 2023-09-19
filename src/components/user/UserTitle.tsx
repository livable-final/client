import { Setting } from '@/assets/icons';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function UserTitle() {
  return (
    <div css={containerStyles}>
      <span css={titleStyles}>마이페이지</span>
      <Setting />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  height: 56px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const titleStyles = css`
  font: ${theme.font.title.title1_godo};
  line-height: 25px;
`;

export default UserTitle;
