import {IRawCompanyData} from '../core/api/types';
import {ICompany, ITimeSlotsByDay} from '../types';
import {format, getDayOfYear, isAfter, isBefore, setDayOfYear} from 'date-fns';

export const parseDateString = (date: string): string => {
  if (Number.isNaN(Date.parse(date))) {
    throw new Error('Date is not valid.');
  }
  return format(new Date(date), 'HH:mm');
};

export const transformRawData = (rawData: IRawCompanyData): ICompany => {
  return {
    ...rawData,
    timeSlots: rawData.time_slots
      .sort(
        (leftDate, rightDate) =>
          new Date(leftDate.start_time).getTime() - new Date(rightDate.start_time).getTime(),
      )
      .reduce<ITimeSlotsByDay>((result, timeSlot) => {
        const yearDay = getDayOfYear(new Date(timeSlot.start_time));
        result[yearDay] = result[yearDay] || [];
        result[yearDay].push([timeSlot.start_time, timeSlot.end_time]);
        return result;
      }, {}),
  };
};

export const getDayName = (dayIndex: number) => {
  return format(setDayOfYear(new Date(), dayIndex), 'E');
};

export const isDateWithinRange = (
  date: [string | number, string | number],
  range: [string | number, string | number],
) => {
  return (
    isAfter(new Date(range[1]), new Date(date[0])) &&
    isBefore(new Date(range[0]), new Date(date[1]))
  );
};
