import { useRouter } from 'next/router';
import Image from 'next/image';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import useFetch from '@/hooks/useFetch';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT, POINT_CONSTANTS } from '@/constants/lunch';
import { getPointLogs, postPoint } from '@/pages/api/lunch/calendarRequests';
import {
  Point10,
  Point1000,
  Point10Pink,
  Point1500,
  Point500,
  Present500,
  Present1000,
  Present1500,
} from '@/assets/icons';
import useSaveStore from '@/stores/useSaveStore';
import useAlertStore from '@/stores/useAlertStore';
import { ErrorProps } from '@/types/common/response';
import Alert from '@/components/common/Alert';

function LunchCalendarPointCard() {
  const point = useSaveStore((state) => state.point);
  const setPoint = useSaveStore((state) => state.setPoint);
  const { alertState, openAlert } = useAlertStore();
  const router = useRouter();
  const { title, subTitle } = CALENDAR_CONTENT;
  const { card } = POINT_CONSTANTS;
  const { response } = useFetch({
    fetchFn: getPointLogs,
  });
  const count = response && response.data.count;

  const numbersArray = Array.from({ length: 28 }, (_, index) => index + 1);

  const onClickBackHandler = () => {
    router.push('/lunch/calendar');
  };

  const onClickPoint500Handler = async () => {
    try {
      await postPoint();
      setPoint({ point500: false });
    } catch (err) {
      const error = err as ErrorProps;
      openAlert('📢', error.message);
    }
  };
  const onClickPoint1000Handler = async () => {
    try {
      await postPoint();
      setPoint({ point1000: true });
    } catch (err) {
      const error = err as ErrorProps;
      openAlert('📢', error.message);
    }
  };
  const onClickPoint1500Handler = async () => {
    try {
      await postPoint();
      setPoint({ point1500: true });
    } catch (err) {
      const error = err as ErrorProps;
      openAlert('📢', error.message);
    }
  };

  return (
    <section>
      {alertState.isOpen && <Alert />}
      <Header title={title.point} onClickBack={onClickBackHandler} />
      <LunchSubTitle
        title={`10${subTitle.point} ${10 * count}p`}
        type="title"
        margin="24px"
      />
      <div>
        <ul css={pointBoxStyles}>
          {numbersArray.map((value, idx) => (
            <li key={value} css={liStyles}>
              {count > 0 &&
              idx + 1 <= 13 &&
              idx + 1 <= count &&
              idx + 1 !== 7 ? (
                <Point10 />
              ) : count > 13 &&
                idx + 1 > 13 &&
                idx + 1 <= count &&
                idx + 1 !== 14 &&
                idx + 1 !== 21 ? (
                <Point10Pink />
              ) : count >= 7 && idx + 1 === 7 ? (
                !point.point500 ? (
                  <Present500 onClick={onClickPoint500Handler} />
                ) : (
                  <Point500 />
                )
              ) : count >= 14 && idx + 1 === 14 ? (
                !point.point1000 ? (
                  <Present1000 onClick={onClickPoint1000Handler} />
                ) : (
                  <Point1000 />
                )
              ) : count >= 21 && idx + 1 === 21 ? (
                !point.point1500 ? (
                  <Present1500 onClick={onClickPoint1500Handler} />
                ) : (
                  <Point1500 />
                )
              ) : (
                <div css={circleStyles}>
                  {value === 6 || value === 14 || value === 21 ? (
                    <Image
                      width={40}
                      height={40}
                      src="/point/Wrappedgift1.png"
                      alt="gift"
                    />
                  ) : (
                    <span css={textStyles}>{value}</span>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div css={cardStyles}>
        <strong>{card.text1}</strong>
        <div>
          <p>{card.text2}</p>
          <p>{card.text3}</p>
        </div>
      </div>
    </section>
  );
}

const pointBoxStyles = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(11, 1fr);
  margin: 32px 0 40px;
`;

const liStyles = css`
  display: flex;
  justify-content: center;
`;

const circleStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 82px;
  margin-bottom: 44px;
  border-radius: 100px;
  border: 1px solid ${theme.palette.greyscale.grey10};
`;

const textStyles = css`
  font: ${theme.font.title.title2_500};
  color: ${theme.palette.greyscale.grey40};
`;

const cardStyles = css`
  margin: 0 -16px 20px;
  padding: 24px 16px;
  background-color: ${theme.palette.greyscale.grey10};
  color: ${theme.palette.greyscale.grey50};

  strong: {
    display: block;
    margin-bottom: 8px;
    font: ${theme.font.body.body2_500};
  }

  > div {
    margin-top: 8px;
  }
  p {
    font: ${theme.font.body.body3_400};
  }
`;
export default LunchCalendarPointCard;
