// import Alert from '@/components/common/Alert';
import Header from '@/components/common/Header';
import {
  INVITATION_CAROUSEL_TEXTS,
  INVITATION_VEIW_INFO_TEXTS,
} from '@/constants/invitation/viewTexts';
import { postParking } from '@/pages/api/invitation/viewRequests';
// import useAlertStore from '@/stores/useAlertStore';
import useInvitationParkingStore from '@/stores/useInvitationParkingStore';
// import { ErrorProps } from 'next/error';
import { useState } from 'react';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
import Button from '@/components/common/Button';
import mq from '@/utils/mediaquery';

function InvitationParking() {
  const { carNumber, setCarNumber } = useInvitationParkingStore();
  const [isDone, setisDone] = useState(false);

  // const { alertState, openAlert } = useAlertStore();
  const onClickParkingAddHandler = async () => {
    try {
      const response = await postParking(carNumber);

      if (response.status === 201) {
        setisDone(true);
      }
    } catch (err) {
      // const error = err as ErrorProps;
      // openAlert('📢', error.message || '');
    }
    setisDone(true);
  };

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCarNumber(event.target.value);
  };

  const onClickParkingCancelHandler = () => {
    setisDone(false);
    setCarNumber('');
  };
  const onClickParkingChangeHandler = () => {};
  return (
    <div css={containerStyles}>
      <Header title={INVITATION_VEIW_INFO_TEXTS.category.parking} />
      {!isDone ? (
        <>
          <p>{INVITATION_CAROUSEL_TEXTS.parking.upParking}</p>
          <input
            type="text"
            onChange={onChangeHandler}
            placeholder="123가2123"
          />

          {/* { content, variant, isDisabled, onClick } */}
          <Button
            content="등록하기"
            variant="blue"
            onClick={onClickParkingAddHandler}
          />

          {/* {alertState.isOpen && <Alert />} */}
        </>
      ) : (
        <>
          <p>{INVITATION_CAROUSEL_TEXTS.parking.doneParking}</p>
          <input
            type="text"
            defaultValue={carNumber.carNumber}
            onChange={onChangeHandler}
            // placeholder="123가2123"
            css={doneInputStyles}
          />

          <div css={btnDivStyles}>
            <button
              type="button"
              onClick={onClickParkingCancelHandler}
              css={buttonStyles}
            >
              등록취소
            </button>
            <Button
              content="수정하기"
              variant="blue"
              onClick={onClickParkingChangeHandler}
            />
          </div>
        </>
      )}
    </div>
  );
}

const containerStyles = css`
  p {
    margin: 20px 0;
    width: 200px;
    height: 60px;
    font: ${theme.font.title.title2_500};
  }
  input {
    margin-bottom: 80px;
  }
`;
const btnDivStyles = css`
  display: flex;
  flex-direction: column;
  gap: 5px;

  ${mq.md} {
    flex-direction: row;
  }
`;

const buttonStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 100px;
  padding: 16px 0;
  border-radius: 16px;
  background: #e7eeff;
  color: ${theme.palette.primary};
  font: ${theme.font.subTitle.subTitle1_500};

  cursor: pointer;

  &:active {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.95);
  }
`;

const doneInputStyles = css`
  border: 0;
  border-bottom: 2px solid ${theme.palette.greyscale.grey20};
  border-radius: 0;

  font: ${theme.font.title.title2_600};
`;
export default InvitationParking;
