import React from 'react';
import './LivestreamAsideCard.styles.css';

export interface LivestreamAsideCardProps {
  channelName: string;
  streamName: string;
  streamURL: string;
  gameTitle: string;
  viewerCount: number;
  imgSrc: string;
  shrunk: boolean;
}

export const LivestreamAsideCard: React.FC<LivestreamAsideCardProps> = ({
  channelName,
  gameTitle,
  streamName,
  streamURL,
  imgSrc,
  viewerCount,
  shrunk,
}) => {
  const formatViewCount = (count: number): string => {
    return (count / 1000).toFixed(1) + 'k';
  };

  return (
    <div
      className={`${
        shrunk ? 'w-16' : 'w-60'
      } bg-g2 px-4 py-2  hover:bg-g1 relative cursor-pointer transition-width ease-in-out duration-300`}
    >
      <a href={streamURL} rel="noreferrer" target="_blank">
        <div className="flex justify-between  max-h-8">
          <div className="flex group max-h-8">
            <img
              className="w-8 rounded-3xl"
              src={imgSrc}
              alt={`${channelName}`}
            />

            <div className="ml-4  w-full">
              <p
                className={`text-sm ${
                  shrunk ? 'opacity-0' : 'opacity-100'
                } font-semibold whitespace-nowrap overflow-hidden truncate w-32 transition-opacity ease-in-out duration-100`}
              >
                {channelName}
              </p>
              <p
                className={`text-xs ${
                  shrunk ? 'opacity-0' : 'opacity-100'
                } text-g3 whitespace-nowrap overflow-hidden truncate w-36 transition-opacity ease-in-out duration-100`}
              >
                {gameTitle}
              </p>

              <div className="absolute opacity-0 group-hover:opacity-100 group-focus:opacity-1 -right-40 top-0 bg-w  w-36 rounded-lg shadow-xl transition-opacity ease-in-out delay-200 p-2 duration-300 hover:opacity-0">
                <p
                  className={`text-xs  leading-5  ${
                    shrunk ? 'max-h-30 clamp-4' : 'max-h-12 clamp-2'
                  }`}
                >
                  {streamName}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`flex ${
              shrunk ? 'opacity-0' : 'opacity-100'
            } transition-opacity ease-in-out duration-100`}
          >
            <span className="bg-r p-1 mt-0.5 mx-0.5 rounded-full w-1 h-1 " />
            <p className="text-xs w-full overflow-hidden truncate whitespace-nowrap">
              {formatViewCount(viewerCount)}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
