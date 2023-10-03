import { InvitationOfficeMapProps } from '@/types/invitation/view';
import { css } from '@emotion/react';
import Image from 'next/image';

function InvitationOfficeMap({ placeType }: InvitationOfficeMapProps) {
  let imgUrl = '';
  if (placeType === 'COMPANY ') {
    imgUrl =
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/Livable_Company_Map.png';
  }
  if (placeType === 'COMMON_PLACE ') {
    imgUrl =
      'https://livable-final.s3.ap-northeast-2.amazonaws.com/Livable_Common_Place_Map.png';
  }
  return (
    <div css={MapStyles}>
      <Image src={imgUrl} alt="초대 장소 지도" />
    </div>
  );
}

const MapStyles = css`
  max-width: 500px;
  margin: 0 auto;
  padding: 0 55px;
`;

export default InvitationOfficeMap;
