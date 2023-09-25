import Image from 'next/image';
import theme from '@/styles/theme';
import dayjs from 'dayjs';
import usePagesStore from '@/stores/usePagesStore';
import { css } from '@emotion/react';
import { Delicious, Location20 } from '@/assets/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function LunchCalendarDetailsSlide() {
  const { setNextComponent } = usePagesStore();

  const onClickHandler = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    // click 이벤트 발생할 때, e.target과 e.currentTarget이 달라서 비교 조건 사용 불가
    if (target.className === 'swiper-slide swiper-slide-active')
      setNextComponent('');
  };

  const reviewData = [
    {
      reviewTitle: '부대찌개',
      reviewTaste: 'GOOD',
      reviewDescription: '역시 부대찌개는 놀부지!',
      reviewCreatedAt: '2023-09-13T11:12:00',
      reviewImg: [
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95%ED%83%95.jpg',
      ],
      location: '놀부부대찌개',
    },
    {
      reviewTitle: '감자 스테이크 샐러드, 스테이크',
      reviewTaste: 'GOOD',
      reviewDescription: '음식이 친절하고, 사장님이 맛있어요',
      reviewCreatedAt: '2023-09-13T11:12:00',
      reviewImg: [
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95%ED%83%95.jpg',
      ],
      location: '현수네스테이크하우스',
    },
    {
      reviewTitle: '김밥천국',
      reviewTaste: 'BAD',
      reviewDescription: '김밥지옥입니다',
      reviewCreatedAt: '2023-09-13T11:12:00',
      reviewImg: [
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95.jpg',
        'https://livable-final.s3.ap-northeast-2.amazonaws.com/%EB%A7%88%EB%9D%BC%ED%83%95%ED%83%95.jpg',
      ],
      location: '김밥천국',
    },
  ];

  return (
    <div
      onClick={onClickHandler}
      onKeyDown={onClickHandler}
      role="button"
      tabIndex={0}
    >
      <Swiper
        css={slideModalStyles}
        navigation
        loop
        slidesPerView={1}
        modules={[Navigation]}
      >
        {reviewData.map((value) => (
          <SwiperSlide key={value.reviewCreatedAt}>
            <section css={slideStyles}>
              <div css={titleStyles}>
                <div>
                  <strong>{value.reviewTitle}</strong>
                  <div css={locationStyles}>
                    <Location20 />
                    <span>{value.location}</span>
                  </div>
                </div>
                {value.reviewTaste === 'GOOD' ? <Delicious /> : null}
              </div>
              <Swiper
                loop
                slidesPerView={1}
                pagination={{
                  type: 'fraction',
                }}
                modules={[Pagination]}
                // api 별도 호출 시 사용하기 위해 주석처리
                // onSlideChange={() => console.log('slide change')}
                // onSwiper={(swiper) => console.log(swiper)}
              >
                {value.reviewImg.map((img, i) => (
                  <SwiperSlide key={img}>
                    <div css={ImageBoxStyles}>
                      <Image
                        width={290}
                        height={193}
                        src={img}
                        alt={`이미지${i}`}
                        css={ImageStyles}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div css={textBoxStyles}>
                <p css={descriptionStyles}>{value.reviewDescription}</p>
                <p css={dateStyles}>
                  {dayjs(value.reviewCreatedAt).format('YYYY년 MM월 DD일')}
                </p>
              </div>
            </section>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const slideModalStyles = css`
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  --swiper-navigation-color: ${theme.palette.greyscale.grey5};
`;

const slideStyles = css`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  max-width: 290px;
  max-height: 356px;
  padding: 20px 0;
  border-radius: 16px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.18);
  background-color: ${theme.palette.white};

  .swiper.swiper-initialized.swiper-horizontal {
    .swiper-pagination {
      background: rgba(0, 0, 0, 0.25);
      margin-left: 234px;
      margin-bottom: 10px;
      width: 40px;
      border-radius: 10px;
      font: ${theme.font.body.body3_500};
      color: ${theme.palette.white};
    }
  }
`;

const titleStyles = css`
  display: flex;
  justify-content: space-between;
  padding: 0 20px 16px;

  strong {
    margin-left: 4px;
    font: ${theme.font.body.body1_600};
    color: ${theme.palette.greyscale.grey90};
  }
`;

const locationStyles = css`
  display: flex;
  align-items: center;
  gap: 2px;
  span {
    font: ${theme.font.body.body4};
    color: ${theme.palette.greyscale.grey50};
  }
`;

const ImageBoxStyles = css`
  position: relative;
  width: 100%;
  height: 100%;
  dispaly: flex;
  justify-content: center;
  align-items: center;
`;

const ImageStyles = css`
  width: '100%';
  height: 'auto';
  object-fit: cover;
`;

const textBoxStyles = css`
  display: flex;
  flex-direction: column;
  margin: 16px 20px 0;
`;

const descriptionStyles = css`
  font: ${theme.font.body.body1_600};
  color: ${theme.palette.greyscale.grey90};
`;
const dateStyles = css`
  margin-top: 10px;
  text-align: end;
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey40};
`;
export default LunchCalendarDetailsSlide;
