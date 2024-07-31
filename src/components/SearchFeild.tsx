import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

const SearchFeild = ({
  searchText,
  setSearchText,
  isResponseOpen,
  setIsResponseOpen,
}) => {
  const handleOnChange = (e) => {
    if (e.target.value === "") setIsResponseOpen(false);
    if (e.target.value !== "") setIsResponseOpen(true);
    setSearchText(e.target.value);
  };
  const toggleIsResponseOpen = () => {
    if (isResponseOpen) setIsResponseOpen(false);
    else setIsResponseOpen(true);
  };
  return (
    <label
      htmlFor="search"
      className=" peer flex justify-between items-center rounded-2xl text-slate-950 px-4 py-2 bg-slate-200 cursor-text"
    >
      <input
        type="text"
        placeholder="Search for cities..."
        className=" lg:text-lg bg-transparent outline-none grow placeholder:text-slate-500"
        id="search"
        value={searchText}
        onChange={(e) => {
          handleOnChange(e);
        }}
        onClick={toggleIsResponseOpen}
        autoComplete="off"
      />

      <MagnifyingGlassIcon className="w-6 h-6 text-slate-500 inline" />
    </label>
  );
};

export default SearchFeild;
