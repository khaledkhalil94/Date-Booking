import {Paper, styled} from '@mui/material';

export default styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  color: theme.palette.text.secondary,
  paddingTop: 5,
  paddingBottom: 5,
  position: 'relative',
  margin: 'auto',
  width: 200,
  height: 65,
  '&:hover .action': {
    opacity: 1,
    visibility: 'visible',
  },
}));
