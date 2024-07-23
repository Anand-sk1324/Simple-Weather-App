import React from "react";
import StatusCard from "./StatusCard";
import { FireIcon } from "@heroicons/react/16/solid";
import { FlagIcon } from "@heroicons/react/16/solid";
import { CloudIcon } from "@heroicons/react/16/solid";
import { SunIcon } from "@heroicons/react/16/solid";
import { ArrowTrendingUpIcon } from "@heroicons/react/16/solid";
import { ArrowTrendingDownIcon } from "@heroicons/react/16/solid";
import { GlobeAsiaAustraliaIcon as GrndLevelIcon } from "@heroicons/react/24/solid";
import { GlobeAsiaAustraliaIcon as SeaLevelIcon } from "@heroicons/react/24/outline";
import SubHeading from "./SubHeading";

const CurrentAir = ({ data, isLoading }) => {
  if (isLoading) return <></>;
  return (
    <div className="h-full pb-10">
      <SubHeading>AIR CONDITIONS</SubHeading>
      <div className="grid  w-full h-full grid-rows-6 grid-cols-1 sm:grid-rows-4 sm:grid-cols-2 md:grid-rows-2 md:grid-cols-4 gap-8 mt-6  ">
        <StatusCard
          Icon={<FireIcon width={20} />}
          title="Real Feel"
          value={`${data.feelsLike}°C`}
        />
        <StatusCard
          Icon={<FlagIcon width={20} />}
          title="Wind"
          value={`${data.wind}km`}
        />
        <StatusCard
          Icon={<CloudIcon width={20} />}
          title="Pressure"
          value={`${data.pressure}hPa`}
        />
        <StatusCard
          Icon={<SunIcon width={20} />}
          title="Humidity"
          value={`${data.humidity}%`}
        />
        <StatusCard
          Icon={<ArrowTrendingUpIcon width={20} />}
          title="Max Temp"
          value={`${data.maxTemp}°C`}
        />
        <StatusCard
          Icon={<ArrowTrendingDownIcon width={20} />}
          title="Min Temp"
          value={`${data.minTemp}°C`}
        />
        <StatusCard
          Icon={<GrndLevelIcon width={20} />}
          title="Ground Level"
          value={`${data.grndLevel}hPa`}
        />
        <StatusCard
          Icon={<SeaLevelIcon width={20} />}
          title="Sea Level"
          value={`${data.seaLevel}hPa`}
        />
      </div>
    </div>
  );
};

export default CurrentAir;
