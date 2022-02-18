export type ITimeSlot = [string, string];

export interface ITimeSlotsByDay {
  [day: string]: ITimeSlot[];
}

export type ICompanyId = number;

export interface ICompany {
  id: ICompanyId;
  name: string;
  type: string;
  timeSlots: ITimeSlotsByDay;
}

export interface IReservations {
  [companyId: ICompanyId]: ITimeSlot | undefined;
}
