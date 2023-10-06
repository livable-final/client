import InvitationPurposeContainer from '@/components/invitation/create/InvitationPurposeContainer';
import InvitationVisitorsContainer from '@/components/invitation/create/InvitationVisitorsContainer';
import InvitationInfoContainer from '@/components/invitation/create/InvitationInfoContainer';
import InvitationDoneContainer from '@/components/invitation/create/InvitationDoneContainer';
import COMPONENT_NAME from '@/constants/common/pages';
import usePagesStore from '@/stores/common/usePagesStore';
import { ComponentName } from '@/types/common/pages';

function InvitationCreateForm() {
  const { nextComponent } = usePagesStore();
  const { invitation }: ComponentName = COMPONENT_NAME;

  if (nextComponent === invitation.create.visitors) {
    return <InvitationVisitorsContainer />;
  }
  if (nextComponent === invitation.create.info) {
    return <InvitationInfoContainer />;
  }
  if (nextComponent === invitation.create.done) {
    return <InvitationDoneContainer />;
  }

  return <InvitationPurposeContainer />;
}

export default InvitationCreateForm;
