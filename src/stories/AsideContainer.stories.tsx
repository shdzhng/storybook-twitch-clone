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
  title: 'Molecules/LivestreamAside',
  component: LivestreamAsideContainer,
  argTypes: {
    followRecommendations: {
      defaultValue: [defaultData, defaultData, defaultData],
    },
  },
} as Meta;

const Template: Story<LivestreamAsideContainerProps> = ({
  followRecommendations,
  streamRecommendations,
}) => (
  <LivestreamAsideContainer
    followRecommendations={followRecommendations}
    streamRecommendations={streamRecommendations}
  />
);

export const DefaultLivestreamAside = Template.bind({});
DefaultLivestreamAside.args = {
  followRecommendations: [defaultData, defaultData, defaultData, defaultData],
};

export const ActiveLivestreamAside = Template.bind({});
ActiveLivestreamAside.args = {
  followRecommendations: [
    defaultData,
    defaultData,
    defaultData,
    defaultData,
    defaultData,
    defaultData,
  ],
  streamRecommendations: [
    defaultData,
    defaultData,
    defaultData,
    defaultData,
    defaultData,
  ],
};

;
