import {Paper, styled} from '@mui/material';

export default styled(Paper)(({theme}) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  paddingTop: 5,
  paddingBottom: 5,
  position: 'relative',
  margin: 'auto',
  width: 200,
}));
