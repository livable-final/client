// 방문자 초대 시 이름/전화번호 유효성 검사

const checkValidationName = (name: string) => {
  const nameRegExp = /^[가-힣]{2,}$/;

  // 이름 : 한글만 가능, 최소 2자리 이상
  if (nameRegExp.test(name) && name.length >= 2) {
    return true;
  }

  return false;
};

const checkValidationContact = (contact: string) => {
  const contactRegExp = /^[0-9]{10,}$/;

  // 연락처 : 숫자만 가능, 최소 10자리 이상
  if (contactRegExp.test(contact) && contact.length >= 10) {
    return true;
  }

  return false;
};

export { checkValidationName, checkValidationContact };
