import usePagesStore from '@/stores/usePagesStore';

function InvitationOfficeInfo() {
  const { setNextComponent } = usePagesStore();
  const onClickHandler = () => {
    setNextComponent('');
  };
  return (
    <div>
      InvitationOfficeInfo
      <br />
      <button type="button" onClick={onClickHandler}>
        view 첫 페이지로 이동
      </button>
    </div>
  );
}

export default InvitationOfficeInfo;
