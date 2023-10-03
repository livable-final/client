import Icons from '@/components/common/Icons';
import theme from '@/styles/theme';
import toast, { Toaster } from 'react-hot-toast';
import { InvitationBuildingTitleProps } from '@/types/invitation/view';
import { css } from '@emotion/react';

function InvitationBuildingTitle({
  title,
  address,
}: InvitationBuildingTitleProps) {
  const handleCopyClipBoard = async () => {
    try {
      await navigator.clipboard.writeText(address);

      toast('주소가 복사되었습니다.', {
        style: {
          borderRadius: '50px',
          backgroundColor: '#4d4d4d',

          color: '#fff',
        },
      });
    } catch (error) {
      toast('주소가 복사를 실패했습니다.');
    }
  };

  return (
    <div>
      <p css={TitleStyles}>{title}</p>
      <div css={AddressStyles}>
        <p>{address}</p>
        <button type="button" css={CopyStyles} onClick={handleCopyClipBoard}>
          <p>주소복사</p>
          <Icons icon="copy" color="blue" />
        </button>
        <Toaster position="bottom-center" />
      </div>
    </div>
  );
}

const TitleStyles = css`
  font: ${theme.font.title.title2_600};
  margin-bottom: 16px;
`;

const AddressStyles = css`
  display: flex;
  gap: 16px;
  align-items: start;
  p {
    color: ${theme.palette.greyscale.grey50};
    line-height: 24px;
  }
`;

const CopyStyles = css`
  display: flex;
  align-items: center;
  padding: 4px 0;

  p {
    white-space: nowrap;
    margin-right: 4px;
    font: ${theme.font.body.body3_400};
    color: ${theme.palette.bluescale.blue50};
    line-height: 21px;
  }
`;

export default InvitationBuildingTitle;
