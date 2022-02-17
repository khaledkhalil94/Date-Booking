import create, {StateCreator} from 'zustand';
import {devtools} from 'zustand/middleware';
import {ICompany, ICompanyId, IReservations, ITimeSlot} from '../../types';

type State = {
  /**
   * Main property for companies data
   */
  companies: ICompany[];
  setCompaniesData: (companiesData: ICompany[]) => void;
  reservations: IReservations;
  setReservations: (companyId: ICompanyId, reservedSlot?: ITimeSlot) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
};

const initialValues: StateCreator<State> = (set, get) => ({
  companies: [],
  setCompaniesData: companiesData => {
    set({
      companies: companiesData,
    });
  },
  reservations: {},
  setReservations: (companyId, timeSlot) => {
    const currentReservations = get().reservations;
    set({
      reservations: {...currentReservations, [companyId]: timeSlot},
    });
  },
  isLoading: false,
  setIsLoading: isLoading => {
    set({
      isLoading,
    });
  },
});

export default create<State>(devtools(initialValues));
