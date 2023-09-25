import { css } from '@emotion/react';
import HomeBulletinDate from '@/components/home/bulletin/HomeBulletinDate';
import HomeBulletinWeather from '@/components/home/bulletin/HomeBulletinWeather';
import HomeBulletinNotice from '@/components/home/bulletin/HomeBulletinNotice';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import Card from '@/components/common/Card';

function HomeBulletin() {
  const { bulletin } = HOME_TEXTS;

  return (
    <Card>
      <div css={containerStyles}>
        <div css={wrapperStyles}>
          <HomeBulletinDate />
          <HomeBulletinWeather />
        </div>
        {bulletin.map((item) => (
          <HomeBulletinNotice
            key={item.title}
            title={item.title}
            content={item.content}
          />
        ))}
      </div>
    </Card>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  flex: 1 0 0;
  padding: 16px 0;
  gap: 12px;
`;

const wrapperStyles = css`
  display: flex;
  justify-content: space-between;
  flex: 1 0 0;
`;

export default HomeBulletin;
