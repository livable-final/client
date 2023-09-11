import Input from '@/components/common/Input';
import NameTag from '@/components/common/NameTag';
import Add from '@/components/common/Add';
import Button from '@/components/common/Button';
import { css } from '@emotion/react';

function InvitationDate() {
  const nameTagTest = [
    '고애신',
    '유진초이',
    '김희성',
    '쿠도히나',
    '구동매',
    '임관수',
    '카일',
    '도미',
  ];

  return (
    <div css={dateContainerStyles}>
      <div>
        <div>초대 정보</div>
        <div>
          <Input
            variant="default"
            textarea
            placeholder="방문하시는 분이 장소를 쉽게 찾을 수 있게 팁을 알려주세요."
          />
        </div>
      </div>
      <div css={invitationListContainerStyles}>
        초대 목록
        <div css={invitationListStyles}>
          <Add isBlue onClick={() => alert('인원 초대 테스트')} />
          {nameTagTest.map((name) => (
            <NameTag
              key={name}
              name={name}
              onClick={() => alert('삭제 기능 추가 예정')}
            />
          ))}
        </div>
      </div>
      <Button content="초대장 보내기" variant="blue" />
    </div>
  );
}

const dateContainerStyles = css``;

const invitationListContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const invitationListStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
`;

export default InvitationDate;
