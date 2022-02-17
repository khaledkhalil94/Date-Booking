import React from 'react';
import {Typography} from '@mui/material';
import {ReservationCardProps} from './index.types';
import Confirmation from '../ActionButton/';
import Item from './index.styles';
import {parseDateString} from '../../utils';

function ReservationCard(props: ReservationCardProps) {
  const {timeSlot, onCancel} = props;

  return (
    <Item elevation={3}>
      <Typography variant="h6">Reservation</Typography>
      {timeSlot && <Confirmation onClick={() => onCancel()} error text="Cancel" />}
      {timeSlot && (
        <Typography variant="subtitle2">
          {parseDateString(timeSlot.startTime)} - {parseDateString(timeSlot.endTime)}
        </Typography>
      )}
    </Item>
  );
}

export default ReservationCard;
