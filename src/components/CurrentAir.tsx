import React from 'react'
import StatusCard from './StatusCard'
import { FireIcon } from '@heroicons/react/16/solid'
import { FlagIcon } from '@heroicons/react/16/solid'
import { CloudIcon } from '@heroicons/react/16/solid'
import { SunIcon } from '@heroicons/react/16/solid'
import { ArrowTrendingUpIcon } from '@heroicons/react/16/solid'
import { ArrowTrendingDownIcon } from '@heroicons/react/16/solid'
import useCurrentData from '../hooks/useCurrentData'


const CurrentAir = () => {
  const [{feelsLike, humidity, pressure, wind, maxTemp, minTemp }] = useCurrentData()
  return (
    <div className='h-full pb-10'>
      <h3>AIR CONDITIONS</h3>
        <div className='grid  w-full h-full  grid-rows-2 grid-cols-2 md:grid-rows-2 md:grid-cols-3 gap-8 mt-6  '>
            <StatusCard Icon={<FireIcon width={20} />} title="Real Feel" value={`${feelsLike}°C`} />
            <StatusCard Icon={<FlagIcon width={20} />} title="Wind" value={`${wind}km`} />
            <StatusCard Icon={<CloudIcon width={20} />} title="Pressure" value={`${pressure}hPa`} />
            <StatusCard Icon={<SunIcon width={20} />} title="Humidity" value={`${humidity}%`} />
            <StatusCard Icon={<ArrowTrendingUpIcon width={20} />} title="Max Temp" value={`${humidity}%`} />
            <StatusCard Icon={<ArrowTrendingDownIcon width={20} />} title="Min Temp" value={`${humidity}%`} />
        </div>
    </div>
  )
}

export default CurrentAir
