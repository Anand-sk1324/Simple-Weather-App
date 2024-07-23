import React, { Fragment } from "react";
import WeatherCard from "./WeatherCard";
import SubHeading from "./SubHeading";
import Divider from "./Divider";
import useForeCastHourly from "../utils/useForeCastHourly";
import { fetch, select } from "../utils/ForeCastHourlyUtils";

import { useQuery } from "react-query";
import axios from "axios";

const DayForeCast = ({ coord }) => {
  const { data, isLoading } = useQuery(
    ["forecast", coord],
    () => fetch(coord.lat, coord.lon),
    {
      select: (data) => select(data.data),
    }
  );
  if (isLoading) return <></>;
  return (
    <div className=" flex flex-col h-full">
      <SubHeading>TODAY'S WEATHER</SubHeading>
      <div className="flex flex-col md:flex-row justify-between items-center mt-2 group divider-vertical h-full">
        {data.map((data, ind) => (
          <Fragment key={data.time}>
            {ind != 0 && <Divider />}
            <WeatherCard data={data} />
          </Fragment>
        ))}
      </div>
    </div>
  );
};

export default DayForeCast;
