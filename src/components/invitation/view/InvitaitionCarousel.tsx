import theme from '@/styles/theme';
import { css } from '@emotion/react';

const dd = {
  cafe: '카페',
  restaurant: '식당',
};

const datas = [
  {
    category: 'cafe',
    name: 'Brewda',
    floor: '지하1층',
  },
  { category: 'restaurant', name: '오제제', floor: '지하8층' },
  { category: 'restaurant', name: '롯데리아', floor: '1층' },
];
function InvitaitionCarousel() {
  return (
    <div>
      <div>같은 건물안에 있는 {dd.cafe}를 추천해드릴게요</div>
      <ul css={invitationCarouselStyles}>
        {datas.map((data) => (
          <div key={data.name} css={invitationCarouselItemStyles}>
            <div className="imge">이미지</div>
            <div className="text">
              <div className="name">{data.name}</div>
              <div className="floor">빌딩 {data.floor}</div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
}

// GUI 미확정
const invitationCarouselStyles = css`
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`;

const invitationCarouselItemStyles = css`
  display: flex;
  flex-direction: row;
  margin: 16px;
  background-color: red;
  .imge {
    margin-right: 12px;
    width: 66px;
    height: 66px;
    background-color: aliceblue;
  }
  .text {
    width: 90px;
    height: 66px;
    display: flex;
    flex-direction: column;
    .name {
      font: ${theme.font.body.body1_500};
      color: ${theme.palette.greyscale.grey80};
    }
    .floor {
      font: ${theme.font.body.body1_500};
      color: ${theme.palette.greyscale.grey80};
    }
  }
`;

export default InvitaitionCarousel;
