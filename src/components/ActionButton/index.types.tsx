export interface ActionOverlayProps {
  /**
   * callback handler fired on confirming the timeslot
   * @param timeSlot: the selected time slot
   */
  onClick?: () => void;
  /**
   * Button text
   */
  text: string;
  /**
   * Displays button in error state if true
   */
  error?: boolean;
}
