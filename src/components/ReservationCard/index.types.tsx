import {ITimeSlot} from '../../types';

export interface ReservationCardProps {
  /**
   * This is the main time slot range that will be displayed on the item
   */
  timeSlot?: ITimeSlot;
  /**
   * callback handler fired on confirming the timeslot
   * @param timeSlot: the selected time slot
   */
  onCancel: () => void;
}
