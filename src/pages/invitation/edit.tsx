import { useRouter } from 'next/router';
import InvitaitonEditForm from '@/components/invitation/InvitaitonEditForm';

function Edit() {
  const router = useRouter();
  const { id } = router.query;
  return <InvitaitonEditForm id={id} />;
}

export default Edit;
