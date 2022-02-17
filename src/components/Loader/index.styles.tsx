import {styled} from '@mui/material';
import {LoaderProps} from './index.types';

export default styled('div')<LoaderProps>(({width = '100%', height = '100%'}) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width,
  height,
}));
