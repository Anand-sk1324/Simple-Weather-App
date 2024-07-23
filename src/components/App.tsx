import React, { useState } from "react";
import SearchBar from "./SearchBar";
import CurrentWeather from "./CurrentWeather";
import DayForeCast from "./DayForeCast";
import CurrentAir from "./CurrentAir";
import WeekForeCast from "./WeekForeCast";
import Container from "./Container";

import { useQuery } from "react-query";
import { fetchCurrent, selectCurrent } from "../utils/CurrentUtils";

const App = () => {
  const [coord, setCoord] = useState({ lat: 13.17, lon: 80.27 });
  const { data: currentData, isLoading: isCurrentLoading } = useQuery(
    ["current-data", coord],
    () => fetchCurrent(coord.lat, coord.lon),
    {
      onSuccess: (data) => console.log(data),
      onError: (data) => console.log(data),
      select: (data) => selectCurrent(data.data),
    }
  );
  return (
    <main className="max-md:text-sm  text-slate-300 w-full bg-slate-950 max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-layout lg:grid-cols-layout  gap-4 p-4 font-mono max-w-screen-xl mx-auto  ">
      <div className=" lg:col-span-2">
        <SearchBar setCoord={setCoord} />
      </div>
      <div>
        <CurrentWeather data={currentData} isLoading={isCurrentLoading} />
      </div>
      <div className=" lg:col-start-1">
        <Container>
          <DayForeCast coord={coord} />
        </Container>
      </div>
      <div className=" lg:col-start-1 col-span-2">
        <Container>
          <CurrentAir data={currentData} isLoading={isCurrentLoading} />
        </Container>
      </div>
      <div className=" lg:row-span-2 lg:col-start-2 lg:row-start-2 b">
        <Container>
          <WeekForeCast coord={coord} />
        </Container>
      </div>
    </main>
  );
};

export default App;
