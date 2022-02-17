import {ComponentMeta, ComponentStory} from '@storybook/react';
import CompanyName from './';

export default {
  title: 'Components/Company Name',
  component: CompanyName,
} as ComponentMeta<typeof CompanyName>;

const Template: ComponentStory<typeof CompanyName> = CompanyName;

export const Default = Template.bind({});
Default.args = {
  name: 'Company 1',
};
