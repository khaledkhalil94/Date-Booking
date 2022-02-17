import {ITimeSlot, ITimeSlotsByDay} from '../../types';

export interface TimeSlotsContainerProps {
  timeSlotsByDay: ITimeSlotsByDay;
  onConfirm: (timeSlot: ITimeSlot) => void;
}
