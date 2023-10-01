import { useRouter } from 'next/router';
import theme from '@/styles/theme';
import Header from '@/components/common/Header';
import LunchSubTitle from '@/components/lunch/LunchSubTitle';
import useFetch from '@/hooks/useFetch';
import { css } from '@emotion/react';
import { CALENDAR_CONTENT, POINT_CONSTANTS } from '@/constants/lunch';
import { getPointLogs, postPoint } from '@/pages/api/lunch/calendarRequests';
import {
  Present,
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

function LunchCalendarPointCard() {
  const point = useSaveStore((state) => state.point);
  const setPoint = useSaveStore((state) => state.setPoint);
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
      setPoint({ point500: true });
    } catch (err) {
      // 예외 처리 alert 추가 예정
    }
  };
  const onClickPoint1000Handler = async () => {
    try {
      await postPoint();
      setPoint({ point1000: true });
    } catch (err) {
      // 예외 처리 alert 추가 예정
    }
  };
  const onClickPoint1500Handler = async () => {
    try {
      await postPoint();
      setPoint({ point1500: true });
    } catch (err) {
      // 예외 처리 alert 추가 예정
    }
  };
  return (
    <section>
      <Header title={title.point} onClickBack={onClickBackHandler} />
      <LunchSubTitle
        title={`10${subTitle.point} ${10 * count}p`}
        type="title"
        margin="24px"
      />
      <div css={pageStyles}>
        <ul css={pointBoxStyles}>
          {numbersArray.map((value, idx) => (
            <li key={value}>
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
                    <Present />
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
        <p>{card.text2}</p>
        <p>{card.text3}</p>
      </div>
    </section>
  );
}
const pageStyles = css``;

const pointBoxStyles = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(11, 1fr);

  // display: flex;
  // justify-content: space-between;
  // flex-wrap: wrap;
  margin: 32px 0 40px;

  // li:nth-child(4) {
  //   grid-column: 2;
  // }
  // li:nth-child(6) {
  //   grid-column: 2;
  // }
  // li:nth-child(9) {
  //   grid-column: 2;
  // }
  // li:nth-child(11) {
  //   grid-column: 2;
  // }
  // li:nth-child(14) {
  //   grid-column: 2;
  // }
  // li:nth-child(16) {
  //   grid-column: 2;
  // }
  // li:nth-child(19) {
  //   grid-column: 2;
  // }
  // li:nth-child(21) {
  //   grid-column: 2;
  // }
  // li:nth-child(24) {
  //   grid-column: 2;
  // }
  // li:nth-child(26) {
  //   grid-column: 2;
  // }
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
  color: ${theme.palette.greyscale.grey40};
`;

const cardStyles = css`
  padding: 24px 16px;
  background-color: ${theme.palette.greyscale.grey10};

  strong: {
    display: block;
    margin-bottom: 8px;
  }
`;
export default LunchCalendarPointCard;
