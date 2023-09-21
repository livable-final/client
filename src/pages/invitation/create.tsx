import Header from '@/components/common/Header';
import InvitationCreateForm from '@/components/invitation/InvitationCreateForm';
import useInvitationHeaderTitleStore from '@/stores/useInvitationHeaderTitleStore';
import useViewStore from '@/stores/usePagesStore';
import useModalStore from '@/stores/useModalStore';
import mq from '@/utils/mediaquery';
import { css } from '@emotion/react';
import Modal from '@/components/common/Modal';

function Create() {
  const { nextComponent } = useViewStore();
  const { headerTitle } = useInvitationHeaderTitleStore();
  const { modalState, openModal } = useModalStore();

  return (
    <div css={createContainerStyles}>
      <div css={headerContainerStyles}>
        <Header
          title={headerTitle}
          type={nextComponent === '' ? 'text' : ''}
          text="예시"
          onClick={() =>
            openModal('test', '방문증 미리보기가 구현될 예정이에요!')
          }
        />
      </div>
      {modalState.isOpen && <Modal isAlert />}
      <InvitationCreateForm />
    </div>
  );
}

const createContainerStyles = css`
  position: relative;
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
  position: sticky;
  top: 0;
  min-width: 280px;
  max-width: 360px;
  z-index: 1;

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
