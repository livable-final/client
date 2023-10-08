import Image from 'next/image';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { GetRestListData } from '@/types/lunch/api';
import { CALENDAR_CONTENT } from '@/constants/lunch';
import processAddress from '@/utils/processAddress';
import mq from '@/utils/mediaquery';

// 오늘 점심 식당 목록 컴포넌트
function LunchRest({ ...item }: GetRestListData) {
  const { button5 } = CALENDAR_CONTENT.button;
  return (
    <section css={sectionStyles}>
      <Image
        css={menuImageStyles}
        src={item.representativeImageUrl}
        alt="음식"
        width={52}
        height={52}
      />
      <div css={wrapperStyles}>
        <div>
          <p css={nameStyles}>{item.restaurantName}</p>
          <p css={addressStyles}>{processAddress(item.address)}</p>
        </div>
        <div css={badgeStyles}>
          {button5[0]}
          &nbsp;
          {item.tastePercentage || 100}%
        </div>
      </div>
    </section>
  );
}

const sectionStyles = css`
  display: flex;
  padding: 16px 0px;
  align-items: center;
  gap: 12px;
  align-self: stretch;
  border-bottom: 1px solid ${theme.palette.greyscale.grey5};
`;

const menuImageStyles = css`
  border-radius: 100px;
  background: ${theme.palette.greyscale.grey45} 1px 3.663px / 97.727% 83.35% /
    cover no-repeat;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.1);
`;

const wrapperStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1 0 0;
`;

const badgeStyles = css`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  border: 1px solid ${theme.palette.greyscale.grey10};
  background: ${theme.palette.greyscale.grey5};
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey70};
  line-height: 16px;
  white-space: nowrap;
  min-width: 82px;
`;

const nameStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
  line-height: 24px;
  text-align: left;
  overflow: hidden;
  white-space: nowrap;
  max-width: 96px;
  text-overflow: ellipsis;

  ${mq.md} {
    max-width: 128px;
  }

  @media (min-width: 400px) {
    overflow: visible;
  }

  ${mq.lg} {
    max-width: none;
  }
`;

const addressStyles = css`
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.greyscale.grey50};
  line-height: 24px;
  text-align: left;
  max-width: 96px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  ${mq.md} {
    max-width: 128px;
  }

  @media (min-width: 400px) {
    overflow: visible;
  }

  ${mq.lg} {
    max-width: none;
  }
`;

export default LunchRest;
