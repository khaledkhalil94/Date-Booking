export interface ITimeSlot {
  startTime: string;
  endTime: string;
  disabled?: boolean;
  reserved?: boolean;
}

export interface ITimeSlotsByDay {
  [day: string]: ITimeSlot[];
}

export type ICompanyId = number;

export interface ICompany {
  id: ICompanyId;
  name: string;
  type: string;
  timeSlots: ITimeSlot[];
}

export interface IReservations {
  [companyId: ICompanyId]: ITimeSlot | undefined;
}
