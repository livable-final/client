// import Image from 'next/image';
import theme from '@/styles/theme';
import Image from 'next/image';
import useFetch from '@/hooks/useFetch';
import { css } from '@emotion/react';
import { getInvitationCarousel } from '@/pages/api/invitation/viewRequests';
import { InvitationCarouselProps } from '@/types/invitation/view';
import { INVITATION_CAROUSEL_TEXTS } from '@/constants/invitation/viewTexts';

function InvitaitionCarousel({ type }: InvitationCarouselProps) {
  const { restaurant, cafe } = INVITATION_CAROUSEL_TEXTS;
  const { response } = useFetch({
    fetchFn: () => getInvitationCarousel(type),
  });

  const datas = response && response.data;

  return (
    <>
      <div css={carouselSubtitleStyles}>
        {type === 'restaurant' ? `${restaurant.subtitle}` : `${cafe.subtitle}`}
      </div>
      <div css={carouselTitleStyles}>
        {type === 'restaurant' ? (
          <div>
            테라타워 근처 <span>{restaurant.contents}</span> 추천!
          </div>
        ) : (
          <div>
            근처 <span>{cafe.title}</span>를 알려드릴게요
          </div>
        )}
      </div>
      <div css={carouselStyles}>
        {datas &&
          datas.map((item) => (
            <div key={item.restaurantName} css={carouselItemStyles}>
              <div css={itemImageContainerStyles}>
                <Image
                  src={item.restaurantImageUrl}
                  width={135}
                  height={80}
                  alt={item.restaurantName}
                  css={itemImageStyles}
                  priority
                />
              </div>

              <div css={carouselItemInfoStyles}>
                <div css={itemInfoNameStyles}>{item.restaurantName}</div>
                {item.inBuilding ? (
                  <div css={itemInFloorStyles}>테라타워 {item.floor}층</div>
                ) : (
                  <div css={itemInFloorStyles}>
                    테라타워에서 {item.takenTime}분
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </>
  );
}

const carouselSubtitleStyles = css`
  color: ${theme.palette.greyscale.grey70};
  font: ${theme.font.body.body2_500};
  line-height: 22px;
`;
const carouselTitleStyles = css`
  margin-bottom: 20px;
  color: ${theme.palette.title};
  font: ${theme.font.subTitle.subTitle2_600};
  span {
    color: ${theme.palette.primary};
  }
`;

const carouselStyles = css`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  gap: 12px;
  padding-bottom: 10px;
  margin-bottom: 24px;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const carouselItemStyles = css`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  gap: -12px;
  align-items: flex-start;
  position: relative;
  width: 135px;
  height: 120px;
  border-radius: 8px;
`;
const itemImageStyles = css`
  width: 135px;
  height: 80px;
  object-fit: cover;
  position: relative;
  background-color: aliceblue;
  border-radius: 8px;
`;
const itemImageContainerStyles = css`
  width: 135px;
  height: 80px;
  position: relative;
  background-color: aliceblue;
  overflow: hidden;
  border-radius: 8px;
`;
const carouselItemInfoStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
  position: absolute;
  bottom: 0;
  width: 135px;
  height: 52px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 6px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.85);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
`;
const itemInfoNameStyles = css`
  font: ${theme.font.body.body1_500};
  color: ${theme.palette.greyscale.grey80};
  width: 123px;
  line-height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const itemInFloorStyles = css`
  font: ${theme.font.body.body4};
  color: ${theme.palette.greyscale.grey60};
  text-align: right;
  line-height: 16px;
`;

export default InvitaitionCarousel;
