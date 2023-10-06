import usePagesStore from '@/stores/common/usePagesStore';
import InvitationDoneContainer from '@/components/invitation/create/InvitationDoneContainer';
import InvitationEdit from '@/components/invitation/edit/InvitationEdit';
import { InvitationEditProps } from '@/types/invitation/edit';
import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';

function InvitaitonEditForm({ id }: InvitationEditProps) {
  const { nextComponent } = usePagesStore();
  if (nextComponent === 'InvitationDoneContainer') {
    return (
      <div css={containerStyles}>
        <InvitationDoneContainer />;
      </div>
    );
  }

  return <InvitationEdit id={id} />;
}

const containerStyles = css`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0 auto;
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
export default InvitaitonEditForm;
