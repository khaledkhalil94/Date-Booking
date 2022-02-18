import React from 'react';
import useStore from 'core/store';
import {Box, Grid} from '@mui/material';
import Loader from '../components/Loader';
import TimeSlotContainer from '../components/TimeSlotsContainer';
import {ICompanyId, ITimeSlot} from '../types';
import CompanyName from '../components/CompanyTitle';
import {setCompanyTimeSlot} from '../core/services';
import ReservationCard from '../components/ReservationCard';

function MainPage() {
  const {isLoading, companies, reservations} = useStore(state => ({
    isLoading: state.isLoading,
    reservations: state.reservations,
    companies: state.companies,
  }));

  const handleConfirmation = (companyId: ICompanyId, timeSlot?: ITimeSlot) => {
    setCompanyTimeSlot(companyId, timeSlot);
  };

  if (isLoading) {
    return <Loader size={40} width="100%" height="100%" />;
  }

  return (
    <div>
      <Grid container justifyContent="center" spacing={12}>
        {companies.map(company => (
          <Grid key={company.id} item>
            <CompanyName name={company.name} />
            <Box pt={3} pb={10}>
              <ReservationCard
                timeSlot={reservations[company.id]}
                onCancel={() => handleConfirmation(company.id)}
              />
            </Box>
            <TimeSlotContainer
              companyId={company.id}
              timeSlotsByDay={company.timeSlots}
              onConfirm={timeSlot => handleConfirmation(company.id, timeSlot)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default MainPage;
