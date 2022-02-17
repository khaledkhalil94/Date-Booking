import {styled} from '@mui/material';

export default styled('div')({
  visibility: 'hidden',
  opacity: 0,
  transition: 'visibility 0s, opacity 350ms ease',
  position: 'absolute',
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});
