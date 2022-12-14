import React, { useState } from 'react';
import { LivestreamAsideCard } from './LivestreamAsideCard';

export interface LivestreamAsideContainerProps {
  followRecommendations: {
    channelName: string;
    streamName: string;
    streamURL: string;
    gameTitle: string;
    viewerCount: number;
    imgSrc: string;
  }[];
  streamRecommendations?: {
    channelName: string;
    streamName: string;
    streamURL: string;
    gameTitle: string;
    viewerCount: number;
    imgSrc: string;
  }[];
}
const MAX_FOLLOW_RECOMMENDATION = 10;
const MAX_LIVE_RECOMMENDATION = 6;
const DEFAULT_LIVE_RECOMMENDATION = 3;

const LivestreamAsideContainer: React.FC<LivestreamAsideContainerProps> = ({
  followRecommendations,
  streamRecommendations,
}) => {
  const [shrunk, setShrunk] = useState(false);
  const [streamRecommendationsCount, setstreamRecommendationsCount] = useState(
    DEFAULT_LIVE_RECOMMENDATION
  );
  const handleToggleLiveRecommendation = () => {
    const newCount =
      streamRecommendationsCount === DEFAULT_LIVE_RECOMMENDATION
        ? MAX_LIVE_RECOMMENDATION
        : DEFAULT_LIVE_RECOMMENDATION;

    setstreamRecommendationsCount(newCount);
  };

  return (
    <div
      data-testid="livestream-aside-container"
      className={`${
        shrunk ? 'w-16  ' : 'w-72 '
      } bg-g2 dark:bg-g relative pt-4 transition-width ease-in-out duration-300 h-screen flex-col`}
    >
      <div
        className={`${
          shrunk ? 'flex-col' : 'flex justify-between'
        } cursor-pointer px-4 w-full h-4 dark:text-w`}
      >
        <p
          className={`${
            shrunk ? 'hidden' : 'block'
          } overflow-hidden text-xs whitespace-nowrap font-bold my-auto`}
        >
          RECOMMENDED CHANNELS
        </p>

        <svg
          className={`w-6 my-auto fill-current hover:bg-gray-200 dark:hover:bg-g3 p-1 rounded ${
            shrunk ? 'mx-auto' : null
          }`}
          viewBox="0 0 20 20"
          onClick={() => `${shrunk ? setShrunk(false) : setShrunk(true)}`}
        >
          <g>
            {shrunk ? (
              <path d="M4 16V4H2v12h2zM13 15l-1.5-1.5L14 11H6V9h8l-2.5-2.5L13 5l5 5-5 5z" />
            ) : (
              <path d="M16 16V4h2v12h-2zM6 9l2.501-2.5-1.5-1.5-5 5 5 5 1.5-1.5-2.5-2.5h8V9H6z" />
            )}
          </g>
        </svg>

        <svg
          className={`${
            shrunk ? 'block mt-4' : 'hidden'
          }  fill-current w-5 mx-auto`}
          viewBox="0 0 20 20"
        >
          <g>
            <path d="M12.002 3.999a2 2 0 012 2v2L18 6v8l-3.998-2v2a2 2 0 01-2 1.999h-8a2 2 0 01-2-2V6a2 2 0 012-2h8zM12 6H4v8h8V6z"></path>
          </g>
        </svg>
      </div>

      <div className="mt-2">
        {followRecommendations
          .slice(0, MAX_FOLLOW_RECOMMENDATION)
          .map((data, i) => (
            <LivestreamAsideCard key={i} {...data} shrunk={shrunk} />
          ))}
      </div>

      {streamRecommendations ? (
        <div className="my-4">
          <p
            className={`${
              shrunk ? 'hidden' : 'block'
            } overflow-hidden px-4 text-xs whitespace-nowrap font-bold my-auto dark:text-w`}
          >
            {`${streamRecommendations[0].streamName.toUpperCase()}'S VIEWERS ALSO WATCH`}
          </p>

          <svg
            className={`${
              shrunk ? 'block my-4' : 'hidden'
            } dark:text-w fill-current w-5 mx-auto `}
            viewBox="0 0 20 20"
          >
            <g>
              <path d="M12.002 3.999a2 2 0 012 2v2L18 6v8l-3.998-2v2a2 2 0 01-2 1.999h-8a2 2 0 01-2-2V6a2 2 0 012-2h8zM12 6H4v8h8V6z"></path>
            </g>
          </svg>

          {streamRecommendations
            .slice(0, streamRecommendationsCount)
            .map((data, i) => (
              <LivestreamAsideCard key={i} {...data} shrunk={shrunk} />
            ))}

          <button
            data-testid="livestream-aside-container-show-btn"
            className={`hover:underline decoration-solid  text-lp text-xs px-4 hover:text-dp focus:outline-none ${
              shrunk ? 'hidden' : ''
            }`}
            onClick={() => {
              handleToggleLiveRecommendation();
            }}
          >
            {streamRecommendations.length > streamRecommendationsCount
              ? 'Show more'
              : streamRecommendations.length < streamRecommendationsCount
              ? 'Show less'
              : null}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export { LivestreamAsideContainer };
