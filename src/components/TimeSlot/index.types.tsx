import {ITimeSlot} from '../../types';

export interface TimeSlotProps {
  /**
   * This is the main time slot range that will be displayed on the item
   */
  timeSlot?: ITimeSlot;
  /**
   * Item will not be selectable or clickable if true
   * @default: false
   */
  disabled?: boolean;
  /**
   * Item will display reserved effect and cancel action if true
   * @default: false
   */
  reserved?: boolean;
  /**
   * callback handler fired on confirming the timeslot
   */
  onConfirm?: () => void;
}
