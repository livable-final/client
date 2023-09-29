// 컴포넌트
import Button from '@/components/common/Button';
import Modal from '@/components/common/Modal';
import InvitationVisitorsList from '@/components/invitation/create/InvitationVisitorsList';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import Input from '@/components/common/Input';
import CheckBox from '@/components/common/CheckBox';
import BottomSheet from '@/components/common/BottomSheet';
import InvitationPlace from '@/components/invitation/create/InvitationPlace';
import InvitationDateTime from '@/components/invitation/create/InvitationDateTime';
// 스토어
import useFetch from '@/hooks/useFetch';
import useViewStore from '@/stores/usePagesStore';
import useModalStore from '@/stores/useModalStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import theme from '@/styles/theme';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import { Location, Calendar, Clock } from '@/assets/icons';
import { ChangeEvent, useEffect, useState } from 'react';
import { VisitorInfo, GetInvitationPlaceData } from '@/types/invitation/api';
import { getInvitationPlaceList } from '@/pages/api/invitation/createRequests';

function InvitationInfoContainer() {
  const { setNextComponent } = useViewStore();
  const { modalState, openModal, closeModal } = useModalStore();
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { createContents, setCreateContents } = useInvitationCreateStore();
  const { title, placeholder, checkbox, button, modal } = CREATE_TEXTS;

  const [placeList, setPlaceList] = useState<GetInvitationPlaceData>();
  const [tip, setTip] = useState<string>('');

  const [isConfirmed, setIsConfirmed] = useState<boolean>(false);
  const [visitorsList, setVisitorsList] = useState<VisitorInfo[]>([]);

  // 이전 컴포넌트에서 등록한 방문자 정보 가져오기
  useEffect(() => {
    console.log(createContents.description);
    setVisitorsList(createContents.visitors);
  }, [createContents]);

  // 모달에서 전송을 눌렀을 때 다음 컴포넌트 렌더링
  useEffect(() => {
    if (isConfirmed) {
      setNextComponent('InvitationDoneContainer');
    }
  }, [isConfirmed, setNextComponent]);

  // 초대 가능한 장소 호출
  const { response } = useFetch({
    fetchFn: getInvitationPlaceList,
  });

  useEffect(() => {
    // 초대 가능한 장소 응답 데이터 저장
    console.log('초대장소 응답 데이터 확인', response?.data);
    setPlaceList(response?.data);
  }, [response]);

  console.log(placeList);

  // 장소 선택 바텀시트 오픈
  const onClickPlaceHandler = () => {
    openBottomSheet(<InvitationPlace placeList={placeList} />);
  };

  // 날짜/시간 선택 바텀시트 오픈
  const onClickDateTimeHandler = () => {
    openBottomSheet(<InvitationDateTime />);
  };

  // 방문 팁 작성
  const onChangeTipHandler = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setTip(e.target.value);
  };

  // 최종 전송 확인 모달 핸들러
  const onClickModalHandler = () => {
    setIsConfirmed(!isConfirmed);
    closeModal();
  };

  // 초대 목록에서 특정 방문자 삭제
  const onClickDeleteHandler = () => {
    openModal('테스트', '삭제 기능이 구현될 예정이에요!');
  };

  // 하단 버튼 핸들러
  const onClickBtnHandler = () => {
    setCreateContents('description', tip);
    openModal(modal.send.title, modal.send.content);
  };

  return (
    <div css={containerStyles}>
      <div css={infoContainerStyles}>
        <div css={titleStyles}>{title.invitationInfo}</div>
        <div css={inputContainerStyles}>
          {/* 장소 선택 */}
          <div css={placeInputStyles}>
            <div className="icon">
              <Location />
            </div>
            <input
              css={inputStyles}
              type="text"
              defaultValue={placeList?.offices[0].officeName}
              value={createContents.officeName}
              placeholder={placeholder.place}
              onClick={onClickPlaceHandler}
              readOnly
            />
          </div>
          {/* 날짜, 시간 선택 */}
          <div css={dateTimeInputStyles}>
            <div className="date">
              <div className="icon">
                <Calendar />
              </div>
              <input
                css={inputStyles}
                type="text"
                value={createContents.startDate}
                placeholder={placeholder.date}
                onClick={onClickDateTimeHandler}
                readOnly
              />
            </div>
            <div className="time">
              <div className="icon">
                <Clock />
              </div>
              <input
                css={inputStyles}
                type="text"
                value={createContents.endDate}
                placeholder={placeholder.time}
                onClick={onClickDateTimeHandler}
                readOnly
              />
            </div>
          </div>
          {/* 꿀팁 작성 */}
          <div css={textareaStyles}>
            <Input
              value={tip}
              onChange={onChangeTipHandler}
              variant="default"
              textarea
              placeholder={placeholder.tip}
              row={4}
              maxLength={99}
            />
            <CheckBox text={checkbox} />
          </div>
        </div>
      </div>

      {visitorsList.length > 0 && (
        <InvitationVisitorsList
          visitorsList={visitorsList}
          onClick={onClickDeleteHandler}
        />
      )}

      <div css={buttonWrapperStyles}>
        <Button
          content={button.send}
          variant="blue"
          onClick={onClickBtnHandler}
        />
      </div>

      {modalState.isOpen && (
        <Modal content={modal.btn} onClick={onClickModalHandler} />
      )}
      {bottomSheetState.isOpen && <BottomSheet />}
    </div>
  );
}

const containerStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  width: 100%;
  min-width: 280px;
  max-width: 360px;

  ${mq.md} {
    max-width: 480px;
  }
  ${mq.lg} {
    max-width: 640px;
  }
  ${mq.tab} {
    max-width: 1024px;
  }
`;

// ************* 여기부터
const infoContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;

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

const titleStyles = css`
  color: ${theme.palette.title};
  font: ${theme.font.subTitle.subTitle1_600};
  line-height: 25px;
`;

const inputContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const placeInputStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  border: 1px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  padding: 0 8px 0 16px;

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    width: 24px;
    height: 24px;
    color: ${theme.palette.greyscale.grey40};
  }
`;

const dateTimeInputStyles = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.palette.greyscale.grey10};
  border-radius: 12px;
  padding: 0 8px 0 16px;
  width: 100%;

  .date,
  .time {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
    width: 100%;

    .icon {
      display: flex;
      justify-content: center;
      align-items: center;
      min-width: 24px;
      height: 24px;
    }
  }
`;

const inputStyles = css`
  border: none;
  border-radius: 12px;
  padding: 0;
  min-width: 200px;
  font: ${theme.font.subTitle.subTitle2_400};
  color: ${theme.palette.input.default};

  ${mq.md} {
    max-width: 100%;
  }
  ${mq.lg} {
    max-width: 100%;
  }
  ${mq.tab} {
    max-width: 100%;
  }
`;

const textareaStyles = css`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;
// ************* 여기까지

const buttonWrapperStyles = css`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-width: 280px;
  max-width: 360px;
  padding: 0 16px 20px;

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

export default InvitationInfoContainer;
