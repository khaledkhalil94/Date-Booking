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
      ['1', '2'],
      ['3', '4'],
      ['5', '6'],
      ['7', '8'],
      ['9', '10'],
    ],
    Tue: [
      ['1', '2'],
      ['3', '4'],
      ['5', '6'],
      ['7', '8'],
      ['9', '10'],
    ],
  },
};
