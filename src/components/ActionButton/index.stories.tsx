import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import ActionButton from './';
import {styled} from '@mui/material';

export default {
  title: 'Components/Action Button',
  component: ActionButton,
} as ComponentMeta<typeof ActionButton>;

const StyleWrapper = styled('div')(() => ({
  '& .action': {
    opacity: 1,
    visibility: 'visible',
  },
}));

const Template: ComponentStory<typeof ActionButton> = args => {
  return (
    <StyleWrapper>
      <ActionButton {...args} />
    </StyleWrapper>
  );
};

export const ConfirmationAction = Template.bind({});
ConfirmationAction.args = {
  text: 'Confirm',
};

export const CancellationAction = Template.bind({});
CancellationAction.args = {
  text: 'Cancel',
  error: true,
};
