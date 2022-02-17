import {IRawCompanyData} from '../core/api/types';
import {ICompany, ITimeSlot, ITimeSlotsByDay} from '../types';
import {format, getDayOfYear, setDayOfYear} from 'date-fns';

export const parseDateString = (date: string): string => {
  if (Number.isNaN(Date.parse(date))) {
    throw new Error('Date is not valid.');
  }
  return format(new Date(date), 'HH:mm');
};

export const transformRawData = (rawData: IRawCompanyData): ICompany => {
  return {
    ...rawData,
    timeSlots: rawData.time_slots.map(timeSlot => ({
      startTime: timeSlot.start_time,
      endTime: timeSlot.end_time,
    })),
  };
};

export const sortTimeSlots = (timeSlots: ITimeSlot[]) => {
  return timeSlots.sort(
    (leftDate, rightDate) =>
      new Date(leftDate.startTime).getTime() - new Date(rightDate.startTime).getTime(),
  );
};

export const getDayName = (dayIndex: number) => {
  return format(setDayOfYear(new Date(), dayIndex), 'E');
};

export const groupTimeSlotsByDay = (timeSlots: ITimeSlot[]): ITimeSlotsByDay => {
  return timeSlots.reduce<ITimeSlotsByDay>((result, timeSlot) => {
    const yearDay = getDayOfYear(new Date(timeSlot.startTime));
    result[yearDay] = result[yearDay] || [];
    result[yearDay].push(timeSlot);
    return result;
  }, {});
};
