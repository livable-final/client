import { GetMenusData } from '@/types/lunch/api';

export interface Roulette {
  menuId: number;
  menuName: string;
  category: GetMenusData;
}

export interface RouletteStore {
  rouletteState: Roulette;
  setRouletteState: (item: Roulette) => void;
}

export interface RoulettePushProps {
  isPressed: boolean;
  isAgain: boolean;
  onClick: () => void;
}

export interface RouletteLockProps {
  isLocked: boolean;
  isAgain: boolean;
  onClick: () => void;
}
