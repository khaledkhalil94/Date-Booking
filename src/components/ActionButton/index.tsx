import React from 'react';
import {Button} from '@mui/material';
import Item from './index.styles';
import {ActionOverlayProps} from './index.types';

function ActionButton(props: ActionOverlayProps) {
  const {onClick, text, error} = props;

  return (
    <Item className="action">
      <Button
        onClick={() => onClick?.()}
        variant="outlined"
        size="small"
        color={error ? 'error' : undefined}
      >
        {text}
      </Button>
    </Item>
  );
}

export default ActionButton;
