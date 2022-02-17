import {Paper, styled} from '@mui/material';

interface StyleProps {
  disabled?: boolean;
  reserved?: boolean;
}

export default styled(Paper)<StyleProps>(({theme, disabled, reserved}) => ({
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
  width: 175,
  height: 45,
  ...(reserved && {
    backgroundColor: '#00dd00',
  }),
  ...(disabled && {
    backgroundColor: 'grey',
    cursor: 'not-allowed',
  }),
  '&:hover .action': {
    opacity: 1,
    visibility: 'visible',
    backgroundColor: 'inherit',
  },
}));
