import Image from 'next/image';
import theme from '@/styles/theme';
import dayjs from 'dayjs';
import useWriteStore from '@/stores/useWriteStore';
import useCalendarStore from '@/stores/useCalendarStore';
import { css } from '@emotion/react';
import {
  Location20,
  FoodNoPhoto,
  FoodLunchBox,
  FoodCafe,
} from '@/assets/icons';
import Icons from '@/components/common/Icons';
import { COMMON_ICON_NAMES } from '@/constants/common';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function LunchCalendarDetailsSlide() {
  const setIsChecked = useWriteStore((state) => state.setIsChecked);
  const reviewDetails = useCalendarStore((state) => state.reviewDetails);
  const { lunch } = COMMON_ICON_NAMES;

  const onClickHandler = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    event.preventDefault();

    const target = event.target as HTMLInputElement;
    // click 이벤트 발생할 때, e.target과 e.currentTarget이 달라서 비교 조건 사용 불가
    if (
      target.className === 'swiper-slide swiper-slide-active' ||
      target.className === 'swiper-slide swiper-slide-active swiper-slide-next'
    )
      setIsChecked();
  };

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
        {reviewDetails.map((value) => (
          <SwiperSlide key={value.reviewCreatedAt}>
            <section css={slideStyles(value.images.length > 0)}>
              <div>
                <div css={titleStyles}>
                  <div>
                    <p>{value.reviewTitle}</p>
                    {value.reviewType === 'restaurant' && (
                      <div css={locationStyles}>
                        <Location20 />
                        <span>{value.location}</span>
                      </div>
                    )}
                  </div>
                  {value.reviewTaste === 'GOOD' ? (
                    <Icons icon={lunch.smile} size="22px" />
                  ) : null}
                </div>
                <Swiper
                  loop
                  slidesPerView={1}
                  pagination={{
                    type: 'fraction',
                  }}
                  modules={[Pagination]}
                >
                  {value.images.length > 0 ? (
                    value.images.map((img, i) => (
                      <SwiperSlide key={img}>
                        <div css={ImageBoxStyles}>
                          <Image
                            fill
                            src={img}
                            alt={`이미지${i}`}
                            css={ImageStyles}
                          />
                        </div>
                      </SwiperSlide>
                    ))
                  ) : (
                    <div
                      css={css`
                        display: flex;
                        justify-content: center;
                        padding: 34px 0;
                      `}
                    >
                      {value.reviewType === 'restaurant' ? (
                        <FoodNoPhoto />
                      ) : value.reviewType === 'lunchBox' ? (
                        <FoodLunchBox />
                      ) : (
                        <FoodCafe />
                      )}
                    </div>
                  )}
                </Swiper>
                <div css={textBoxStyles}>
                  <p css={descriptionStyles}>{value.reviewDescription}</p>
                </div>
              </div>
              <p css={dateStyles}>
                {dayjs(value.reviewCreatedAt).format('YYYY년 MM월 DD일')}
              </p>
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
  --swiper-navigation-size: 20px;
`;

const slideStyles = (type: boolean) => css`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 290px;
  max-height: ${type ? '350px' : '281px'};
  padding: 20px 0;
  box-sizing: content-box;
  border-radius: 16px;
  box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.18);
  background-color: ${theme.palette.white};

  .swiper.swiper-initialized.swiper-horizontal {
    position: relative;
    .swiper-pagination {
      position: absolute;
      bottom: 24px;
      left: 80%;
      background: rgba(0, 0, 0, 0.25);
      width: 40px;
      border-radius: 10px;
      font: ${theme.font.body.body3_500};
      color: ${theme.palette.white};
      @media (min-width: 480px) {
        left: 88%;
      }
    }
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    width: 20px;
    height: 20px;
  }

  @media (max-width: 280px) {
    width: 280px;
  }

  @media (min-width: 480px) {
    width: 480px;
  }
`;

const titleStyles = css`
  display: flex;
  justify-content: space-between;
  padding: 0 20px;

  p {
    margin-left: 4px;
    display: block;
    max-width: 160px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font: ${theme.font.body.body1_600};
    color: ${theme.palette.greyscale.grey90};
  }
`;

const locationStyles = css`
  display: flex;
  align-items: center;
  gap: 2px;
  span {
    font: ${theme.font.body.body3_400};
    color: ${theme.palette.greyscale.grey50};
  }
`;

const ImageBoxStyles = css`
  position: relative;
  width: 100%;
  height: 193px;
  dispaly: flex;
  justify-content: center;
  align-items: center;
  margin: 16px 0;

  @media (min-width: 480px) {
    height: 220px;
  }
`;

const ImageStyles = css`
  width: '100%';
  height: 'auto';
  object-fit: cover;
`;

const textBoxStyles = css`
  margin: 0 20px 0;
`;

const descriptionStyles = css`
  font: ${theme.font.etc.review};
  color: ${theme.palette.greyscale.grey90};
`;
const dateStyles = css`
  margin: 0 20px 0;
  // margin-top: 10px;
  text-align: end;
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey40};
`;
export default LunchCalendarDetailsSlide;
