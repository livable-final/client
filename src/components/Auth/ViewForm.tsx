import useViewStore from '@/stores/useViewStore';
import InvitationOfficeInfo from '@/components/invitation/view/InvitationOfficeInfo';
import InvitationHostInfo from '@/components/invitation/view/InvitationHostInfo';


function ViewForm() {
  const { nextComponents, setNextComponent } = useViewStore();
  if (nextComponents === 'InvitationOfficeInfo') {
    return <InvitationOfficeInfo />;
  }
  if (nextComponents === 'InvitationHostInfo') {
    return <InvitationHostInfo />;
  }

  const onClickHandler = (event: React.MouseEvent) => {
    setNextComponent((event.target as HTMLInputElement).value);
  };
  // 초대장 메인 페이지가 아랫단 시설 부분이 확정이 안나서 작업 보류중에 있습니다! 레이아웃 작업 끝나면 각 버튼에 연결해놓겠습니다!
  return (
    <div>
      <button
        type="button"
        value="InvitationOfficeInfo"
        onClick={onClickHandler}
      >
        OfficeInfo 페이지로 이동
      </button>
      <button type="button" value="InvitationHostInfo" onClick={onClickHandler}>
        HostInfo 페이지로 이동
      </button>
    </div>
  );
}

export default ViewForm;
