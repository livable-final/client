import Add from '@/components/common/Add';
import NameTag from '@/components/common/NameTag';
import BottomSheet from '@/components/common/BottomSheet';
import useViewStore from '@/stores/common/usePagesStore';
import useBottomSheetStore from '@/stores/common/useBottomSheetStore';
import useInvitationCreateStore from '@/stores/invitaion/useInvitationCreateStore';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import InvitationAddVisitorList from '@/components/invitation/edit/InvitationAddVisitorList';
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
      {/* 방문자 등록(VisitorsContainer)파트에서 등록된 방문자가 0일 때는 타이틀 미노출 */}
      {nextComponent === 'InvitationVisitorsContainer' &&
        visitorsList.length > 0 && (
          <div css={titleWrapperStyles}>
            <div css={titleStyles}>{title.invitationList}</div>
            <div css={lengthStyles}>
              {visitorsList.length}/
              {createContents.purpose === 'interview' ? '1' : '30'}
            </div>
          </div>
        )}
      {/* 초대 정보(InvitationInfoContainer)파트에서 방문자 모두 삭제 시에도 타이틀 유지 */}
      {nextComponent === 'InvitationInfoContainer' && (
        <div css={titleWrapperStyles}>
          <div css={titleStyles}>{title.invitationList}</div>
          <div css={lengthStyles}>
            {visitorsList.length}/
            {createContents.purpose === 'interview' ? '1' : '30'}
          </div>
        </div>
      )}
      <div css={listWrapperStyles}>
        {/* 초대 목적이 면접일 때, 방문자가 1명 등록되면 리스트의 추가 버튼 숨김 */}
        {/* 초대 정보(InvitationInfoContainer)파트에서 방문자 모두 삭제 시에도 리스트에서 추가 버튼 활성화 */}
        {createContents.purpose === 'interview' && visitorsList.length === 1
          ? null
          : nextComponent !== 'InvitationVisitorsContainer' &&
            visitorsList.length < 30 && <Add isBlue onClick={onClickHandler} />}
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
  min-width: 280px;
  max-width: 640px;
  margin-bottom: 100px;
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
