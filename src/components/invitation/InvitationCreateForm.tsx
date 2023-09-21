import usePagesStore from '@/stores/usePagesStore';
import InvitationPurposeContainer from '@/components/invitation/create/InvitationPurposeContainer';
import InvitationVisitorsContainer from '@/components/invitation/create/InvitationVisitorsContainer';
import InvitationInfoContainer from '@/components/invitation/create/InvitationInfoContainer';
import InvitationDoneContainer from '@/components/invitation/create/InvitationDoneContainer';

function InvitationCreateForm() {
  const { nextComponents } = usePagesStore();

  if (nextComponents === 'InvitationVisitorsContainer') {
    return <InvitationVisitorsContainer />;
  }
  if (nextComponents === 'InvitationInfoContainer') {
    return <InvitationInfoContainer />;
  }
  if (nextComponents === 'InvitationDoneContainer') {
    return <InvitationDoneContainer />;
  }

  return <InvitationPurposeContainer />;
}

export default InvitationCreateForm;
