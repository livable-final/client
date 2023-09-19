import theme from '@/styles/theme';
import { UserNavigatorProps } from '@/types/user';
import { css } from '@emotion/react';
import { Right } from '@/assets/icons';
import Link from 'next/link';

function UserNavigator({ href, title }: UserNavigatorProps) {
  return (
    <Link href={href} css={containerStyles}>
      <span css={titleStyles}>{title}</span>
      <Right />
    </Link>
  );
}

const containerStyles = css`
  display: flex;
  padding: 16px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${theme.palette.greyscale.grey5};
`;

const titleStyles = css`
  color: ${theme.palette.title};
  font: ${theme.font.body.body1_400};
  line-height: 24px;
`;

export default UserNavigator;
