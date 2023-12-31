import theme from '@/styles/theme';
import { css } from '@emotion/react';
import { useState } from 'react';
import mq from '@/utils/mediaquery';
import { Back } from '@/assets/icons';
import usePagesStore from '@/stores/common/usePagesStore';
import { InvitationBuildingInfoProps } from '@/types/invitation/view';
import InvitationBuildingInfoItem from './InvitationBuildingInfoItem';
import InvitationBuildingMap from './InvitationBuildingMap';
import InvitationBuildingTitle from './InvitationBuildingTitle';
import InvitationBuildingPublicTransportItem from './InvitationBuildingPublicTransportItem';

function InvitationBuildingInfo({ data }: InvitationBuildingInfoProps) {
  const { goBack } = usePagesStore();

  const { buildingRepresentativeImageUrl } = data;

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

  const onBackClickHandler = () => {
    goBack();
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
    <div css={ContainerStyles}>
      <div css={BuildingImgStyles({ buildingRepresentativeImageUrl })}>
        <Back onClick={onBackClickHandler} />
      </div>

      <div
        css={BuildingInfoStyles({ isScrollBottom })}
        onScroll={(e) => onScrollHandler(e)}
      >
        <InvitationBuildingTitle
          title={data.buildingName}
          address={data.buildingAddress}
        />

        <div css={UnderLineStyles} />

        <InvitationBuildingInfoItem
          item="영업시간"
          content="월~일, 08:00~18:00"
        />
        <InvitationBuildingInfoItem
          item="주차요금"
          content={data.buildingParkingCostInformation}
        />
        <InvitationBuildingInfoItem
          item="건축규모"
          content={data.buildingScale}
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

const ContainerStyles = css`
  height: 100vh;
  position: relative;
  margin: 0 auto;
  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }
`;

const BuildingImgStyles = (props: {
  buildingRepresentativeImageUrl: string;
}) => css`
  background-image: url(${props.buildingRepresentativeImageUrl});
  background-size: cover;
  background-position: 0 20%;
  height: 500px;
  margin: 0 -16px;
  padding: 16px 16px;
`;

const BuildingInfoStyles = (props: { isScrollBottom: boolean }) => css`
  width: calc(100% + 32px);
  border-radius: 36px 36px 0 0;
  padding: 24px 16px;
  margin: 0 -16px;
  background-color: white;
  position: absolute;
  top: 238px;
  height: calc(100vh - 238px);
  overflow: auto;
  transition: box-shadow 0.5s;
  box-shadow: ${props.isScrollBottom
    ? null
    : 'rgba(0, 0, 0, 0.2) 0px -50px 36px -28px inset'};

  &::-webkit-scrollbar {
    display: none; // 스크롤바 숨기기
  }
`;

const UnderLineStyles = css`
  border-bottom: 1px solid ${theme.palette.greyscale.grey10};
  margin: 22px 0;
`;

export default InvitationBuildingInfo;
