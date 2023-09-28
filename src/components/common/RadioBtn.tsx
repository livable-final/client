import { css } from '@emotion/react';
import { useState } from 'react';
import { CheckOn, UnCheck } from '@/assets/icons';

function RadioBtn({ list, place, etcPlace, onChangeInput, onChangeRadio }) {
  console.log('라디오버튼 프롭 확인', list);

  const [isCheck, setIsCheck] = useState(false);

  // 출력할 장소 데이터에 common 유무 체크
  const isCommonData = (item) => {
    const key = Object.keys(item)[0];
    if (key.includes('common')) {
      return true;
    }
    return false;
  };

  return (
    <div css={containerStyles}>
      {list.map((item) => {
        return (
          <div
            key={isCommonData(item) ? item.commonPlaceName : item.officeName}
            css={listStyles}
          >
            <label css={labelStyles}>
              <input
                type="radio"
                value={place}
                css={defaultRadioStyles}
                onChange={onChangeRadio}
              />
              <div css={iconWrapperStyles}>
                {isCheck ? <CheckOn /> : <UnCheck />}
              </div>
              <div css={listContentStyles}>
                {isCommonData(item) ? item.commonPlaceName : item.officeName}
              </div>
            </label>
          </div>
        );
      })}
      {/* 직접 입력 */}
      <div css={listStyles}>
        <label css={labelStyles}>
          <input
            type="radio"
            value={place}
            checked={isCheck}
            css={defaultRadioStyles}
            onChange={onChangeRadio}
          />
          <div css={iconWrapperStyles}>
            {isCheck ? (
              <div css={icon}>
                <CheckOn />
              </div>
            ) : (
              <div css={icon}>
                <UnCheck />
              </div>
            )}
          </div>
          <div css={listContentStyles}>
            <div>기타 (직접입력)</div>
            <input
              type="text"
              placeholder="초대장소 입력"
              value={etcPlace}
              onChange={onChangeInput}
            />
          </div>
        </label>
      </div>
    </div>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;

  gap: 20px;
`;

const listStyles = css`
  display: flex;
  gap: 8px;
  border: 1px solid blue;
`;

const labelStyles = css`
  display: flex;
  gap: 8px;
`;

const defaultRadioStyles = css`
  display: none;
`;

const iconWrapperStyles = css`
  display: flex;
  justify-content: center;
  max-width: 20px;
  max-height: 20px;
`;

const icon = css`
  width: 20px;
  height: 20px;
`;

const listContentStyles = css`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  border: 1px solid pink;
`;

export default RadioBtn;
