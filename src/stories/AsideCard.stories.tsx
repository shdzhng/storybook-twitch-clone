import {
  LivestreamAsideCard,
  LivestreamAsideCardProps,
} from '../components/LivestreamAsideCard';
import { Story, Meta } from '@storybook/react/types-6-0';


const defaultData = {
  channelName: 'Channel Name',
  gameTitle: 'Game Title',
  viewerCount: 2958,
  streamName: 'Stream Title',
  streamURL: 'https://shdzhng.dev',
  imgSrc:
    'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
};

export default {
  title: 'Atoms/StreamAsideCard',
  component: LivestreamAsideCard,
  argTypes: {
    channelName: { defaultValue: 'Channel Name' },
    gameTitle: { defaultValue: 'Game Title' },
    viewerCount: { defaultValue: 2958 },
    streamName: { defaultValue: 'Stream Title' },
    streamURL: {
      control: false,
    },
    shrunk: {
      description:
        'A boolean that determines if the small or large variant of the card should be rendered',
    },
    imgSrc: {
      defaultValue:
        'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
    },
  },
} as Meta;

const Template: Story<LivestreamAsideCardProps> = (args) => {
  return (
    <div
      className={`px-4 py-4  bg-g2  ${
        args.shrunk === true ? 'w-20  ' : 'w-72 '
      }`}
    >
      <LivestreamAsideCard {...args} />
    </div>
  );
};
export const CollapsedStreamCard = Template.bind({});
CollapsedStreamCard.args = {
  ...defaultData,
  shrunk: true,
};

export const ExpandedStreamCard = Template.bind({});
ExpandedStreamCard.args = {
  ...defaultData,
  shrunk: false,
};


