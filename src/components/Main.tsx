import React from 'react'
import SearchBar from './SearchBar'
import CurrentWeather from './CurrentWeather'
import DayForeCast from './DayForeCast'
import CurrentAir from './CurrentAir'
import WeekForeCast from './WeekForeCast'
import Container from './Container'


const Main = () => {
  return (
    <main className='text-slate-300 w-full bg-slate-950 max-lg:flex max-lg:flex-col lg:grid lg:grid-rows-layout lg:grid-cols-layout  gap-4 p-4 font-mono max-w-screen-xl mx-auto  '>

        <div className=' lg:col-span-2'><SearchBar /></div>
        <div><CurrentWeather  /></div>
        <div className=' lg:col-start-1'><Container><DayForeCast /></Container></div>
        <div className=' lg:col-start-1 col-span-2'><Container><CurrentAir /></Container></div>
        <div className=' lg:row-span-2 lg:col-start-2 lg:row-start-2 b'><Container><WeekForeCast /></Container></div>
    </main>
  )
}

export default Main
