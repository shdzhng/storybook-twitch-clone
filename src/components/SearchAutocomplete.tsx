import React, { useState } from 'react';

export interface SearchAutocompleteProps {
  channelOptions: {
    value: string;
    thumbnail: string;
    url: string;
  }[];
  gameOptions: {
    value: string;
    thumbnail: string;
    url: string;
  }[];
  popularOptions: {
    value: string;
  }[];
}

const SearchAutocomplete: React.FC<SearchAutocompleteProps> = () => {
  const [searchValue, setSearchValue] = useState('');

  return (
    <form className="flex items-center w-full h-auto gap-0.5">
      <input
        className="w-10/12 bg-g0 h-8 placeholder-g3 text-sm rounded-tl-md rounded-bl-md p-2 outline-none hover:ring-r
focus:ring-2 focus:ring-lp transition-all duration-200"
        autoComplete="true"
        aria-label="Search Input"
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="search"
        placeholder="Search"
        autoCapitalize="off"
        autoCorrect="off"
        maxLength={150}
        spellCheck="false"
      />

      <div
        className={`flex justify-center w-1/12 rounded-tr-md rounded-br-md bg-g2 h-8 hover:bg-g0 `}
      >
        <button
          aria-label="Search Button"
          className={`${
            searchValue === '' && 'cursor-not-allowed'
          } outline-none`}
          type="submit"
        >
          <svg
            className="w-5"
            version="1.1"
            viewBox="0 0 20 20"
            x="0px"
            y="0px"
          >
            <g>
              <path
                fillRule="evenodd"
                d="M13.192 14.606a7 7 0 111.414-1.414l3.101 3.1-1.414 1.415-3.1-3.1zM14 9A5 5 0 114 9a5 5 0 0110 0z"
                clipRule="evenodd"
              ></path>
            </g>
          </svg>
        </button>
      </div>

      <datalist id="channel-infos" className="bg-yellow-600"></datalist>
    </form>
  );
};

export { SearchAutocomplete };
