import { LoadingOverlay } from '@mantine/core';
import { customLoader } from './style';



export function Loading() {
  return <LoadingOverlay loader={customLoader} visible />;
}