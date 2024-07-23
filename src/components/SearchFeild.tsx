import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const SearchFeild = ({ searchText, setSearchText }) => {
  return (
    <label
      htmlFor="search"
      className=" peer flex justify-between items-center rounded-2xl text-slate-950 px-4 py-2 bg-slate-300 cursor-text"
    >
      <input
        type="text"
        placeholder="Search for cities..."
        className=" bg-transparent text-xl outline-none grow placeholder:text-slate-500"
        id="search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
        autoComplete="off"
      />

      <MagnifyingGlassIcon className="w-6 h-6 text-slate-500 inline" />
    </label>
  );
};

export default SearchFeild;
