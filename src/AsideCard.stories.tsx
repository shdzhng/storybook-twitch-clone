import { AsideCard, AsideCardProps } from './AsideCard';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Aside/Card',
  component: AsideCard,
  argTypes: {
    channelName: { defaultValue: 'Default Name' },
    gameTitle: { defaultValue: 'Default Title' },
    viewerCount: { defaultValue: 2958 },
    imgSrc: {
      defaultValue:
        'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
    },
  },
} as Meta;

const Template: Story<AsideCardProps> = (args) => <AsideCard {...args} />;

export const Default = Template.bind({});
