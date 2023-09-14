import { css } from '@emotion/react';
import NameTag from '@/components/common/NameTag';
import Add from '@/components/common/Add';
import mq from '@/utils/mediaquery';
import theme from '@/styles/theme';
import CREATE_TEXTS from '@/constants/invitation/createTexts';
import {
  InvitationNameListProps,
  InvitationCreateTexts,
} from '@/types/invitation/create';

function InvitationNameList({ nameList }: InvitationNameListProps) {
  const { title }: InvitationCreateTexts = CREATE_TEXTS;

  return (
    <div css={listContainerStyles}>
      <div css={titleWrapperStyles}>
        <div className="title">{title.invitationList}</div>
        <div className="length">{nameList.length}/30</div>
      </div>
      <div css={listWrapperStyles}>
        <Add isBlue onClick={() => alert('추가 버튼 테스트')} />
        {nameList.map((name) => (
          <NameTag
            key={name}
            name={name}
            onClick={() => alert('삭제 기능 추가 예정')}
          />
        ))}
      </div>
    </div>
  );
}

const listContainerStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 280px;

  ${mq.md} {
    max-width: 360px;
  }
  ${mq.lg} {
    max-width: 480px;
  }
  ${mq.tab} {
    max-width: 640px;
  }
`;

const titleWrapperStyles = css`
  display: flex;
  justify-content: space-between;

  .title {
    font: ${theme.font.subTitle.subTitle1_600};
    color: ${theme.palette.title};
    line-height: 25px;
  }
  .length {
    font: ${theme.font.body.body1_400};
    color: ${theme.palette.greyscale.grey40};
    line-height: 24px;
  }
`;

const listWrapperStyles = css`
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
  width: 100%;
`;

export default InvitationNameList;
