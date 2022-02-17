import React from 'react';
import {Box, Typography} from '@mui/material';
import {TimeSlotsContainerProps} from './index.types';
import Item from './index.styles';
import TimeSlot from '../TimeSlot';
import {getDayName} from '../../utils';

function TimeSlotContainer(props: TimeSlotsContainerProps) {
  const {timeSlotsByDay, onConfirm} = props;

  return (
    <Item elevation={2}>
      {Object.entries(timeSlotsByDay).map(([day, timeSlots]) => {
        return (
          <Box key={day}>
            <Typography variant="h6">{getDayName(Number(day))}</Typography>
            <Box pb={5}>
              {timeSlots.map((timeSlot, index) => (
                <Box key={index} my={2}>
                  <TimeSlot
                    timeSlot={timeSlot}
                    onConfirm={onConfirm}
                    disabled={timeSlot.disabled}
                    reserved={timeSlot.reserved}
                  />
                </Box>
              ))}
            </Box>
          </Box>
        );
      })}
    </Item>
  );
}

export default TimeSlotContainer;
