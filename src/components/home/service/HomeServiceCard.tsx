import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';
import { HomeServiceProps } from '@/types/home';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import Link from 'next/link';

function HomeServiceCard({ icon, title, href }: HomeServiceProps) {
  return (
    <Link href={href} css={containerStyles}>
      <Icons icon={icon} size="32" />
      <span css={titleStyles}>{title}</span>
    </Link>
  );
}

const containerStyles = css`
  display: flex;
  height: 87px;
  padding: 12px auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 12px;
  max-width: 72px;
  width: 100%;

  > svg {
    height: 32px;
  }

  &:active {
    border-radius: 12px;
    background: ${theme.palette.greyscale.grey5};
  }

  @media (min-width: 320px) {
    max-width: 72px;
  }

  ${mq.md} {
    max-width: 84px;
  }

  @media (min-width: 440px) {
    max-width: 96px;
  }

  ${mq.lg} {
    max-width: 140px;
  }
`;

const titleStyles = css`
  font: ${theme.font.body.body2_400};
  color: ${theme.palette.greyscale.grey60};
  line-height: 22px;

  ${mq.md} {
  }
`;

export default HomeServiceCard;
