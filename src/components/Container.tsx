import React from 'react'

const Container = ({children}) => {
  return (
    <div className=' bg-slate-900 w-full h-full rounded-3xl max-lg:min-h-52 text-slate-400 px-8 py-6 font-bold tracking-wide  '>
      {children}
    </div>
  )
}

export default Container
