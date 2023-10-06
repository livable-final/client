import theme from '@/styles/theme';
import { BeatLoader } from 'react-spinners';

function Loading() {
  return <BeatLoader color={theme.palette.greyscale.grey10} size={12} />;
}

export default Loading;
