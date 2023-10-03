import { InvitationOfficeMapProps } from '@/types/invitation/view';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import Image from 'next/image';

function InvitationOfficeMap({ placeType }: InvitationOfficeMapProps) {
  let imgUrl = '';
  if (placeType === 'COMPANY') {
    imgUrl =
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/Livable_Company_Map.png';
  }
  if (placeType === 'COMMON_PLACE') {
    imgUrl =
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/Livable_Common_Place_Map.png';
  }
  return (
    <div css={MapStyles}>
      <Image src={imgUrl} alt="초대 장소 지도" fill />
    </div>
  );
}

const MapStyles = css`
  width: 100%;

  position: relative;
  max-width: 500px;
  margin: 0 auto;
  padding: 0 55px;

  ${mq.md} {
    height: 250px;
  }
  ${mq.lg} {
    height: 350px;
  }
  ${mq.tab} {
    height: 400px;
  }
`;

export default InvitationOfficeMap;
