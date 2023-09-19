import theme from '@/styles/theme';
import { TestBuildingImg } from '@/assets/testImg';
import { css } from '@emotion/react';
import { useState } from 'react';
import InvitationBuildingInfoItem from './InvitationBuildingInfoItem';
import InvitationBuildingMap from './InvitationBuildingMap';
import InvitationBuildingTitle from './InvitationBuildingTitle';
import InvitationBuildingPublicTransportItem from './InvitationBuildingPublicTransportItem';

function InvitationBuildingInfo() {
  // 스크롤 추적을 위한 state, onScrollHandler
  const [isScrollBottom, setIsScrollBottom] = useState(false);
  const onScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollBottom =
      e.currentTarget.scrollHeight - e.currentTarget.clientHeight;
    const nowScroll = e.currentTarget.scrollTop;

    if (scrollBottom === nowScroll) {
      setIsScrollBottom(true);
    } else {
      setIsScrollBottom(false);
    }
  };

  const publicTransport = [
    {
      platform: 'subway',
      location: '1호선 종각역',
    },
    {
      platform: 'bus',
      location: '종로1가(중)역, 종로1가역',
    },
  ];
  return (
    <div>
      <div css={BuildingImgStyles}>
        <TestBuildingImg />
      </div>

      <div
        css={BuildingInfoContainer({ isScrollBottom })}
        onScroll={(e) => onScrollHandler(e)}
      >
        <InvitationBuildingTitle
          title="테라타워"
          address="경기도 남양주시 다산지금로 202 테라테라 테라타워"
        />

        <div css={UnderLineStyles} />

        <InvitationBuildingInfoItem
          item="영업시간"
          content="월~일, 08:00~18:00"
        />
        <InvitationBuildingInfoItem
          item="주차요금"
          content="10분마다 1,000원"
        />
        <InvitationBuildingInfoItem
          item="건축규모"
          content="지하 7층~지상 24층"
        />

        <InvitationBuildingMap />

        {publicTransport.map((item) => {
          return (
            <InvitationBuildingPublicTransportItem
              key={item.location}
              platform={item.platform}
              location={item.location}
            />
          );
        })}
      </div>
    </div>
  );
}

const BuildingImgStyles = css`
  margin: -16px;
`;

const BuildingInfoContainer = (props: { isScrollBottom: boolean }) => css`
  border-radius: 36px 36px 0 0;
  padding: 24px 16px;
  margin: 0 0 0 -16px;
  background-color: white;
  position: fixed;
  top: 238px;
  height: calc(100vh - 238px);
  overflow: auto;

  transition: 0.5s;
  box-shadow: ${props.isScrollBottom
    ? null
    : 'rgba(0, 0, 0, 0.2) 0px -50px 36px -28px inset'};
`;

const UnderLineStyles = css`
  border-bottom: 1px solid ${theme.palette.greyscale.grey10};
  margin: 22px 0;
`;

export default InvitationBuildingInfo;
