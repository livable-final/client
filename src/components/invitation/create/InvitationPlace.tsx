import Button from '@/components/common/Button';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { useState, useEffect } from 'react';
import { css } from '@emotion/react';

function InvitationPlace(placeList) {
  const { closeBottomSheet } = useBottomSheetStore();
  const { title, button } = CREATE_TEXTS;

  const { placeList: list } = placeList;
  const { offices, commonPlaces } = list || {
    offices: [],
    commonPlaces: [],
  };

  const [test, setTest] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState('');
  const [place, setPlace] = useState('');
  const [etcPlace, setEtcPlace] = useState('');

  console.log('바텀시트 프롭 확인', placeList);

  // 초대 가능한 장소 응답 데이터 배열
  useEffect(() => {
    setTest([...offices, ...commonPlaces]);
  }, []);

  console.log('바텀시트 합친 데이터', test);

  // 초대 장소 선택
  const onChangeRadioHandler = (e) => {
    console.log(e.target.value);
    setPlace(e.target.value);
    setIsCheck(!isCheck);
  };

  // 초대 장소 직접 입력
  const onChangeInputHandler = (e) => {
    console.log(e.target.value);
    setEtcPlace(e.target.value);
  };

  // 하단 버튼 핸들러
  const onClickBtnHandler = () => {
    closeBottomSheet();
  };

  return (
    <div css={containerStyles}>
      <div css={titleStyles}>{title.invitationPlace}</div>
      <div css={radioBtnWrapperStyles}>
        {/* <RadioBtn
          list={test}
          place={place}
          etcPlace={etcPlace}
          onChangeRadio={onChangeRadioHandler}
          onChangeInput={onChangeInputHandler}
        /> */}
      </div>
      <div css={buttonWrapperStyles}>
        <Button
          variant="blue"
          content={button.next}
          onClick={onClickBtnHandler}
        />
      </div>
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
