import { CALENDAR_CONTENT } from '@/constants/lunch';
import theme from '@/styles/theme';
import { GetRestListData } from '@/types/lunch/api';
import { css } from '@emotion/react';
import Image from 'next/image';

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
          <p css={nameStyles}>{item.name}</p>
          <p css={addressStyles}>{item.address}</p>
        </div>
        <div css={badgeStyles}>
          {button5[0]}
          &nbsp;
          {item.tastePercentage}%
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
`;

const nameStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
  line-height: 24px;
`;

const addressStyles = css`
  font: ${theme.font.body.body3_500};
  color: ${theme.palette.greyscale.grey50};
  line-height: 24px;
`;

export default LunchRest;
