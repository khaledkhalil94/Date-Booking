import {getData} from '../api';
import store from '../store';
import {ICompanyId, ITimeSlot} from '../../types';
import {transformRawData} from '../../utils';

export const initializeData = async () => {
  const {setCompaniesData, setIsLoading} = store.getState();

  setIsLoading(true);
  try {
    const data = await getData();
    setCompaniesData(data.map(transformRawData));
  } catch (error) {
    console.error(error);
    throw Error('Something went wrong! Please try again in a while.');
  } finally {
    setIsLoading(false);
  }
};

export const setCompanyTimeSlot = (companyId: ICompanyId, timeSlot?: ITimeSlot) => {
  const {setReservations} = store.getState();

  setReservations(companyId, timeSlot);
};
