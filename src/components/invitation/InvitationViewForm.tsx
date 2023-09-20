import usePagesStore from '@/stores/usePagesStore';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import InvitationInfoContainer from '@/components/invitation/view/InvitationInfoContainer';
import InvitationCarouselContainer from '@/components/invitation/view/InvitationCarouselContainer';
import InvitationOfficeInfo from '@/components/invitation/view/InvitationOfficeInfo';
import InvitationHostInfo from '@/components/invitation/view/InvitationHostInfo';
import { INVITATION_VEIW_INFO_TEXTS } from '@/constants/invitation/viewTexts';

function InvitationViewForm() {
  const { nextComponents, setNextComponent } = usePagesStore();
  if (nextComponents === '식스센스 방문증') {
    return <InvitationViewForm />;
  }
  if (nextComponents === `${INVITATION_VEIW_INFO_TEXTS.category.building}`) {
    return <InvitationOfficeInfo />;
  }
  if (nextComponents === `${INVITATION_VEIW_INFO_TEXTS.category.host}`) {
    return <InvitationHostInfo />;
  }

  const onClickHandler = () => {
    setNextComponent('');
  };
  // 초대장 메인 페이지가 아랫단 시설 부분이 확정이 안나서 작업 보류중에 있습니다! 레이아웃 작업 끝나면 각 버튼에 연결해놓겠습니다!
  return (
    <div>
      <div>
        <Header title="식스센스 방문증" onClick={onClickHandler} />
        <InvitationInfoContainer />
        {/* 그랑서울 근처 식당 카페 테이블 부분 */}
        <InvitationCarouselContainer />
        <Button content="관리실" variant="secondaryGrey" />
      </div>
    </div>
  );
}

export default InvitationViewForm;
