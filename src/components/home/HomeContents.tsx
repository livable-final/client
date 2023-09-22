import { css } from '@emotion/react';
import HomeBanner from '@/components/home/banner';
import HomeBulletin from '@/components/home/bulletin';
import { DUMMY_RESPONSE } from '@/constants/home/homeTexts';
import HomeCafeteria from '@/components/home/cafeteria';
import HomeService from '@/components/home/service';
import HomeReception from '@/components/home/reception';
import HomeServey from '@/components/home/HomeServey';

function HomeContents() {
  const { hasCafeteria } = DUMMY_RESPONSE;

  return (
    <div css={containerStyles}>
      <HomeBulletin />
      {hasCafeteria && <HomeCafeteria />}
      <HomeService />
      <HomeBanner hasCafeteria={hasCafeteria} />
      <HomeReception />
      <HomeServey />
    </div>
  );
}

const containerStyles = css`
  display: flex;
  padding: 12px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  align-self: stretch;
`;

export default HomeContents;
