import React, { useState } from 'react';
import { AsideCard } from './AsideCard';

export interface AsideContainerProps {
  shrunkSetting: boolean;
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
      <div>
        <p>RECOMMENDED CHANNELS</p>
        <button
          onClick={() => {
            setShrunk((prev) => !prev);
          }}
          style={{ color: `${shrunk ? 'red' : 'blue'}` }}
        >
          shrink
        </button>
      </div>

      {dataset.map((data, i) => (
        <AsideCard key={i} {...data} />
      ))}
    </div>
  );
};

export { AsideContainer };
