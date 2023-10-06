import Header from '@/components/common/Header';
import InvitationCreateForm from '@/components/invitation/InvitationCreateForm';
import InvitationPreview from '@/components/invitation/create/InvitationPreview';
import useInvitationHeaderTitleStore from '@/stores/invitaion/useInvitationHeaderTitleStore';
import useViewStore from '@/stores/common/usePagesStore';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import mq from '@/utils/mediaquery';
import { useState } from 'react';
import { css } from '@emotion/react';
import { InvitationCreateTexts } from '@/types/invitation/create';

function Create() {
  const { nextComponent } = useViewStore();
  const { headerTitle } = useInvitationHeaderTitleStore();
  const { header }: InvitationCreateTexts = CREATE_TEXTS;

  // 예시 컴포넌트 오픈 상태
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // 예시 버튼 클릭 핸들러
  const onClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div css={createContainerStyles}>
      <div css={headerContainerStyles(nextComponent)}>
        <Header
          title={headerTitle}
          type={nextComponent === '' ? 'text' : ''}
          text={header.preview}
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

const headerContainerStyles = (nextComponent: string) => css`
  position: sticky;
  top: 0;
  display: ${nextComponent === 'InvitationDoneContainer'
    ? 'none' // 초대장 전송 완료 컴포넌트에서 헤더 미사용
    : 'block'};
  width: 100%;
  z-index: 1;
`;

export default Create;
