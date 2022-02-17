import {ComponentMeta, ComponentStory} from '@storybook/react';
import TimeSlot from './';

export default {
  title: 'Components/Reservation Card',
  component: TimeSlot,
} as ComponentMeta<typeof TimeSlot>;

const Template: ComponentStory<typeof TimeSlot> = TimeSlot;

export const Default = Template.bind({});
Default.args = {
  timeSlot: {
    startTime: '1/1/2020',
    endTime: '1/1/2020',
  },
};

export const ReservationSlot = Template.bind({});
ReservationSlot.args = {
  timeSlot: {
    startTime: '1/1/2020',
    endTime: '1/1/2020',
  },
};
