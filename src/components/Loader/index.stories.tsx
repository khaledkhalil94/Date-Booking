import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import Loader from './';

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = Loader;

export const Default = Template.bind({});
Default.args = {};
