import { Story, Meta } from '@storybook/react/types-6-0';
import {
  LivestreamAsideContainer,
  LivestreamAsideContainerProps,
} from '../components/LivestreamAsideContainer';

const defaultData = {
  channelName: 'Channel Name',
  gameTitle: 'Game Title',
  shrunk: false,
  viewerCount: 2958,
  streamName: 'Stream Title',
  streamURL: 'https://shdzhng.dev',
  imgSrc:
    'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
};

export default {
  title: 'Aside/Container',
  component: LivestreamAsideContainer,
  argTypes: {
    dataset: {
      defaultValue: [defaultData, defaultData, defaultData],
    },
  },
} as Meta;

const Template: Story<LivestreamAsideContainerProps> = ({ dataset }) => (
  <LivestreamAsideContainer dataset={dataset} />
);

export const DefaultCardContainer = Template.bind({});
DefaultCardContainer.args = {
  dataset: [defaultData, defaultData, defaultData, defaultData],
};
