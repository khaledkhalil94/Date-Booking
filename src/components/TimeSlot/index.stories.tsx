import {ComponentMeta, ComponentStory} from '@storybook/react';
import TimeSlot from './';

export default {
  title: 'Components/Time Slot',
  component: TimeSlot,
} as ComponentMeta<typeof TimeSlot>;

const Template: ComponentStory<typeof TimeSlot> = TimeSlot;

export const Default = Template.bind({});
Default.args = {
  timeSlot: {
    startTime: '1/1/2020',
    endTime: '1/1/2020',
  },
  disabled: false,
};

export const DisabledSlot = Template.bind({});
DisabledSlot.args = {
  timeSlot: {
    startTime: '1/1/2020',
    endTime: '1/1/2020',
  },
  disabled: true,
};

export const ReservedSlot = Template.bind({});
ReservedSlot.args = {
  timeSlot: {
    startTime: '1/1/2020',
    endTime: '1/1/2020',
  },
  reserved: true,
};
