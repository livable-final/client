import LunchCard from '@/components/lunch/LunchCard';
import { HOME_TEXTS } from '@/constants/home/homeTexts';
import HomeCafeteriaToggle from '@/components/home/cafeteria/HomeCafeteriaToggle';
import { css } from '@emotion/react';
import theme from '@/styles/theme';
import { useCallback, useState } from 'react';

function HomeCafeteria() {
  const { cafeteria } = HOME_TEXTS;
  const [menuIdx, setMenuIdx] = useState(1);

  const onToggleHandler = useCallback((idx: number) => {
    setMenuIdx(idx);
  }, []);

  return (
    <LunchCard padding={16}>
      <div css={containerStyles}>
        <div css={wrapperStyles}>
          <span css={titleStyles}>{cafeteria.title}</span>
          <div css={togglesStyles}>
            {cafeteria.type.map((item, idx) => (
              <HomeCafeteriaToggle
                key={item}
                type={item}
                onToggle={() => onToggleHandler(idx)}
                isActive={menuIdx === idx}
              />
            ))}
          </div>
        </div>
        <div css={menusStyles}>{cafeteria.menu[menuIdx]}</div>
      </div>
    </LunchCard>
  );
}

const containerStyles = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`;

const wrapperStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`;

const titleStyles = css`
  font: ${theme.font.body.body2_500};
  color: ${theme.palette.title};
  line-height: 22px;
`;

const togglesStyles = css`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;
`;

const menusStyles = css`
  font: ${theme.font.body.body3_400};
  color: ${theme.palette.greyscale.grey70};
  line-height: 21px;
`;

export default HomeCafeteria;
