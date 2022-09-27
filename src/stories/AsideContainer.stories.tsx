import { Story, Meta } from '@storybook/react/types-6-0';
import {
  AsideContainer,
  AsideContainerProps,
} from '../components/AsideContainer';
import useState from 'storybook-addon-state';
import { AsideCard } from '../components/AsideCard';

const expandedData = {
  channelName: 'Default Name',
  gameTitle: 'Default Title',
  shrunk: false,
  viewerCount: 2958,
  streamName: 'Default Stream Title',
  streamURL: 'https://shdzhng.dev',
  imgSrc:
    'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
};

const shrunkData = {
  channelName: 'Default Name',
  gameTitle: 'Default Title',
  shrunk: true,
  viewerCount: 2958,
  streamName: 'Default Stream Title',
  streamURL: 'https://shdzhng.dev',
  imgSrc:
    'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
};

export default {
  title: 'Aside/Container',
  component: AsideContainer,
  argTypes: {
    dataset: {
      defaultValue: [expandedData, expandedData, expandedData],
      shrunkSetting: false,
    },
  },
} as Meta;

const Template: Story<AsideContainerProps> = ({ dataset, shrunkSetting }) => {
  const [shrunk, setShrunk] = useState<any>('clicks', shrunkSetting);

  return (
    <div>
      <div
        className={`${
          shrunk ? 'w-16 overflow-hidden' : 'w-60'
        } bg-g2 px-4 py-2  hover:bg-g1 relative cursor-pointer transition-width ease-in-out duration-300 flex justify-between`}
      >
        {shrunk ? null : (
          <p className="text-xs font-bold">RECOMMENDED CHANNELS</p>
        )}

        <svg
          className="w-4"
          version="1.1"
          viewBox="0 0 20 20"
          onClick={() => `${shrunk ? setShrunk(false) : setShrunk(true)}`}
        >
          <g>
            <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z"></path>
          </g>
        </svg>
      </div>
      {dataset.map((data, i) => (
        <AsideCard key={i} {...data} />
      ))}
    </div>
  );
};

export const ExpandedCardContainer = Template.bind({});
ExpandedCardContainer.args = {
  dataset: [expandedData, expandedData, expandedData, expandedData],
  shrunkSetting: false,
};
export const ShrunkedCardContainer = Template.bind({});
ShrunkedCardContainer.args = {
  dataset: [shrunkData, shrunkData, shrunkData, shrunkData],
  shrunkSetting: true,
};
