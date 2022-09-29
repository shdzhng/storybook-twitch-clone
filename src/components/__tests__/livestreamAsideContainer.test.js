import { render, screen, cleanup, fireEvent } from '@testing-library/react';
import { LivestreamAsideContainer } from '../LivestreamAsideContainer';

test('should render todo component', () => {
  render(
    <LivestreamAsideContainer
      streamRecommendations={[
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
      ]}
      followRecommendations={[
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
        {
          channelName: 'Channel Name',
          gameTitle: 'Game Title',
          imgSrc:
            'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
          shrunk: false,
          streamName: 'Stream Title',
          streamURL: 'https://shdzhng.dev',
          viewerCount: 2958,
        },
      ]}
    />
  );

  const containerElement = screen.getByTestId('livestream-aside-container');
  const cardElement = screen.getAllByTestId('livestream-aside-card');
  expect(containerElement).toBeInTheDocument();
  expect(containerElement).toHaveTextContent(
    "STREAM TITLE'S VIEWERS ALSO WATCH"
  );
  fireEvent.click(screen.getByTestId('livestream-aside-container-show-btn'));
  expect(cardElement.length).toBe(9);
});
