import {ComponentMeta, ComponentStory} from '@storybook/react';
import TimeSlotContainer from './';

export default {
  title: 'Components/Time Slot Container',
  component: TimeSlotContainer,
} as ComponentMeta<typeof TimeSlotContainer>;

const Template: ComponentStory<typeof TimeSlotContainer> = TimeSlotContainer;

export const Default = Template.bind({});
Default.args = {
  timeSlotsByDay: {
    Mon: [
      {
        startTime: '1',
        endTime: '2',
      },
      {
        startTime: '3',
        endTime: '4',
      },
      {
        startTime: '5',
        endTime: '6',
      },
      {
        startTime: '7',
        endTime: '8',
      },
      {
        startTime: '9',
        endTime: '10',
      },
    ],
    Tue: [
      {
        startTime: '1',
        endTime: '2',
      },
      {
        startTime: '3',
        endTime: '4',
      },
      {
        startTime: '5',
        endTime: '6',
      },
      {
        startTime: '7',
        endTime: '8',
      },
      {
        startTime: '9',
        endTime: '10',
      },
    ],
  },
};
