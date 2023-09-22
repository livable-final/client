import usePagesStore from '@/stores/usePagesStore';
import InvitationPurposeContainer from '@/components/invitation/create/InvitationPurposeContainer';
import InvitationVisitorsContainer from '@/components/invitation/create/InvitationVisitorsContainer';
import InvitationInfoContainer from '@/components/invitation/create/InvitationInfoContainer';
import InvitationDoneContainer from '@/components/invitation/create/InvitationDoneContainer';

function InvitationCreateForm() {
  const { nextComponent } = usePagesStore();

  if (nextComponent === 'InvitationVisitorsContainer') {
    return <InvitationVisitorsContainer />;
  }
  if (nextComponent === 'InvitationInfoContainer') {
    return <InvitationInfoContainer />;
  }
  if (nextComponent === 'InvitationDoneContainer') {
    return <InvitationDoneContainer />;
  }

  return <InvitationPurposeContainer />;
}

export default InvitationCreateForm;
