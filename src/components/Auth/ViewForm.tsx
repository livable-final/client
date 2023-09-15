import usePagesStore from '@/stores/usePagesStore';
import InvitationOfficeInfo from '@/components/invitation/view/InvitationOfficeInfo';

function ViewForm() {
  const { nextComponents, setNextComponent } = usePagesStore();
  if (nextComponents === 'InvitationOfficeInfo') {
    return <InvitationOfficeInfo />;
  }

  const onClickHandler = () => {
    setNextComponent('InvitationOfficeInfo');
  };
  return (
    <div>
      <button type="button" onClick={onClickHandler}>
        OfficeInfo 페이지로 이동
      </button>
    </div>
  );
}

export default ViewForm;
