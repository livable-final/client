import Header from '@/components/common/Header';
import InvitationCreateForm from '@/components/invitation/InvitationCreateForm';
import useInvitationHeaderTitleStore from '@/stores/useInvitationHeaderTitleStore';
import useViewStore from '@/stores/usePagesStore';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';

/**
 * 방문자 초대장 생성 흐름
 * (1) 방문자 초대 목적 - InvitationPurposeContainer
 * (2) 방문자 성함/연락처 입력 - InvitationVisitorsContainer
 * (3) 방문자 초대 장소/일시 - InvitationInfoContainer
 * (4) 방문자 초대장 전송 전 최종 확인 - Modal
 * (5) 방문자 초대장 전송 완료 - InvitationDoneContainer
 */

function Create() {
  const { nextComponents } = useViewStore();
  const { headerTitle } = useInvitationHeaderTitleStore();

  return (
    <div css={createContainerStyles}>
      <div css={headerContainerStyles}>
        <Header
          title={headerTitle}
          type={nextComponents === '' ? 'text' : ''}
          text="예시"
          onClick={() => alert('미리보기 테스트')}
        />
      </div>
      <InvitationCreateForm />
    </div>
  );
}

const createContainerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 21px;
  min-width: 280px;
  max-width: 360px;

  ${mq.md} {
    max-width: 480px;
  }
  ${mq.lg} {
    max-width: 640px;
  }
  ${mq.tab} {
    max-width: 1024px;
  }
`;

const headerContainerStyles = css`
  min-width: 280px;
  max-width: 360px;

  ${mq.md} {
    min-width: 361px;
    max-width: 480px;
  }
  ${mq.lg} {
    min-width: 481px;
    max-width: 640px;
  }
  ${mq.tab} {
    min-width: 641px;
    max-width: 1024px;
  }
`;

export default Create;
