import React, { useEffect, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'
import MockCities from '../mockData/citiesData'
import Divider from './Divider'
const SearchBar = () => {
  const [citiesData, setCitiesData] = useState({})
  const [searchText, setSearchText] = useState('')
  // console.log(MockCities.data)
  const getCities = () => {
    setCitiesData({})
    setTimeout(()=> {
      setCitiesData(MockCities.data)
    }, 1000)
  }
  useEffect(()=>{
    getCities()
  },[searchText])
  return (
    <form className='w-full h-10 relative z-10' onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search" className=' peer flex justify-between items-center rounded-2xl text-slate-950 px-4 py-2 bg-slate-300 cursor-text'>
      <input type="text" placeholder='Search for cities...' className=' bg-transparent text-xl outline-none grow placeholder:text-slate-500' id='search'
      value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
      <MagnifyingGlassIcon className='w-6 h-6 text-slate-500 inline' />
      </label>

      <div className=' hidden peer-focus-within:block w-full bg-slate-300 mt-2 rounded-2xl py-3 px-2 absolute top-full'>
        {Object.keys(citiesData).length === 0 
        ? <div className='text-slate-400'>Loading...</div>
        : <div>
          {
            Object.values(citiesData).map((cityData, ind) => (
              <>
              <button key={cityData.id} className=' py-2 text-slate-500 hover:text-slate-950 cursor-pointer w-full text-left'>
                {cityData.city}
              </button>
              {Object.keys(citiesData).length -1 !== ind && <Divider/>}
              </>
            ))
          }
        </div>
        }
      </div>
    </form>
  )
}

export default SearchBar
