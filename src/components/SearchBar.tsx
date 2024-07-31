import React, { useEffect, useState, useDeferredValue } from "react";
import SearchField from "./SearchFeild";
import SearchResponse from "./SearchResponse";
import { fetchGeoData, selectGeoData } from "../utils/GeoApiUtils";
import { useQuery } from "react-query";

const SearchBar = ({ setCoord, setCityName }) => {
  const [searchText, setSearchText] = useState("");
  const [deferredSearch, setDeferredSearch] = useState("");
  const [isResponseOpen, setIsResponseOpen] = useState(false);

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
    <>
      <form
        className="w-full h-10 relative z-20 mb-4"
        onSubmit={(e) => e.preventDefault()}
        autoComplete="off"
      >
        <SearchField
          searchText={searchText}
          setSearchText={setSearchText}
          isResponseOpen={isResponseOpen}
          setIsResponseOpen={setIsResponseOpen}
        />

        <SearchResponse
          citiesData={citiesData}
          setSearchText={setSearchText}
          setCoord={setCoord}
          setCityName={setCityName}
          isResponseOpen={isResponseOpen}
          setIsResponseOpen={setIsResponseOpen}
        />
      </form>

      <div
        className={` z-10 h-screen w-[98vw] absolute left-0 top-0 ${
          isResponseOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsResponseOpen(false)}
      ></div>
    </>
  );
};

export default SearchBar;
