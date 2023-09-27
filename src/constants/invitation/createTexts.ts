const CREATE_TEXTS = {
  header: {
    default: '방문자 초대',
    meeting: '회의참여자 초대',
    interview: '면접자 초대',
    fixedTermWork: '기간근무자 초대',
    seminar: '세미나 초대',
    as: 'AS/점검 초대',
    etc: '방문자 초대',
  },
  title: {
    purpose: '방문증을 만드는 이유는 무엇인가요?',
    invitation: `식스센스에\n누구를 초대할까요?`,
    invitationList: '초대 목록',
    invitationInfo: '초대 정보',
    invitationPlace: '초대 장소',
    invitationDate: '초대 날짜 선택',
    invitationTime: '시간 선택',
  },
  description: {
    meeting:
      '예약한 회의실을 선택하거나 회의의 장소·날짜·시간을 자유롭게 선택할 수 있어요',
    interview: '면접의 장소·날짜·시간을 입력해 한 명에게 보낼 수 있어요',
    fixedTermWork: '장소·기간(시작일~종료일)·시간을 자유롭게 선택할 수 있어요',
    seminar: '장소·기간(시작일~종료일)·시간을 자유롭게 선택할 수 있어요',
    as: '장소·기간(시작일~종료일)·시간을 자유롭게 선택할 수 있어요',
    etc: '장소·기간(시작일~종료일)·시간을 자유롭게 선택할 수 있어요',
  },
  button: {
    next: '다음',
    done: '완료',
    confirm: '확인',
    save: '저장',
    send: '초대장 보내기',
  },
  placeholder: {
    purpose: '방문목적을 직접 입력해 주세요.',
    place: '장소 선택',
    placeEtc: '초대장소 입력',
    date: '날짜 선택',
    time: '시간 선택',
    tip: '방문하시는 분이 장소를 쉽게 찾을 수 있게 팁을 알려주세요.',
    name: '이름 입력',
    contact: '전화번호 입력',
  },
  modal: {
    send: {
      title: '초대장 전송',
      content: '초대장을 전송할까요?',
    },
    resend: {
      title: '초대장 재전송',
      content: '초대장을 이대로 수정하고 전송할까요?',
    },
    btn: '전송하기',
  },
  checkbox: '이 메세지를 다음에도 사용',
  timeSelector: {
    startHour: 9,
    endHour: 18,
    interval: 30,
  },
};

export default CREATE_TEXTS;
