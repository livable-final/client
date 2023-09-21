import { css } from '@emotion/react';
import mq from '@/utils/mediaquery';
import InvitaitionCarousel from '@/components/invitation/view/InvitaitionCarousel';

export const restaurantDatas = [
  {
    restaurantCategory: 'restaurant',
    restaurantName: 'Brewda',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: false,
    takenTime: 3,
    floor: 0,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'restaurant',
    restaurantName: '현수네 손맛 아메리카노',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: true,
    takenTime: 0,
    floor: -1,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'restaurant',
    restaurantName: '아웃백',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: true,
    takenTime: 0,
    floor: 9,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'restaurant',
    restaurantName: '버거킹',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: true,
    takenTime: 0,
    floor: 4,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'restaurant',
    restaurantName: '복돈이 미나리 삼겹',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: false,
    takenTime: 4,
    floor: 5,
    url: 'https://place.map.kakao.com/1234892442',
  },
];

export const cafeDatas = [
  {
    restaurantCategory: 'cafe',
    restaurantName: 'Brewda',
    restaurantImageUrl: '/카페/브루다.jpg',
    inBuilding: false,
    takenTime: 3,
    floor: 0,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'cafe',
    restaurantName: '현수네 손맛 아메리카노',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: true,
    takenTime: 0,
    floor: -1,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'cafe',
    restaurantName: 'mega',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: true,
    takenTime: 0,
    floor: -1,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'cafe',
    restaurantName: 'bana',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: true,
    takenTime: 0,
    floor: -1,
    url: 'https://place.map.kakao.com/1234892442',
  },
  {
    restaurantCategory: 'cafe',
    restaurantName: '스타벅스',
    restaurantImageUrl:
      'https://s3-alpha-sig.figma.com/img/10e8/a6fc/9123c78578aa150d6296d0c86d740d69?Expires=1696204800&Signature=E4v16zmxn-GNbNit5JQGMAxllCOV54sRvYk7tMs4V98gF~zuublbsRv3c~b7KjoKYy-1xHCS3oCKK5UKGTT6brRpAxGbSRQTleH2l3IzM4f8ySvQrNe88DvmH~NDB5PJHBCjDksHPAcJtAS6qlQsZc~E7W7hpn6dxZTn4fbYOkB61M3PrOUjGDJnIvsJN96A-mHKYS7XRIk4d-fYV8O2kT6wnzgSz5ttKpXLADuCIYs-TPSyDavQzbntBBYoikAjVKkdSTip9YEr9r-1m0X8OKOx6VGswx-Y8lxCABk-4k39fkZiR7kwLfU41lnC2jvCe75OfK5DdoL7UUoFLedAmw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    inBuilding: true,
    takenTime: 0,
    floor: -1,
    url: 'https://place.map.kakao.com/1234892442',
  },
];

function InvitationCarouselContainer() {
  return (
    <div css={invitationCarouselContainerStyles}>
      <InvitaitionCarousel datas={restaurantDatas} />
      <InvitaitionCarousel datas={cafeDatas} />
    </div>
  );
}

// GUI 미확정
const invitationCarouselContainerStyles = css`
  margin-bottom: 52px;
  ${mq.tab} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 70%;
    margin: 0 auto;
  }
`;

export default InvitationCarouselContainer;
