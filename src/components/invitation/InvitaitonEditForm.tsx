import usePagesStore from '@/stores/usePagesStore';
import InvitationDoneContainer from '@/components/invitation/create/InvitationDoneContainer';
import InvitationEdit from '@/components/invitation/edit/InvitationEdit';
import { InvitationEditProps } from '@/types/invitation/edit';

function InvitaitonEditForm({ id }: InvitationEditProps) {
  const { nextComponent } = usePagesStore();
  if (nextComponent === 'InvitationDoneContainer') {
    return <InvitationDoneContainer />;
  }

  return <InvitationEdit id={id} />;
}

export default InvitaitonEditForm;
