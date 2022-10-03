import {
  SearchAutocomplete,
  SearchAutocompleteProps,
} from '../components/SearchAutocomplete';
import { Story, Meta } from '@storybook/react/types-6-0';

const defaultData = {
  channelOptions: [
    {
      value: 'string',
      thumbnail: 'string',
      url: 'string',
    },
  ],
  gameOptions: [
    {
      value: 'string',
      thumbnail: 'string',
      url: 'string',
    },
  ],
  popularOptions: [
    {
      value: 'string',
    },
  ],
};

export default {
  title: 'Atoms/SearchAutocomplete',
  component: SearchAutocomplete,
  argTyes: {
    channelOptions: {
      control: false,
    },
    gameOptions: {
      control: false,
    },
    popularOptions: {
      control: false,
    },
  },
} as Meta;

const Template: Story<SearchAutocompleteProps> = (args) => {
  return (
    <div className="w-1/3 bg-red-500">
      <SearchAutocomplete {...args} />
    </div>
  );
};

export const DefaultSearchAutocomplete = Template.bind({});
DefaultSearchAutocomplete.args = { ...defaultData };
