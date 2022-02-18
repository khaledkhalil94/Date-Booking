import React from 'react';
import {Typography} from '@mui/material';
import {TimeSlotProps} from './index.types';
import Confirmation from '../ActionButton';
import Item from './index.styles';
import {parseDateString} from '../../utils';

function TimeSlot(props: TimeSlotProps) {
  const {timeSlot, onConfirm, disabled, reserved} = props;

  return (
    <Item elevation={3} disabled={disabled} reserved={reserved}>
      {!disabled && timeSlot && (
        <Confirmation onClick={onConfirm} text={reserved ? 'Cancel' : 'Confirm'} error={reserved} />
      )}
      {timeSlot && (
        <Typography variant="h6">
          {parseDateString(timeSlot[0])} - {parseDateString(timeSlot[1])}
        </Typography>
      )}
    </Item>
  );
}

export default TimeSlot;
