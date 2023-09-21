import React from 'react';
import HomeCard from '@/components/home/HomeCard';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
import HomeServiceCard from '@/components/home/service/HomeServiceCard';
import mq from '@/utils/mediaquery';

function HomeService() {
  return (
    <HomeCard>
      <div css={containerStyles}>
        <span css={titleStyles}>{HOME_TEXTS.service.title}</span>
        <div css={menusStyles}>
          {HOME_TEXTS.service.menu.map((item) => (
            <HomeServiceCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              href={item.href}
            />
          ))}
        </div>
      </div>
    </HomeCard>
  );
}

const containerStyles = css`
  display: flex;
  padding: 16px 0;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  flex-wrap: wrap;
  width: 100%;
`;

const titleStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.title};
  line-height: 24px;
`;

const menusStyles = css`
  display: flex;
  padding: 0px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;

  ${mq.tab} {
    justify-content: center;
    width: 100%;
  }
`;

export default HomeService;
