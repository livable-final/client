import { useRouter } from 'next/router';
import InvitationEdit from '@/components/invitation/edit/InvitationEdit';

function Edit() {
  const router = useRouter();
  const { id } = router.query;
  return <InvitationEdit id={id} />;
}

export default Edit;
