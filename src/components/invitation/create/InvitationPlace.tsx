import Button from '@/components/common/Button';
import RadioBtn from '@/components/common/RadioBtn';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationDateTime from '@/components/invitation/create/InvitationDateTime';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { GetInvitationPlaceData } from '@/types/invitation/api';
import { useEffect, useState } from 'react';

interface InvitationPlaceProps {
  placeList?: GetInvitationPlaceData;
}

interface ArrayElementType {
  officeName?: string;
  commonPlaceId?: number;
  commonPlaceName?: string;
}

function InvitationPlace(placeList: InvitationPlaceProps) {
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { title, button, placeholder } = CREATE_TEXTS;
  const { placeList: list } = placeList;
  const { offices, commonPlaces } = list || {
    offices: [],
    commonPlaces: [],
  };
  const [allPlaceList, setallPlaceList] = useState<ArrayElementType[]>([]);

  useEffect(() => {
    setPlaceList([...offices, ...commonPlaces]);
  }, [offices, commonPlaces]);

  // 날짜/시간 선택 컴포넌트
  const onClickDateTimeHandler = () => {
    openBottomSheet(<InvitationDateTime />);
  };

  const onChangeRadioHandler = () => {};

  return (
    <div css={containerStyles}>
      <div css={titleStyles}>{title.invitationPlace}</div>
      <div css={radioBtnWrapperStyles}>
        <RadioBtn
          list={allPlaceList}
          name="초대 장소"
          placeholder={placeholder.placeEtc}
        />
      </div>
      <div css={buttonWrapperStyles}>
        <Button variant="blue" content={button.next} />
      </div>
      {bottomSheetState.isOpen && <BottomSheet />}
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
  padding: 0 6px 0;
`;

const radioBtnWrapperStyles = css`
  width: 100%;
  overflow: scroll;
`;

const titleStyles = css`
  width: 100%;
  color: ${theme.palette.title};
  font: ${theme.font.title.title2_600};
  line-height: 29px;
  text-align: left;
`;

const buttonWrapperStyles = css`
  width: 100%;
  min-width: 280px;
  max-width: 360px;
  padding-bottom: 20px;
  margin: 0 -4px 0;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 1024px;
  }
`;

export default InvitationPlace;
