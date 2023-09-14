import useViewStore from '@/stores/useViewStore';
import InvitationOfficeInfo from '../invitation/view/InvitationOfficeInfo';

function ViewForm() {
  const { nextComponents, setNextComponent } = useViewStore();
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
