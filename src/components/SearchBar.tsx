import React, { useEffect, useState, useDeferredValue } from "react";
import SearchField from "./SearchFeild";
import SearchResponse from "./SearchResponse";
import { fetchGeoData, selectGeoData } from "../utils/GeoApiUtils";
import { useQuery } from "react-query";

const SearchBar = ({ setCoord }) => {
  const [searchText, setSearchText] = useState("");
  const [deferredSearch, setDeferredSearch] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setDeferredSearch(searchText);
    }, 500);
    return () => clearTimeout(timer);
  }, [searchText]);

  const { data: citiesData } = useQuery(
    ["geoApi", deferredSearch],
    () => fetchGeoData(deferredSearch),
    {
      select: selectGeoData,
    }
  );

  return (
    <form
      className="w-full h-10 relative z-10 mb-4"
      onSubmit={(e) => e.preventDefault()}
      autoComplete="off"
    >
      <SearchField searchText={searchText} setSearchText={setSearchText} />

      <SearchResponse citiesData={citiesData} setCoord={setCoord} />
    </form>
  );
};

export default SearchBar;
