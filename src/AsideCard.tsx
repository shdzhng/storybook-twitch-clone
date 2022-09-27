import React from 'react';
import './AsideCard.styles.css';

export interface AsideCardProps {
  channelName: string;
  streamName: string;
  gameTitle: string;
  viewerCount: number;
  imgSrc: string;
}

export const AsideCard: React.FC<AsideCardProps> = ({
  channelName = 'Default Name',
  gameTitle = 'Default Title',
  streamName = 'Default Stream Name',
  imgSrc = 'https://cdn.pixabay.com/photo/2022/08/26/13/15/man-7412527_960_720.png',
  viewerCount = 2000,
}) => {
  const formatViewCount = (count: number): string => {
    return (count / 1000).toFixed(1) + 'k';
  };

  return (
    <div className="w-60 bg-g2 px-4 py-2  hover:bg-g1 relative cursor-pointer">
      <div className="flex justify-between">
        <div className="flex  m-h-6">
          <img
            className="w-8 rounded-3xl"
            src={imgSrc}
            alt={`${channelName}`}
          />
          <div className="ml-2 hover-trigger">
            <p className="text-sm font-semibold whitespace-nowrap overflow-hidden truncate w-32">
              {channelName}
            </p>
            <p className="text-xs text-g3  whitespace-nowrap overflow-hidden truncate w-36 ">
              {gameTitle}
            </p>
            <div className="hover-target absolute -right-40 top-0 bg-r  w-36 rounded-lg ">
              <p className="text-sm  m-h-6 p-2 leading-4 overflow-hidden ">
                {streamName}
              </p>
            </div>
          </div>
        </div>

        <div className="flex">
          <span className="bg-r p-1 mt-0.5 mx-0.5 rounded-full w-1 h-1 " />
          <p className="text-xs w-full overflow-hidden truncate whitespace-nowrap">
            {formatViewCount(viewerCount)}
          </p>
        </div>
      </div>
    </div>
  );
};
