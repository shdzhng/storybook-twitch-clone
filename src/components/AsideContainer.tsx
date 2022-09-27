import React, { useState } from 'react';
import { AsideCard } from './AsideCard';

export interface AsideContainerProps {
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

const AsideContainer: React.FC<AsideContainerProps> = ({ dataset }) => {
  const [shrunk, setShrunk] = useState(false);
  return (
    <div>
      <div
        className={`${
          shrunk ? 'w-16 overflow-hidden' : 'w-60'
        } bg-g2 px-4 py-2  hover:bg-g1 relative cursor-pointer transition-width ease-in-out duration-300 flex justify-between`}
      >
        <p
          className={`${
            shrunk ? 'hidden' : 'block'
          } overflow-hidden text-xs whitespace-nowrap font-bold`}
        >
          RECOMMENDED CHANNELS
        </p>

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
        <AsideCard key={i} {...data} shrunk={shrunk} />
      ))}
    </div>
  );
};

export { AsideContainer };
