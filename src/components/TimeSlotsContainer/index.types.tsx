import {ICompanyId, ITimeSlot, ITimeSlotsByDay} from '../../types';

export interface TimeSlotsContainerProps {
  companyId: ICompanyId;
  timeSlotsByDay: ITimeSlotsByDay;
  onConfirm: (timeSlot?: ITimeSlot) => void;
}
