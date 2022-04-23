import { LoadingOverlay } from '@mantine/core';
import { customLoader } from './style';



export const Loading: React.FC = () => {
  return <LoadingOverlay loader={customLoader} visible />;
}