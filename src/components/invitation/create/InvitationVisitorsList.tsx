import Add from '@/components/common/Add';
import NameTag from '@/components/common/NameTag';
import BottomSheet from '@/components/common/BottomSheet';
import useViewStore from '@/stores/usePagesStore';
import useBottomSheetStore from '@/stores/useBottomSheetStore';
import useInvitationCreateStore from '@/stores/useInvitationCreateStore';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import InvitationAddVisitorList from '@/components/invitation/edit/InvitationAddVisitorList';
import mq from '@/utils/mediaquery';
import theme from '@/styles/theme';
import { css } from '@emotion/react';
import {
  InvitationVisitorsListProps,
  InvitationCreateTexts,
} from '@/types/invitation/create';

function InvitationVisitorsList({
  visitorsList,
  onClick,
}: InvitationVisitorsListProps) {
  const { title }: InvitationCreateTexts = CREATE_TEXTS;
  const { nextComponent } = useViewStore();
  const { bottomSheetState, openBottomSheet } = useBottomSheetStore();
  const { createContents } = useInvitationCreateStore();

  // 방문자 추가 버튼
  const onClickHandler = () => {
    openBottomSheet(<InvitationAddVisitorList visitorsList={visitorsList} />);
  };

  return (
    <div css={containerStyles}>
      <div css={titleWrapperStyles}>
        <div css={titleStyles}>{title.invitationList}</div>
        <div css={lengthStyles}>
          {visitorsList.length}/
          {createContents.purpose === 'interview' ? '1' : '30'}
        </div>
      </div>
      <div css={listWrapperStyles}>
        {nextComponent !== 'InvitationVisitorsContainer' &&
          createContents.purpose !== 'interview' &&
          visitorsList.length !== 30 && <Add isBlue onClick={onClickHandler} />}
        {visitorsList.map((list) => (
          <NameTag key={list.name} name={list.name} onClick={onClick} />
        ))}
      </div>
      {bottomSheetState.isOpen && <BottomSheet />}
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;
  margin-bottom: 100px;

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

const titleWrapperStyles = css`
  display: flex;
  justify-content: space-between;
`;

const titleStyles = css`
  font: ${theme.font.subTitle.subTitle1_600};
  color: ${theme.palette.title};
  line-height: 25px;
`;

const lengthStyles = css`
  font: ${theme.font.body.body1_400};
  color: ${theme.palette.greyscale.grey40};
  line-height: 24px;
`;

const listWrapperStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  width: 100%;
`;

export default InvitationVisitorsList;
