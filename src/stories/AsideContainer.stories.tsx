import { Story, Meta } from '@storybook/react/types-6-0';
import {
  AsideContainer,
  AsideContainerProps,
} from '../components/AsideContainer';
// import useState from 'storybook-addon-state';
import { useState } from 'react';
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
    },
  },
} as Meta;

const Template: Story<AsideContainerProps> = ({ dataset }) => (
  <AsideContainer dataset={dataset} />
);


export const ExpandedCardContainer = Template.bind({});
ExpandedCardContainer.args = {
  dataset: [expandedData, expandedData, expandedData, expandedData],
};
export const ShrunkedCardContainer = Template.bind({});
ShrunkedCardContainer.args = {
  dataset: [shrunkData, shrunkData, shrunkData, shrunkData],
};
