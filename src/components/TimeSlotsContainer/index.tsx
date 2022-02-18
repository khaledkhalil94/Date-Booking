import React, {useCallback} from 'react';
import {Box, Typography} from '@mui/material';
import {TimeSlotsContainerProps} from './index.types';
import Item from './index.styles';
import TimeSlot from '../TimeSlot';
import {getDayName, isDateWithinRange} from '../../utils';
import useStore from '../../core/store';
import {ITimeSlot} from '../../types';

function TimeSlotContainer(props: TimeSlotsContainerProps) {
  const {timeSlotsByDay, onConfirm, companyId} = props;
  const reservations = useStore(state => state.reservations);

  const isDisabled = useCallback(
    (timeSlot: ITimeSlot) => {
      return Object.values(reservations)
        .filter(Boolean)
        .some(reservation => isDateWithinRange(timeSlot, reservation));
    },
    [reservations],
  );

  const isReserved = useCallback(
    (timeSlot: ITimeSlot) => {
      const companyReservation = reservations[companyId];
      if (!companyReservation) {
        return false;
      }
      return (
        new Date(timeSlot[0]).getTime() === new Date(companyReservation[0]).getTime() &&
        new Date(timeSlot[1]).getTime() === new Date(companyReservation[1]).getTime()
      );
    },
    [companyId, reservations],
  );

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
                    onConfirm={() => onConfirm(isReserved(timeSlot) ? undefined : timeSlot)}
                    disabled={isDisabled(timeSlot) && !isReserved(timeSlot)}
                    reserved={isReserved(timeSlot)}
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
