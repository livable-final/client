import { TestBuildingMap } from '@/assets/testImg';
import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';
import { css } from '@emotion/react';

function InvitationFindRoadBtn() {
  return (
    <div css={mapStyles}>
      <button type="button" css={buttonStyles}>
        <Icons icon="direction" color="blue" />
        <span css={contentStyles}>길찾기</span>
      </button>
    </div>
  );
}

const mapStyles = css`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 25px 0;
  background: url(${TestBuildingMap.src});

  width: 100%;
  height: 500px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const buttonStyles = css`
  display: flex;
  position: absolute;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  right: 20px;
  bottom: 20px;
  width: 58px;
  height: 58px;
  padding: 8px;
  gap: 4px;
  flex-shrink: 0;
  border-radius: 100px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  background: ${theme.palette.white};
  cursor: pointer;

  &:active {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
    transform: scale(0.95);
  }
`;

const contentStyles = css`
  color: ${theme.palette.primary};
  font: ${theme.font.etc.findRoad};
`;

export default InvitationFindRoadBtn;
