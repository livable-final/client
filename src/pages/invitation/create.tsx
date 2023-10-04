import Header from '@/components/common/Header';
import InvitationCreateForm from '@/components/invitation/InvitationCreateForm';
import InvitationPreview from '@/components/invitation/create/InvitationPreview';
import useInvitationHeaderTitleStore from '@/stores/useInvitationHeaderTitleStore';
import useViewStore from '@/stores/usePagesStore';
// import useModalStore from '@/stores/useModalStore';
import mq from '@/utils/mediaquery';
import { useState } from 'react';
import { css } from '@emotion/react';
// import Modal from '@/components/common/Modal';

function Create() {
  const { nextComponent } = useViewStore();
  const { headerTitle } = useInvitationHeaderTitleStore();
  // const { modalState, openModal } = useModalStore();

  // 예시 컴포넌트 오픈 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 예시 버튼 클릭 핸들러
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={createContainerStyles}>
      <div css={headerContainerStyles}>
        <Header
          title={headerTitle}
          type={nextComponent === '' ? 'text' : ''}
          text="예시"
          onClick={onClick}
        />
      </div>
      <InvitationCreateForm />
      {isOpen && <InvitationPreview onClick={onClick} />}
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
  width: 100%;
  z-index: 1;
`;

export default Create;
