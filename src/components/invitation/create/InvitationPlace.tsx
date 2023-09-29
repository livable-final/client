import Button from '@/components/common/Button';
import RadioBtn from '@/components/common/RadioBtn';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import getIsCommonData from '@/utils/getIsCommonData';
import getPlaceId from '@/utils/getPlaceId';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { useState, useEffect, ChangeEvent } from 'react';
import { InvitationCreateTexts } from '@/types/invitation/create';
import { css } from '@emotion/react';

function InvitationPlace(placeList) {
  const { closeBottomSheet } = useBottomSheetStore();
  const { setCreateContents } = useInvitationCreateStore();
  const { title, button, placeholder, radioBtn }: InvitationCreateTexts =
    CREATE_TEXTS;

  // 받아온 props 가공
  const { placeList: list } = placeList;
  const { offices, commonPlaces } = list || {
    offices: [],
    commonPlaces: [],
  };

  // 전체 장소 리스트 / 선택 장소명 / 선택 장소ID
  const [allPlaceList, setAllPlaceList] = useState([]);
  const [selectPlaceName, setSelectPlaceName] = useState('');
  const [selectPlaceId, setSelectPlaceId] = useState<number | null>(null);

  // 초대 가능한 장소 응답 데이터 배열화
  useEffect(() => {
    setAllPlaceList([...offices, ...commonPlaces]);
  }, [commonPlaces, offices]);

  // 장소 선택 시 해당하는 장소의 ID값 저장
  useEffect(() => {
    setSelectPlaceId(getPlaceId(allPlaceList, selectPlaceName));
  }, [allPlaceList, selectPlaceName]);

  // 라디오버튼 선택
  const onChangeRadioHandler = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('현재 선택한 라디오 : ', e.target.value);
    setSelectPlaceName(e.target.value);
  };

  // 직접입력
  const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectPlaceName(e.target.value);
  };

  // 하단 버튼 핸들러
  const onClickBtnHandler = () => {
    console.log('최종선택장소', selectPlaceName);
    console.log('최종선택ID', selectPlaceId);
    setCreateContents('officeName', selectPlaceName);
    setCreateContents('commonPlaceId', selectPlaceId);
    closeBottomSheet();
  };

  return (
    <div css={containerStyles}>
      <div css={titleStyles}>{title.invitationPlace}</div>
      <div css={radioBtnWrapperStyles}>
        {allPlaceList.map((listEl) => (
          <div
            css={radioBtnStyles}
            onChange={onChangeRadioHandler}
            key={
              getIsCommonData(listEl)
                ? listEl.commonPlaceName
                : listEl.officeName
            }
          >
            <RadioBtn
              content={
                getIsCommonData(listEl)
                  ? listEl.commonPlaceName
                  : listEl.officeName
              }
              select={selectPlaceName}
            />
          </div>
        ))}
        <div css={radioBtnStyles} onChange={onChangeRadioHandler}>
          <RadioBtn
            content={radioBtn}
            select={selectPlaceName}
            isEtc
            placeholder={placeholder.placeEtc}
            onChange={onChangeInputHandler}
          />
        </div>
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  overflow: scroll;
`;

const radioBtnStyles = css`
  display: flex;
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
