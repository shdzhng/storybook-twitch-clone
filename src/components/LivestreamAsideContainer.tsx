import React, { useState } from 'react';
import { LivestreamAsideCard } from './LivestreamAsideCard';

export interface LivestreamAsideContainerProps {
  dataset: {
    channelName: string;
    streamName: string;
    streamURL: string;
    gameTitle: string;
    viewerCount: number;
    imgSrc: string;
    shrunk: boolean;
  }[];
}

const LivestreamAsideContainer: React.FC<LivestreamAsideContainerProps> = ({
  dataset,
}) => {
        const [shrunk, setShrunk] = useState(false);

        return (
          <div
            className={`${
              shrunk ? 'w-16  ' : 'w-60 '
            } bg-g2 px-4 py-4 relative  transition-width ease-in-out duration-300 h-screen flex-col`}
          >
            <div
              className={`${
                shrunk ? 'flex-col' : 'flex justify-between'
              } cursor-pointer  w-full h-14`}
            >
              <p
                className={`${
                  shrunk ? 'hidden' : 'block'
                } overflow-hidden text-xs whitespace-nowrap font-bold my-auto`}
              >
                RECOMMENDED CHANNELS
              </p>

              <svg
                className="w-5 mx-auto my-auto"
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
                className={`${shrunk ? 'block mt-4' : 'hidden'} w-5 mx-auto`}
                viewBox="0 0 20 20"
              >
                <g>
                  <path d="M12.002 3.999a2 2 0 012 2v2L18 6v8l-3.998-2v2a2 2 0 01-2 1.999h-8a2 2 0 01-2-2V6a2 2 0 012-2h8zM12 6H4v8h8V6z"></path>
                </g>
              </svg>
            </div>

            <div className="mt-2">
              {dataset.map((data, i) => (
                <LivestreamAsideCard key={i} {...data} shrunk={shrunk} />
              ))}
            </div>
          </div>
        );
      };

export { LivestreamAsideContainer };
