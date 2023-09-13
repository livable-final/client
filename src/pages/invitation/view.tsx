import ViewForm from '@/components/auth/ViewForm';
import Header from '@/components/common/Header';
import Button from '@/components/common/Button';
import InvitationInfoContainer from '@/components/invitation/view/InvitationInfoContainer';
import InvitationCarouselContainer from '@/components/invitation/view/InvitationCarouselContainer';

function View() {
  const onClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    event.preventDefault();
  };
  return (
    <div>
      <Header title="식스센스 방문증" onClick={onClickHandler} />
      <InvitationInfoContainer />
      {/* 그랑서울 근처 식당 카페 테이블 부분 */}
      <InvitationCarouselContainer />
      <Button content="관리실" variant="secondaryGrey" />
    </div>
  );
}

export default View;
