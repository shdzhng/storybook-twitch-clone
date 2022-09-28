import {
  LivestreamAsideCard,
  LivestreamAsideCardProps,
} from '../components/LivestreamAsideCard';
import { Story, Meta } from '@storybook/react/types-6-0';

export default {
  title: 'Aside/Card',
  component: LivestreamAsideCard,
  argTypes: {
    channelName: { defaultValue: 'Channel Name' },
    gameTitle: { defaultValue: 'Game Title' },
    viewerCount: { defaultValue: 2958 },
    streamName: { defaultValue: 'Stream Title' },
    shrunk: { defaultValue: 'false' },
    steamURL: {
      defaultValue: 'https://shdzhng.dev',
    },
    imgSrc: {
      defaultValue:
        'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
    },
  },
} as Meta;

const Template: Story<LivestreamAsideCardProps> = (args) => (
  <LivestreamAsideCard {...args} />
);

export const DefaultCard = Template.bind({});