import React from 'react';


const SearchBar = () => {
    return (
      <div className="w-full max-w-[1600px] mx-auto sm:mx-[150px] py-4">
        <input
          type="text"
          placeholder= " Search..."
          className=" w-full h-[64px] sm:w-11/12 md:w-3/4 sm:h-14 md:h-16 sm:ml-8 border-gray-300 rounded-lg border p-2 pl-4 focus:outline-none focus:border-gray-500"
        ></input>
      </div>
    );
  };
  
  export default SearchBar;
