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
    darkMode: {
      defaultValue: false,
      description:
        'A boolean that determines if the container should use dark mode',
      control: 'boolean',
    },
    followRecommendations: {
      defaultValue: [defaultData, defaultData, defaultData, defaultData],
      control: false,
    },
    streamRecommendations: {
      defaultValue: [defaultData, defaultData, defaultData, defaultData],
      control: false,
    },
  },
} as Meta;

interface LivestreamAsideContainerTemplateProps extends LivestreamAsideContainerProps {
  darkMode: boolean
}

const Template: Story<LivestreamAsideContainerTemplateProps> = ({
  followRecommendations,
  streamRecommendations,
  darkMode,
}) => {
  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <LivestreamAsideContainer
        followRecommendations={followRecommendations}
        streamRecommendations={streamRecommendations}
      />
    </div>
  );
};
;

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
